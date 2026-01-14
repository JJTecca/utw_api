<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Booking;
use App\Models\UserBookingLink;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(UserRequest $request) {
        $validated = $request->validated();

        $user = User::create([
            'firstName' => $validated['firstName'],
            'lastName' => $validated['lastName'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'country' => $validated['country'],
        ]);
        Auth::login($user);
        
        return redirect()->route('dashboard');
    }

    public function checkFlightStatus(Request $request) {
        // Validate user id and flight number
        $validated = $request->validate([
            'userId'       => 'required|integer|exists:users,id',
            'flightNumber' => 'required|string',
        ]);

        $bookingIds = UserBookingLink::where('user_id', $validated['userId'])
            ->select('booking_id')
            ->get()
            ->map(function($link) {
                return $link->booking_id;
            })
            ->toArray();

        // Get all bookings for this user
        $userBookings = Booking::whereIn('id', $bookingIds)
            ->select([
                'id',
                'passenger_count',
                'destination_city_name',
                'destination_airport_id',
                'arrival_city_name',
                'arrival_airport_id',
                'experience_type',
                'flight_number',
                'booking_date',
                'description'
            ])
            ->get();

        // Search for the specific flight number
        $flightStatus = $userBookings->first(function($booking) use ($validated) {
            return $booking->flight_number == $validated['flightNumber'];
        });

        if ($flightStatus) {
            return response()->json([
                'success' => true,
                'message' => 'Flight found',
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Flight number not found in your bookings',
            ], 404);
        }
    }
}