<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    /* Laravel convention : Don't really need to have 1st arg the id of the table*/
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'image',
        'rating',
        'reviews',
        'price',
        'isFeatured',
        'category'
    ];
    
    /*****************************************************************************
     * Laravel convention : Singular function name, plural is highly discouraged
     /*****************************************************************************/
}
