<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserBookingLink extends Model
{
    // Explicitly set the table name
    protected $table = 'user_booking_links';
    
    // Allow mass assignment for these fields
    protected $fillable = [
        'user_id',
        'booking_id'
    ];
    
    // Ensure timestamps are enabled
    public $timestamps = true;
    
    /*****************************************************************************
     * Relationships
     *****************************************************************************/
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}