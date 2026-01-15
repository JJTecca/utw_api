# ✈️ UTW Airlines - Premium Flight Booking Platform

A full-stack flight booking and management system built with Laravel and React, featuring multi-currency wallet management, flight search, booking workflows, and user profile management.

---

## 🚀 Tech Stack

### Backend
- **Framework**: Laravel 10.x (PHP 8.1+)
- **Database**: MySQL/PostgreSQL
- **Authentication**: Laravel Breeze with Inertia.js
- **API**: RESTful API with Laravel controllers
- **Validation**: Laravel Form Requests (PSR-1/PSR-12 compliant)
- **Security**: CSRF protection, middleware authentication, rate limiting

### Frontend
- **Framework**: React 18+ with TypeScript
- **UI Library**: Material-UI (MUI) v5
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Inertia.js (server-side routing)
- **Animations**: Framer Motion
- **Icons**: Material-UI Icons, Ant Design Icons
- **Styling**: MUI sx prop, custom style objects

### Additional Technologies
- **Currency Exchange**: Custom exchange rate system (config-based)
- **File Uploads**: Multi-file upload support
- **Form Handling**: Inertia.js forms
- **Type Safety**: TypeScript interfaces for props and data models

---

## 🔐 Security Features

### Authentication & Authorization
- **Session-based authentication** with Laravel Breeze
- **CSRF token protection** on all state-changing requests
- **Middleware guards** (`auth`, `throttle:60,1`) for protected routes
- **User authorization checks** (wallet ownership verification)
- **Password hashing** with bcrypt

### API Security
- **Rate limiting**: 60 requests per minute per user
- **Input validation**: Laravel Form Requests with strict rules
- **SQL injection prevention**: Eloquent ORM with parameterized queries
- **XSS protection**: React automatic escaping + Laravel sanitization
- **Encrypted user IDs**: Custom encryption for sensitive data transmission

### Payment Security
- **Educational purposes only** - no real money involved
- **Transaction validation**: Server-side balance checks
- **Wallet authorization**: Users can only access their own wallets
- **Audit trail**: Transaction history tracking
- **Error handling**: Graceful failure with user feedback

### Additional Measures
- **HTTPS enforcement** (recommended for production)
- **Environment variables** for sensitive configuration
- **PSR-12 compliance** for clean, maintainable code
- **TypeScript type safety** to prevent runtime errors

---

## 🌍 Deployment on Railway

### Prerequisites
1. Railway account ([railway.app](https://railway.app))
2. GitHub repository with your code
3. Environment variables configured

### Step-by-Step Deployment

#### 1. Create New Project on Railway
```bash
# Login to Railway CLI (optional)
npm install -g @railway/cli
railway login
```

#### 2. Connect GitHub Repository
1. Go to Railway dashboard → **New Project**
2. Select **Deploy from GitHub repo**
3. Choose your UTW Airlines repository
4. Railway will auto-detect Laravel

#### 3. Configure Environment Variables
Add these in Railway → **Variables** tab:

```env
# Application
APP_NAME="UTW Airlines"
APP_ENV=production
APP_KEY=base64:your-generated-key
APP_DEBUG=false
APP_URL=https://your-app.railway.app

# Database (Railway provides this automatically)
DB_CONNECTION=mysql
DB_HOST=${MYSQLHOST}
DB_PORT=${MYSQLPORT}
DB_DATABASE=${MYSQLDATABASE}
DB_USERNAME=${MYSQLUSER}
DB_PASSWORD=${MYSQLPASSWORD}

# Session & Cache
SESSION_DRIVER=database
CACHE_DRIVER=file
QUEUE_CONNECTION=sync

# Security
CSRF_COOKIE_SECURE=true
SESSION_SECURE_COOKIE=true

# Custom
EXCHANGE_RATE_BASE=USD
```

#### 4. Add MySQL Database
1. In Railway project → **New** → **Database** → **MySQL**
2. Railway automatically links environment variables

#### 5. Configure Build Settings
Create `railway.json` in project root:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build && composer install --optimize-autoloader --no-dev"
  },
  "deploy": {
    "startCommand": "php artisan migrate --force && php artisan config:cache && php artisan route:cache && php artisan view:cache && php artisan serve --host=0.0.0.0 --port=$PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

#### 6. Add Nixpacks Configuration
Create `nixpacks.toml`:

```toml
[phases.setup]
nixPkgs = ["php81", "php81Packages.composer", "nodejs-18_x"]

[phases.install]
cmds = [
  "composer install --optimize-autoloader --no-dev",
  "npm ci",
  "npm run build"
]

[phases.build]
cmds = ["php artisan config:cache"]

[start]
cmd = "php artisan serve --host=0.0.0.0 --port=$PORT"
```

#### 7. Deploy
- Push code to GitHub → Railway auto-deploys
- Monitor build logs in Railway dashboard
- Access app at `https://your-project.railway.app`

### Post-Deployment
```bash
# Run migrations (one-time via Railway CLI)
railway run php artisan migrate --force

# Generate app key if not set
railway run php artisan key:generate

# Clear caches
railway run php artisan cache:clear
railway run php artisan config:clear
```

---

## 💻 Installation & Setup (Local Development)

### Prerequisites
- PHP 8.1 or higher
- Composer 2.x
- Node.js 18+ and npm
- MySQL 8.0 or PostgreSQL 13+
- Git

### 1. Clone Repository
```bash
git clone https://github.com/your-username/utw-airlines.git
cd utw-airlines
```

### 2. Backend Setup
```bash
# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=utw_airlines
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 3. Database Setup
```bash
# Create database
mysql -u root -p
CREATE DATABASE utw_airlines;
EXIT;

# Run migrations
php artisan migrate

# (Optional) Seed database with test data
php artisan db:seed
```

### 4. Frontend Setup
```bash
# Install Node dependencies
npm install

# Build assets for development
npm run dev

# Or build for production
npm run build
```

### 5. Configure Exchange Rates
Create `config/exchange.php`:

```php
<?php

return [
    'base_currency' => env('EXCHANGE_RATE_BASE', 'USD'),
    'rates' => [
        'USD' => 1.0,
        'EUR' => 0.92,
        'GBP' => 0.78,
        'JPY' => 145.0,
        'RON' => 4.60,
        'CNY' => 7.24,
        // Add more currencies as needed
    ],
];
```

### 6. Start Development Server
```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite dev server
npm run dev
```

Access the application at `http://localhost:8000`

### 7. Create Test User
```bash
php artisan tinker

# In tinker console:
\App\Models\User::factory()->create([
    'email' => 'test@utw.com',
    'password' => bcrypt('password')
]);
```

### 8. Configure File Permissions (Linux/Mac)
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

---

## 📁 Project Structure

```
utw-airlines/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── BookingController.php
│   │   │   ├── DashboardController.php
│   │   │   ├── DestinationController.php
│   │   │   ├── ProfileController.php
│   │   │   ├── WalletController.php
│   │   │   └── TransactionHistoryController.php
│   │   ├── Requests/
│   │   │   ├── PaymentRequest.php
│   │   │   └── WalletRequest.php
│   │   └── Middleware/
│   ├── Models/
│   │   ├── User.php
│   │   ├── Wallet.php
│   │   ├── Booking.php
│   │   ├── Destination.php
│   │   └── TransactionHistory.php
│   └── Auxiliar/
│       └── Encrypt.php
├── resources/
│   └── js/
│       ├── Pages/
│       │   ├── Dashboard/
│       │   │   ├── index.tsx
│       │   │   └── Dashboard.styles.ts
│       │   ├── Booking/
│       │   │   ├── index.tsx
│       │   │   └── Booking.styles.ts
│       │   ├── Experiences/
│       │   │   ├── index.tsx
│       │   │   └── Experiences.styles.ts
│       │   └── ProfileMenu/
│       │       ├── index.tsx
│       │       ├── ProfileManagement.styles.ts
│       │       ├── constants.tsx
│       │       └── HelpModal.tsx
│       ├── Components/
│       │   ├── FlightModal/
│       │   ├── InfoModal/
│       │   ├── FlightDocuments/
│       │   └── UploadButton/
│       └── Layouts/
│           ├── AuthenticatedLayout.tsx
│           └── BookingLayout.tsx
├── routes/
│   └── web.php
├── database/
│   └── migrations/
├── config/
│   └── exchange.php
├── public/
│   └── Images/
├── .env.example
├── composer.json
├── package.json
├── tsconfig.json
├── railway.json
├── nixpacks.toml
└── README.md
```

---

## 🔧 Configuration

### Environment Variables
Key configurations in `.env`:

```env
# Application
APP_NAME="UTW Airlines"
APP_ENV=local
APP_DEBUG=true

# Security
SESSION_LIFETIME=120
SANCTUM_STATEFUL_DOMAINS=localhost

# Custom
EXCHANGE_RATE_BASE=USD
```

### Currency System
The platform supports 35+ currencies with automatic conversion. Exchange rates are defined in `config/exchange.php` and can be updated as needed.

### File Uploads
Configure upload limits in `php.ini`:
```ini
upload_max_filesize = 10M
post_max_size = 10M
```

---

## 🧪 Testing

### Run PHP Tests
```bash
php artisan test
```

### Run Type Checking
```bash
npm run type-check
```

### Code Quality
```bash
# PHP CodeSniffer (PSR-12)
composer run-script phpcs

# PHP Stan (static analysis)
composer run-script phpstan
```

---

## 📊 Key Features

### User Management
- Profile management with verification system
- Multi-currency wallet support
- Transaction history tracking
- Document upload functionality

### Flight Booking
- Search flights by destination, arrival city, and experience type
- Three travel classes: First Class, Business Class, Economy Class
- Dynamic pricing based on class and route
- Checkout system with wallet integration
- Flight status checking

### Dashboard
- Interactive flight search with slideshow hero section
- Round-trip and one-way booking options
- Passenger count selection
- City-to-city route filtering

### World Tour
- Destination browsing with detailed information
- Direct booking to destinations
- Virtual currency payment system

### Payment System
- Multi-wallet support (35+ currencies)
- Automatic currency conversion
- USD wallet prioritization
- Transaction approval workflow
- Educational payment simulation

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow PSR-12 for PHP code
- Use TypeScript for all React components
- Write descriptive commit messages
- Add JSDoc/PHPDoc comments for complex functions

---

## 📝 License

This project is for educational purposes only. No real money transactions are involved.

---

## 👥 Authors

- **Maior Cristian** - *Lead Developer & Software Architect*
- **Niculescu Cristian** - *Co-Developer Frontend*
- **Sasu Daniel** - *Co-Developer Security Infrastructure & Backend*
- **Deconescu Eduard** - *Co-Developer Backend*

---

## 🐛 Known Issues & Limitations

- Payment system is simulated (educational purposes)
- Exchange rates are static (not fetched from live APIs)
- Flight data is mock data for demonstration
- No real flight API integration

---

## 🔮 Future Enhancements

- [ ] Integration with real flight APIs (Amadeus, Skyscanner)
- [ ] Real-time currency exchange rate updates
- [ ] Email notifications for bookings
- [ ] Multi-language support
- [ ] Mobile app development
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Advanced search filters (stops, airlines, times)
- [ ] Loyalty program implementation
- [ ] Admin dashboard for flight management

---

---

## 🙏 Acknowledgments

- Material-UI for the comprehensive component library
- Laravel community for excellent documentation
- Inertia.js for seamless React-Laravel integration
- Railway for simplified deployment

---

**Built with ❤️ using Laravel, React, and TypeScript**
