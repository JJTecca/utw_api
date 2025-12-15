<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    /* Laravel convention : Don't really need to have 1st arg the id of the table*/
    protected $fillable = [
        'booking_id',
        'flight_logs',
        'maintenance',
        'weather',
        'financial',
        'passenger_reports',
        'crew_reports',
        'safety_reports',
    ];

   /*****************************************************************************
     * Laravel convention : Singular function name, plural is highly discouraged
     /*****************************************************************************/
    public function booking() {
        return $this->belongsTo(Booking::class);
    }
}
