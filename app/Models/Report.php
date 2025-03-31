<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
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

    public function booking() {
        return $this->belongsTo(Booking::class);
    }
}
