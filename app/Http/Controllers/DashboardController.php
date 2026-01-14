<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $allBookings = Booking::all();

        //Get only the user id
        $currentUser = User::where('id',Auth::id())->pluck('id')->first(); 
        //dd($currentUser); //Test

        $experienceTypes = Booking::distinct()->pluck('experience_type')->toArray();
        $departureCities = Booking::distinct()->pluck('destination_city_name')->toArray();
        $arrivalCities = Booking::distinct()->pluck('arrival_city_name')->toArray();
        
        $allCities = array_unique(array_merge($departureCities, $arrivalCities));
        sort($allCities); // Sort alphabetically
        
        /**********Testing ************
            dd($experienceTypes);
        *******************************/
        return Inertia::render('Dashboard/index', [
            'experience_types' => $experienceTypes,
            'availableCities' => $allCities,
            'departureCities' => $departureCities,
            'arrivalCities' => $arrivalCities,
            'bookings' => $allBookings,
            'user_id' => $currentUser
        ]);
    }
}