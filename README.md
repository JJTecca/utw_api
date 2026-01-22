# ✈️ UTW Airlines - Full-Stack Flight Management System

A comprehensive airline management system built with a React + TypeScript frontend and a Laravel PHP backend, providing flight booking, wallet-based payments, profile management, and reporting for an airline-style experience.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Database Schema](#database-schema)
- [API Routes](#api-routes)
- [Frontend Pages](#frontend-pages)
- [Installation & Setup](#installation--setup)
- [Security](#security)
- [Project Structure](#project-structure)

---

## Overview

UTW Airlines simulează un sistem modern de management de zboruri, cu integrare între un frontend interactiv (React + MUI) și un backend robust (Laravel, MySQL). Platforma acoperă întregul flux: de la căutare și booking de zboruri, până la administrare de profil, portofele multi-valută și rapoarte detaliate per booking.

---

## Key Features

### Frontend

- **Dashboard de zboruri** cu:
  - Căutare dinamică: oraș plecare/sosire, date, număr pasageri, tip de experiență (First/Business/Economy)
  - Hero slideshow cu imagini de avion și UI animat (Framer Motion)
  - Secțiune de „Why choose UTW?" cu beneficii afișate card-based

- **Booking screen**:
  - Listă de zboruri cu accordion (detalii, preț, rating, durată mock, companie)
  - Checkout dialog cu alegere metodă de plată (wallet / bank transfer)
  - Integrare cu portofelele utilizatorului și calcul total pe baza clasei de călătorie

- **Profile / Wallet management**:
  - Layout de profil cu carduri pentru date utilizator, status de verificare, acțiuni și setări
  - Administrare portofele multi-valută (35+ monede, ex: EUR, RON, USD etc.)
  - Dialog de „Add funds" cu quick deposit, actualizare în timp real a totalului în USD și istoric tranzacții

### Backend

- **Laravel 10+** cu routing RESTful și middleware `auth` + `throttle`
- **Booking management**:
  - Tabel `bookings` cu informații completă despre zbor (orașe, experiență, număr zbor, descriere etc.)
  - Pivot `user_booking_links` pentru user–booking Many-to-Many

- **Reporting**:
  - Tabel `reports` legat 1:1 de `bookings`, cu câmpuri pentru flight_logs, maintenance, weather, financial, passenger_reports, crew_reports, safety_reports

- **Wallet & Destinations**:
  - Tabel `wallets` legat de user, cu enum de monede și valoare
  - Tabel `destinations` pentru „World Tour": titlu, descriere, poză, rating, reviews, price, category, is_featured

---

## Tech Stack

### Frontend

- **React 18 + TypeScript** – interfețe strongly typed și hooks (useState, useEffect)
- **Material-UI (MUI)** – AppBar, Drawer, Cards, Dialogs, Tabs, Forms, Icons
- **Framer Motion** – animații pentru slide-uri și secțiuni animate
- **Inertia.js** – comunicare între Laravel și React fără API clasic separat

### Backend

- **Laravel 10+** – routing, controllers, middleware, Eloquent ORM
- **MySQL** – stocare date pentru users, bookings, reports, wallets, destinations
- **Sessions & CSRF** – mecanisme implicite Laravel pentru autentificare și protecție request

---

## Architecture

La nivel logic, aplicația este structurată astfel:

- **Client (React + MUI)** – UI pentru dashboard, booking, profil, wallet
- **Server (Laravel)** – controllers, validare, securitate, business logic și acces DB
- **Database (MySQL)** – tabele normalizate pentru users, bookings, wallets, reports, destinations

Flux tipic:

1. User-ul accesează `/dashboard` → Inertia renderizează componenta React `Dashboard`
2. User-ul face booking → frontend trimite request la rutele de booking (`/dashboard/bookings`, `/dashboard/submit-booking`)
3. Plată → integrare cu route de payment pentru booking sau wallet (`/dashboard/view-bookings/payment-process`, `/profileMenu/payment-process`)
4. Profil & wallet → `/profile`, `/profileMenu`

---

## Database Schema

### Users

- Tabel `users`:
  - `id`, `firstName`, `lastName`, `email`, `password`, `country`, `gender`, `remember_token`, timestamps
- Relații:
  - One-to-Many cu `wallets`
  - Many-to-Many cu `bookings` prin `user_booking_links`

### Bookings

- Tabel `bookings`:
  - `id`, `passenger_count`, `destination_city_name`, `destination_airport_id`, `arrival_city_name`, `arrival_airport_id`, `experience_type`, `flight_number`, `booking_date`, `description`, timestamps
- Relații:
  - Many-to-Many cu `users` prin `user_booking_links`
  - One-to-One cu `reports`

### UserBookingLinks

- Tabel pivot `user_booking_links`:
  - `id`, `user_id`, `booking_id`, timestamps
  - FK către `users(id)` și `bookings(id)` cu `onDelete('cascade')`

### Reports

- Tabel `reports`:
  - `id`, `booking_id`, `flight_logs`, `maintenance`, `weather`, `financial`, `passenger_reports`, `crew_reports`, `safety_reports`, timestamps

### Wallets

- Tabel `wallets`:
  - `id`, `user_id`, `currency` (ENUM cu ~35 monede), `value`, timestamps
  - FK către `users(id)` cu `onDelete('cascade')`
  - Suportate: EUR, RON, USD, JPY, GBP, CHF, AUD, CAD, HKD, SGD, INR, KRW, SEK, MXN, NZD, NOK, TWD, BRL, ZAR, PLN, DKK, IDR, TRY, THB, ILS, HUF, CZK, CLP, PHP, COP, MYR, AED, SAR, PEN

### Destinations

- Tabel `destinations`:
  - `id`, `title` (unique), `subtitle`, `description`, `image`, `rating`, `reviews`, `price`, `is_featured`, `category`, timestamps

---

## API Routes

> Rutele sunt definite în `routes/web.php` și sunt protejate de middleware `auth` (și, în unele cazuri, de throttling).

### Auth & Profile

- `GET /` → redirect către `/login`
- `GET /profile` → profile view/edit (protected)
- `PATCH /profile` → update profil
- `DELETE /profile` → ștergere user
- `POST /logout` → logout user

### Dashboard & Flights

- `GET /dashboard` → Dashboard principal (lista bookings, orașe disponibile, user_id)
- `GET /dashboard/worldtour` → listă destinații (World Tour)
- `PATCH /dashboard/worldtour/booking-payment` → payment pentru booking World Tour
- `POST /dashboard/worldtour/transaction-histories` → salvare tranzacții

### Booking

- `POST /dashboard/bookings` → creare booking
- `GET /dashboard/view-bookings/destination` → listare bookings pentru destinații
- `POST /dashboard/submit-booking` → submit final booking
- `PATCH /dashboard/view-bookings/payment-process` → payment pentru booking ales

### Flight Status

- `POST /dashboard/check-flight-status` → verificare status zbor după număr flight

### Profile / Wallet

- `GET /profileMenu` → Profile + Wallet UI
- `PATCH /profileMenu/payment-process` → alimentare wallet / plată din wallet (payload: user_id, currency, value etc.)

### Encryption Utility

- `GET /get-encrypted-user-id` → întoarce `encrypted_data` pentru user-ul logat (id criptat)

---

## Frontend Pages

### Dashboard Page (Dashboard/index.tsx)

- Câmpuri principale:
  - `availableCities`, `departureCities`, `arrivalCities`, `bookings`, `user_id`
- Funcționalități:
  - Selectare oraș plecare/sosire, tip experiență, date de plecare/întoarcere, număr pasageri
  - Toggle între secțiuni (flight search, experiences, flight status)
  - Flight status modal cu input de flight number și request la backend

### Booking Page (Booking/index.tsx)

- Props:
  - `bookings`, `full_price`, `user`, `wallets`
- Funcționalități:
  - Filtrare după oraș plecare, oraș sosire, tip experiență
  - Calcule preț dinamic (First +50%, Business +25%, Economy -20% față de `full_price`)
  - Checkout dialog cu selecție wallet, sumă, notițe și submit

### Profile / Wallet Page (ProfileMenu/index.tsx)

- Props:
  - `users`, `wallets`, `total_usd`, `base_currency`, `transaction_history`
- Funcționalități:
  - Drawer responsive cu secțiuni: My Flights, Wallet, Help
  - Dialog „Verify your account" cu status pending/verified + feedback vizual
  - Dialog „Add funds" cu select valută, quick deposit, recalcul total USD
  - Integrare cu upload de documente și modale de ajutor/documente de zbor

---

## Installation & Setup

### Prerequisites

- PHP 8.1+
- Composer
- Node.js 16+
- npm / yarn
- MySQL (minim 5.7, recomandat 8.0+)
- Redis (opțional, pentru cache/sessions)

### 1. Backend

```bash
composer install
cp .env.example .env
php artisan key:generate
```

Configurează conexiunea la DB în `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=utw_airlines
DB_USERNAME=your_user
DB_PASSWORD=your_password
```

Apoi rulează migrațiile:

```bash
php artisan migrate
```

### 2. Frontend

```bash
npm install
# sau
yarn install
```

Rulează în development:

```bash
php artisan serve
npm run dev
```

Accesează aplicația la `http://localhost:8000`

---

## Security

### Auth & Sessions

- Session-based auth cu cookie-uri criptate
- Acces la rute sensibile doar prin middleware `auth`

### CSRF Protection

- Token CSRF generat automat și validat de Laravel pentru toate POST/PATCH/DELETE
- Frontend include token-ul în header-ele request-urilor

### Password Handling

- Parole hash-uite cu bcrypt, niciodată în plain text

### User ID Encryption

- Endpoint dedicat care returnează ID user criptat pentru utilizare sigură în frontend / URL-uri

### Rate Limiting

- Grup de rute protejat cu `throttle:60,1` (maxim 60 request-uri/minut)

### Input Validation & Sanitization

- Mass Assignment Protection în modele Eloquent
- SQL Injection mitigat prin parameter binding
- Type Safety pe frontend prin TypeScript interfaces

---

## Project Structure (High Level)

```
app/
  Http/Controllers/
    BookingController.php
    DashboardController.php
    DestinationController.php
    ProfileController.php
    UserController.php
    WalletController.php
  Models/
    User.php
    Booking.php
    Report.php
    Wallet.php
    Destination.php
    UserBookingLink.php
  Auxiliar/
    Encrypt.php

database/
  migrations/
    0001_01_01_000000_create_users_table.php
    0001_01_01_000001_create_cache_table.php
    0001_01_01_000002_create_jobs_table.php
    2025_03_10_202137_create_personal_access_tokens_table.php
    2025_03_20_210926_create_bookings_table.php
    2025_03_20_211923_create_reports_table.php
    2025_04_19_174951_create_user_booking_links_table.php
    2025_12_15_064834_create_wallets_table.php
    2025_12_24_153456_create_destinations_table.php

resources/js/
  Layouts/
    AuthenticatedLayout.tsx
    BookingLayout.tsx
  Pages/
    Dashboard/
      index.tsx
      Dashboard.styles.ts
    Bookings/
      index.tsx
      Booking.styles.ts
    ProfileMenu/
      index.tsx
      ProfileManagement.styles.ts
      constants.ts
      HelpModal.tsx
    Experiences/
      index.tsx
  Components/
    FlightModal/
      FlightModal.tsx
    FlightDocuments/
      DocumentsModal.tsx
    InfoModal/
      MyModal.tsx
    Modal.tsx
    UploadButton.tsx

routes/
  web.php
  auth.php

public/
  Images/
    turkish-menu.jpg
    edit-profile.jpg
    a350.jpg
    turkish-dashboard1.jpg
    Turkish_Boeing_787.jpg
    Turkish_boeing_777.jpg
    clouds-255012_1280.jpg
    turkish-dashboard-2.jpg

.env.example
composer.json
package.json
vite.config.js
tailwind.config.js
```

---

## Main Features Deep Dive

### Flight Search & Booking Flow

1. User-ul intră pe `/dashboard` și vede formula de căutare
2. Alege oraș plecare, sosire, date, pasageri și tip experiență (First/Business/Economy)
3. Click pe „Book Your Flight" → se calculează preț și se merge pe `/dashboard/bookings`
4. Pagina de booking afișează toate zborurile disponibile
5. User selectează un zbor și deschide checkout dialog
6. Alege metoda de plată (Wallet sau Bank Transfer) și confirm
7. Backend procesează booking și creeaza record în tabel `bookings` + legătura în `user_booking_links`

### Wallet System

- Fiecare user poate avea mai multe portofele (una per valută)
- Suport pentru ~35 de monede
- Automatic conversion la USD pentru afișare total
- Quick deposit opțiuni: $50, $100, $500, $1000
- Tranzacții tracked în `transaction_history`

### Flight Status Tracking

- User-ul introdu un flight number în modul din dashboard
- Backend lookup-uiază starea și returnează detalii
- Modal afișează status, gate, ore de plecare/sosire

### Reporting System

- După fiecare booking, un report poate fi generat
- Report conține: flight_logs, maintenance, weather, financial, passenger_reports, crew_reports, safety_reports
- Legat 1:1 cu booking printr-o cheie străină

---

## Notes for Developers

- Frontend folder structure este organizat pe feature: Dashboard, Bookings, ProfileMenu
- Fiecare pagină principale are un fișier `.tsx` și un fișier `.styles.ts`
- Material-UI este tema folosită, cu color scheme dark/light support
- Inertia.js conectează backend-ul cu frontend-ul seamless
- Type safety este prioritate – folosiți TypeScript `interface` pentru props și responses
- Rate limiting este setat la 60 req/min. – testați cu Postman dacă faceți batch operations

---

## Future Enhancements

- Real-time flight notifications (WebSocket)
- Integrare cu payment gateway real (Stripe, PayPal)
- Advanced analytics & reporting dashboard
- Multi-language support
- Mobile app (React Native)
- Integration cu airline APIs externe


**Made with ❤️ by UTW Airlines Development Team**

*Last updated: January 2026*
