import jwt
import time
import requests
import json
import openpyxl
import sys

# -----------------------------
# CONFIG
# -----------------------------
APP_ID = 2360493
PRIVATE_KEY_PATH = "D:\\secret\\utw-dependabot-scanner.2025-11-26.private-key.pem"
OWNER = "UTW-Org"
REPO = "utw_api"
OUTPUT_JSON = "dependabot_alerts.json"
OUTPUT_EXCEL = "dependabot_alerts.xlsx"

# -----------------------------
# STEP 1: CREATE JWT
# -----------------------------
try:
    with open(PRIVATE_KEY_PATH, "r") as f:
        private_key = f.read()
except Exception as e:
    sys.exit(f"Error reading private key: {e}")

now = int(time.time())
payload = {
    "iat": now,
    "exp": now + 600,
    "iss": APP_ID
}

jwt_token = jwt.encode(payload, private_key, algorithm="RS256")
if isinstance(jwt_token, bytes):
    jwt_token = jwt_token.decode("utf-8")
print("JWT token created!")

# -----------------------------
# STEP 2: GET INSTALLATION ID
# -----------------------------
headers = {"Authorization": f"Bearer {jwt_token}", "Accept": "application/vnd.github+json"}
resp = requests.get("https://api.github.com/app/installations", headers=headers)
resp.raise_for_status()
installations = resp.json()

installation_id = None
for inst in installations:
    if inst["account"]["login"].lower() == OWNER.lower():
        installation_id = inst["id"]
        break

if not installation_id:
    sys.exit(f"No installation found for org {OWNER}")
print(f"Installation ID: {installation_id}")

# -----------------------------
# STEP 3: GENERATE INSTALLATION TOKEN
# -----------------------------
url = f"https://api.github.com/app/installations/{installation_id}/access_tokens"
resp = requests.post(url, headers=headers)
resp.raise_for_status()
installation_token = resp.json()["token"]
print("Installation token obtained!")

# -----------------------------
# STEP 4: FETCH DEPENDABOT ALERTS
# -----------------------------
alerts = []
page = 1
per_page = 100

while True:
    alerts_url = f"https://api.github.com/repos/{OWNER}/{REPO}/dependabot/alerts?per_page={per_page}&page={page}"
    headers = {
        "Authorization": f"token {installation_token}",
        "Accept": "application/vnd.github+json"  # updated header
    }
    resp = requests.get(alerts_url, headers=headers)
    
    if resp.status_code in [404, 403]:
        sys.exit("Dependabot alerts not enabled, repo not found, or insufficient permissions.")
    resp.raise_for_status()
    
    page_alerts = resp.json()
    if not page_alerts:
        break
    alerts.extend(page_alerts)
    print(f"Fetched page {page} with {len(page_alerts)} alerts")
    page += 1

print(f"Total Dependabot alerts fetched: {len(alerts)}")

# Save JSON backup
with open(OUTPUT_JSON, "w") as f:
    json.dump(alerts, f, indent=2)

# -----------------------------
# STEP 5: EXPORT TO EXCEL
# -----------------------------
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Dependabot Alerts"

# Header row
ws.append([
    "Alert Number",
    "Package",
    "Severity",
    "Ecosystem",
    "Manifest Path",
    "Vulnerable Version",
    "Fixed Version",
    "CVE(s)",
    "URL",
])

for a in alerts:
    advisories = a.get("security_advisory", {})
    ws.append([
        a.get("number"),
        a.get("dependency", {}).get("package", {}).get("name"),
        advisories.get("severity"),
        a.get("dependency", {}).get("package", {}).get("ecosystem"),
        a.get("dependency", {}).get("manifest_path"),
        a.get("dependency", {}).get("vulnerable_version_range"),
        advisories.get("first_patched_version", {}).get("identifier"),
        ", ".join(advisories.get("identifiers", [{}])[0].get("value", "").split()) if advisories.get("identifiers") else "",
        a.get("html_url"),
    ])

wb.save(OUTPUT_EXCEL)
print(f"Excel saved as: {OUTPUT_EXCEL}")
