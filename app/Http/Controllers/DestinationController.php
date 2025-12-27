<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use function Termwind\render;

class DestinationController extends Controller
{
    public function index() { 
        // Join table wallets with users
        // Approach with Laravel : $wallets = Wallet::where('user_id', Auth::id())->get();
        $wallets = DB::table('wallets')
            ->join('users', 'wallets.user_id', '=', 'users.id')
            ->where('wallets.user_id', Auth::id())
            ->select('wallets.*')
            ->get();

        //Get Auth User
        $user = User::where('id',Auth::id())->first();
        //Get the exchange rates from config file
        $exchangeRates = config('exchange.rates');
        $baseCurrency = 'USD';
        $totalInUsd = 0;


        /********Testing************
           dd($wallets);
        if(!$users || $wallets) { 
             return response()->json(['message' => 'No data found',],500);
        }
        ***************************/

        foreach ($wallets as $wallet) {
            $originalCurrency = $wallet->currency;
            $originalValue = $wallet->value;
            $convertedValue = $originalValue;
            
            // Convert to USD if not already in USD
            if ($originalCurrency !== $baseCurrency && isset($exchangeRates[$originalCurrency])) {
                $convertedValue = $originalValue / $exchangeRates[$originalCurrency];
            }
        
            $totalInUsd += $convertedValue;
        }
        
        return Inertia::render('Tour/index', [
            'user' => $user ? $user->toArray() : null,
            'total_usd' => round($totalInUsd, 2),
            'base_currency' => $baseCurrency
        ]);
    }
}
