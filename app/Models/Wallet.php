<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    /* Laravel convention : Don't really need to have 1st arg the id of the table*/
    protected $fillable = [
        'user_id',
        'currency',
        'value'
    ];

    /*****************************************************************************
     * Laravel convention : Singular function name, plural is highly discouraged
     /*****************************************************************************/
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
