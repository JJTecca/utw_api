<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Models\Booking;
use Illuminate\Foundation\Application;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Redis;
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
Route::get('/', function () {
    return redirect('/login');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/index');
    })->name('dashboard');

    Route::get('/dashboard/worldtour', function () { //numai daca esti logat merge
        return Inertia::render('Tour/index');
    })->name('dashboard.worldtour'); // dashboard/worldtour

    Route::get('/get-encrypted-user-id', function (Request $request) {
        return response()->json([
            'encrypted_data' => \App\Auxiliar\Encrypt::encryptUserId($request->user()->id),
        ]);
    });
    
    Route::get('/profileMenu', [ProfileController::class, 'profileMenu'])->name('profile');

    Route::post('/dashboard/bookings', [BookingController::class, 'storeBooking'])->name('dashboard.bookings');

    Route::get('/dashboard/experiences', function () { 
        return Inertia::render('Experiences/index');
    })->name('dashboard.experiences');

});


Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');


require __DIR__.'/auth.php';