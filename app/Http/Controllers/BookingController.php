<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function showBooking() {
        return Inertia::render('Booking/index');
    }
    
    public function storeBooking(BookingRequest $request) {
        $validated = $request->validated();
        $booking = Booking::create($validated);
       
        return response()->json([
            'succes' => true,
        ]);
    }
}
