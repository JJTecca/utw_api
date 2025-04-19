<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    
    public function storeBooking(BookingRequest $request) {
        $validated = $request->validated();
        Booking::create($validated);
        $bookingFiltered = Booking::where('destination_city_name', $request->destination_city_name)
                ->where('arrival_city_name',$request->arrival_city_name)
                ->select([
                    'destination_city_name',
                    'arrival_city_name',
                    'experience_type'
                ])->get(); //first=primu element din colectie , get = all colectie
        //asta ar fi ok asa sa imi dea booking insa am nevoie de o alta tabela de Trip 
        return response()->json([
            'message' => true,
            'bookings' => $bookingFiltered
        ]);
    }
}
