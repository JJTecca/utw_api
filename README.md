# UTW Airlines - Full-Stack Flight Management System

A comprehensive airline management system built with React TypeScript frontend and Laravel PHP backend, featuring flight booking, user management, and reporting capabilities.

## 🚀 Features

### Frontend (React TypeScript + Material-UI)
- **Interactive Flight Search**: Dynamic search interface with city selection and date pickers
- **Experience-Based Booking**: Choose from different travel experiences (Exotic, Casual, Across Country, Business)
- **Flight Status Tracking**: Real-time flight status checking with flight number lookup
- **Responsive Design**: Optimized for both desktop and mobile devices
- **User Authentication**: Secure login/logout functionality with account management
- **Dynamic UI Sections**: Rotating panels for flight search, experiences, and flight status
- **Booking Management**: Expandable accordion interface for flight details and submissions

### Backend (Laravel PHP)
- **RESTful API**: Structured endpoints for all operations
- **User Authentication**: Secure session-based auth with middleware protection
- **Booking Management**: Complete CRUD operations for flight bookings
- **Reporting System**: Comprehensive flight reports and analytics
- **Database Relationships**: Efficient Eloquent relationships between users, bookings, and reports
- **CSRF Protection**: Built-in security for form submissions

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **UI Library**: Material-UI (MUI) with custom styling
- **Routing**: Inertia.js for seamless navigation
- **HTTP Client**: Axios for API communication
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Material-UI Icons

# 🔒 Security Features

## 🧩 Authentication & Session Security

### Laravel Backend Security

* **Session-based Authentication:** Secure cookie-based sessions with full encryption.
* **Middleware Protection:** All sensitive routes require user authentication.
* **Route Guarding:** Comprehensive route protection using Laravel middleware layers.

## 🔑 Password Security

* **Bcrypt Hashing:** Automatic password hashing using Laravel’s built-in bcrypt algorithm.
* **Secure Storage:** Passwords are **never stored in plain text**.
* **Hidden Attributes:** Sensitive fields are excluded from API responses by default.

## 🛡️ CSRF Protection

### Backend Implementation

* **Automatic Token Generation:** Laravel generates and validates CSRF tokens automatically.
* **Form Request Protection:** All `POST` routes are protected by default.
* **Session-based Tokens:** Tokens are tied directly to authenticated user sessions.

### Frontend Integration

* **Token Extraction:** CSRF tokens are extracted from HTML meta tags.
* **Request Headers:** Tokens are included in all `POST` request headers.
* **Axios Configuration:** Proper credential configuration ensures secure session maintenance.


## 🔐 Data Protection & Encryption

### User ID Encryption

* **Custom Encryption Service:** Adds an additional security layer for user identifiers.
* **Laravel Encryption:** Leverages Laravel’s built-in encryption utilities.
* **Secure Transmission:** Encrypted IDs used for all API communications.

## 🧹 Input Validation & Sanitization

* **Mass Assignment Protection:** Only explicitly defined fields can be mass-assigned.
* **Eloquent ORM Security:** SQL injection is mitigated through parameter binding.
* **Type Safety:** TypeScript interfaces ensure strict frontend data validation.

### Backend
- **Framework**: Laravel 10+
- **Database**: MySQL with Eloquent ORM
- **Authentication**: Laravel Sanctum/Session-based auth
- **API**: RESTful endpoints with JSON responses
- **Security**: CSRF protection, input validation, middleware
- **Templating**: Inertia.js for server-side rendering


## 🗄 Database Schema

### Core Models & Relationships

#### User Model
- `firstName`, `lastName`, `email`, `password`, `country`, `gender`
- **Relationships**: Many-to-Many with Booking via UserBookingLink

#### Booking Model
- `user_id`, `passenger_count`, `destination_city_name`, `destination_airport_id`
- `arrival_city_name`, `arrival_airport_id`, `experience_type`, `flight_number`
- `departure_day_date`, `arrival_day_date`, `description`
- **Relationships**: 
  - Many-to-Many with User via UserBookingLink
  - One-to-One with Report

#### Report Model
- `booking_id`, `flight_logs`, `maintenance`, `weather`, `financial`
- `passenger_reports`, `crew_reports`, `safety_reports`
- **Relationships**: Belongs to Booking

#### UserBookingLink Model
- `user_id`, `booking_id` (Pivot table)

## 🌐 API Routes

### Authentication Routes
- `POST /logout` - User logout
- `GET /profile` - User profile management
- `GET /dashboard` - Main dashboard (auth protected)

### Booking Routes
- `POST /dashboard/bookings` - Create new booking
- `GET /dashboard/view-bookings/destination` - View bookings by destination
- `POST /dashboard/submit-booking` - Finalize booking submission
- `GET /get-encrypted-user-id` - Get encrypted user ID for security

### Feature Routes
- `GET /dashboard/worldtour` - World Tour interface
- `GET /dashboard/experiences` - Travel experiences showcase

## 🔧 Installation & Setup

### Prerequisites
- PHP 8.1+
- Composer
- Node.js 16+
- MySQL 5.7+
- Redis (optional, for caching)
