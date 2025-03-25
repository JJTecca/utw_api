<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'destination_city_name',
        'destination_arrival_id',
        'arrival_city_name',
        'arrival_airport_id',
        'experience_type',
        'flight_number',
        'flight_number_date'        
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
