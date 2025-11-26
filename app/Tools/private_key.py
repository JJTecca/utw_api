import jwt
import time

# Path to your .pem file
# Use you local path to the file
PRIVATE_KEY_PATH = "D:\\secret\\utw-dependabot-scanner.2025-11-26.private-key.pem"
APP_ID = 2360249  # Found in your GitHub App settings

with open(PRIVATE_KEY_PATH, "r") as key_file:
    private_key = key_file.read()

now = int(time.time())
payload = {
    "iat": now,
    "exp": now + (10 * 60),  # JWT expires in 10 minutes , could be more
    "iss": APP_ID            # GitHub App ID
}

jwt_token = jwt.encode(payload, private_key, algorithm="RS256")
print("KEY BEGINNING : => \n" + str(private_key))
print("JWT token created!")
