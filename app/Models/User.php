<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    /* Laravel convention : Don't really need to have 1st arg the id of the table*/
    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'password',
        'country',
        'gender'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /*****************************************************************************
     * Laravel convention : Singular function name, plural is highly discouraged
     /*****************************************************************************/
    public function booking() {
        return $this->belongsToMany(Booking::class,'user_booking_links');
    }

    public function wallet() {
        return $this->hasMany(Wallet::class);
    }

    public function transactionHistory() {
        return $this->hasMany(TransactionHistory::class);
    }
}
