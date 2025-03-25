<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'flight_logs',
        'maintenance',
        'weather',
        'financial',
        'passenger_reports',
        'crew_reports',
        'safety_reports',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
