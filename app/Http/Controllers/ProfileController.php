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

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */

    /*************************************
     *   NEW Profile Management Profile view
     **************************************/
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
        $preparedWallets = [];
        $totalInUsd = 0;


        /********Testing************
           dd($wallets);
           dd($preparedWallets);
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
            
            $preparedWallets[] = [
                'id' => $wallet->id,
                'user_id' => $wallet->user_id,
                'currency' => $originalCurrency,
                'value' => $originalValue,
                'converted_value' => round($convertedValue, 2), // Rounded to 2 decimals
                'converted_currency' => $baseCurrency,
                'exchange_rate' => $exchangeRates[$originalCurrency] ?? 1
            ];
        
            $totalInUsd += $convertedValue;
        }
        
        return Inertia::render('ProfileManagement/index', [
            'wallets' => $preparedWallets,
            'users' => $user ? $user->toArray() : null,
            'total_usd' => round($totalInUsd, 2),
            'base_currency' => $baseCurrency,
        ]);
    }


    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
