<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'user_id',
        'passenger_count',
        'destination_city_name',
        'destination_airport_id',
        'arrival_city_name',
        'arrival_airport_id',
        'experience_type',
        'flight_number',
        'departure_day_date',
        'arrival_day_date',
        'description'        
    ];

    public function users() {
        return $this->belongsToMany(User::class, 'user_booking_links');
    }

    public function report() {
        return $this->hasOne(Report::class);
    }
}
