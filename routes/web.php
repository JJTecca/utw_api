<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionHistoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WalletController;
use App\Models\Wallet;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

/**********************************************************
 * Web Routes
 * 1. Each route shall have an implementation
 * 2. Majority of routes have to be inside middleware
 * 3. Make sure to call the right controller based on action
 * 4. Routes returning sensitive data (like user IDs) should protect it (for example, encrypt it before sending).
 * 5. Dashboard, tours, and experiences pages are only accessible to authenticated users.
 * 6. Booking-related routes should validate inputs and ensure only authorized users can create, view, or submit bookings.
 **********************************************************/
Route::get('/', function () {
    return redirect('/login');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    {/********************************Tour Routes******************************** */}
    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard/index');
    // })->name('dashboard');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/dashboard/worldtour', [DestinationController::class, 'index'])->name('tour.view');

    Route::patch('/dashboard/worldtour/booking-payment', [DestinationController::class, 'bookDestination'])->name('destination.book');

    Route::post('/dashboard/worldtour/transaction-histories', [TransactionHistoryController::class, 'store'])->name('transaction.store');
    {/**************************************************************************** */}

    Route::get('/get-encrypted-user-id', function (Request $request) {
        return response()->json([
            'encrypted_data' => \App\Auxiliar\Encrypt::encryptUserId($request->user()->id),
        ]);
    });
    
    {/********************************Profile Routes****************************** */}
    Route::get('/profileMenu', [ProfileController::class, 'index'])->name('profile');

    Route::patch('/profileMenu/payment-process', [WalletController::class, 'payment'])->name('profile.payment');
    {/**************************************************************************** */}

    {/********************************Dashboard Routes****************************** */}
    Route::post('/dashboard/bookings', [BookingController::class, 'storeBooking'])->name('dashboard.bookings');

    Route::get('/dashboard/view-bookings/destination', [BookingController::class, 'index'])->name('dashboard.view');

    Route::post('/dashboard/submit-booking', [BookingController::class, 'submitBooking'])->name('store');

    Route::patch('/dashboard/view-bookings/payment-process', [BookingController::class, 'paymentBooking'])->name('booking.payment');

    Route::post('/dashboard/check-flight-status', [UserController::class, 'checkFlightStatus'])->name('dashboard.check');

    Route::get('/dashboard/experiences', function () { 
        return Inertia::render('Experiences/index');
    })->name('dashboard.experiences');
    {/*************************************************************************** */}

});


Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');


require __DIR__.'/auth.php';