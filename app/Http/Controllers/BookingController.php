<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use App\Models\UserBookingLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index(Request $request) {
        $destination = $request->query('destination_city_name');
        $arrival = $request->query('arrival_city_name');
        $experience = $request->query('experience_type');
        $bookings = Booking::where('destination_city_name', $destination)
                    ->where('arrival_city_name',$arrival)->where('experience_type',$experience)
                    ->select([
                        'id',
                        'passenger_count',
                        'destination_city_name',
                        'arrival_city_name',
                        'experience_type',
                        'description'
                    ])
                    ->get(); //first=primu element din colectie , get = all colectie */
        Booking::where('destination_city_name', $destination)
                ->where('arrival_city_name', $arrival)
                ->where('experience_type', $experience)
                ->increment('passenger_count', 1); //SAU ASA 
                //->update('passenger_count' , DB::raw('passenger_count + 1'));
        
        return Inertia::render('Booking/index',[
            'bookings' => BookingResource::collection($bookings)->resolve() //buna functie , unwraps collection to array
        ]);
        
    }
    
    public function submitBooking(BookingRequest $request) {
        $validate = $request->validated();
        $booking = Booking::where('destination_city_name', $request->destination_city_name)
                ->where('arrival_city_name', $request->arrival_city_name)
                ->where('experience_type', $request->experience_type)
                ->select([
                    'id',
                    'passenger_count',
                    'destination_city_name',
                    'arrival_city_name',
                    'experience_type',
                    'description'
                ])
                ->first();
        UserBookingLink::create([
            'user_id' => Auth::user()->id,
            'booking_id' => $booking->id 
        ]);  

        return response()->json([
            'message' => 'Booking linked successfully',
            'user_id' => Auth::user()->id
        ], 201); //mai trb schimbat
    }

    public function storeBooking(BookingRequest $request) {
        $validated = $request->validated();
        $currentBooking =  Booking::create($validated);

        return response()->json([
            'message' => true,
            'bookings' => $currentBooking,
        ]);
    }
}
