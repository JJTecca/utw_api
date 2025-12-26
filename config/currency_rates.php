<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Base Currency
    |--------------------------------------------------------------------------
    |
    | All exchange rates are calculated relative to this currency.
    |
    */

    'base_currency' => env('EXCHANGE_BASE_CURRENCY', 'USD'),

    /*
    |--------------------------------------------------------------------------
    | Supported Currencies
    |--------------------------------------------------------------------------
    |
    | List of all supported currency codes.
    |
    */

    'currencies' => [
        'RON',
        'GBP',
        'USD',
        'JPY',
        'EUR',
        'CNY',
        'CHF',
        'AUD',
        'CAD',
        'HKD',
        'SGD',
        'INR',
        'KRW',
        'SEK',
        'MXN',
        'NZD',
        'NOK',
        'TWD',
        'BRL',
        'ZAR',
        'PLN',
        'DKK',
        'IDR',
        'TRY',
        'THB',
        'ILS',
        'HUF',
        'CZK',
        'CLP',
        'PHP',
        'COP',
        'MYR',
        'AED',
        'SAR',
        'PEN',
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Exchange Rates
    |--------------------------------------------------------------------------
    |
    | Rates relative to the base currency (USD by default).
    | Replace with real-time values from an API if needed.
    |
    */

    'rates' => [
        'RON' => 4.60,
        'GBP' => 0.78,
        'USD' => 1.00,
        'JPY' => 145.00,
        'EUR' => 0.92,
        'CNY' => 7.20,
        'CHF' => 0.88,
        'AUD' => 1.50,
        'CAD' => 1.36,
        'HKD' => 7.82,
        'SGD' => 1.34,
        'INR' => 83.00,
        'KRW' => 1300.00,
        'SEK' => 10.40,
        'MXN' => 17.10,
        'NZD' => 1.62,
        'NOK' => 10.60,
        'TWD' => 31.50,
        'BRL' => 4.95,
        'ZAR' => 18.70,
        'PLN' => 4.00,
        'DKK' => 6.85,
        'IDR' => 15500.00,
        'TRY' => 29.50,
        'THB' => 36.20,
        'ILS' => 3.75,
        'HUF' => 360.00,
        'CZK' => 22.80,
        'CLP' => 950.00,
        'PHP' => 56.00,
        'COP' => 4100.00,
        'MYR' => 4.70,
        'AED' => 3.67,
        'SAR' => 3.75,
        'PEN' => 3.80,
    ],

];