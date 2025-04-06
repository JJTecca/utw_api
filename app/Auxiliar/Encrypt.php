<?php

namespace App\Auxiliar;

use Illuminate\Support\Facades\Crypt;

class Encrypt
{
    public static function encryptUserId($userId)
    {
        return Crypt::encryptString($userId);
    }
    
    public static function decryptUserId($encrypted)
    {
        try {
            return Crypt::decryptString($encrypted);
        } catch (\Exception $e) {
            return null;
        }
    }
}