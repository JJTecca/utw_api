<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    /* Laravel convention : Don't really need to have 1st arg the id of the table*/
    protected $fillable = [
        'user_id',
        'passenger_count',
        'destination_city_name',
        'destination_airport_id',
        'arrival_city_name',
        'arrival_airport_id',
        'experience_type',
        'flight_number',
        'booking_date',
        'description'        
    ];

    /*****************************************************************************
     * Laravel convention : Singular function name, plural is highly discouraged
     /*****************************************************************************/
    public function user() {
        return $this->belongsToMany(User::class, 'user_booking_links');
    }

    public function report() {
        return $this->hasOne(Report::class);
    }
}
