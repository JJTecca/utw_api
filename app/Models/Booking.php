<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'user_id',
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

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function report() {
        return $this->hasOne(Report::class);
    }
}
