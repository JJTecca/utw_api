<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\TransactionHistory;
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
    public function index()
    {
        // Join table wallets with users
        // Approach with Laravel : $wallets = Wallet::where('user_id', Auth::id())->get();
        $wallets = DB::table('wallets')
            ->join('users', 'wallets.user_id', '=', 'users.id')
            ->where('wallets.user_id', Auth::id())
            ->select('wallets.*')
            ->get();

        // Get Auth User
        $user = User::where('id', Auth::id())->first();

        // Get the exchange rates from config file
        $exchangeRates = config('exchange.rates');

        // Use configured base currency (fallback USD)
        $baseCurrency = config('exchange.base_currency', 'USD');

        $preparedWallets = [];
        $totalInUsd = 0;

        // Retrieve the transaction of the current user
        $transaction_history = TransactionHistory::where('user_id', Auth::id())->get();

        foreach ($wallets as $wallet) {
            $originalCurrency = $wallet->currency;

            // Cast value to float to avoid numeric-string quirks
            $originalValue = (float) $wallet->value;

            $convertedValue = $originalValue;

            // Convert to base currency if not already in base currency
            // Assumption: exchangeRates are "USD -> currency" when baseCurrency = USD,
            // so currency -> USD = amount / rate.
            if ($originalCurrency !== $baseCurrency && isset($exchangeRates[$originalCurrency]) && (float)$exchangeRates[$originalCurrency] != 0.0) {
                $convertedValue = $originalValue / (float) $exchangeRates[$originalCurrency];
            }

            // IMPORTANT FIX: round once and use the same rounded value for wallet + total
            $roundedConvertedValue = round($convertedValue, 2);

            $preparedWallets[] = [
                'id' => $wallet->id,
                'user_id' => $wallet->user_id,
                'currency' => $originalCurrency,
                'value' => $originalValue,
                'converted_value' => $roundedConvertedValue, // Rounded to 2 decimals (display value)
                'converted_currency' => $baseCurrency,
                'exchange_rate' => $exchangeRates[$originalCurrency] ?? 1,
            ];

            // Sum exactly what you display, so total matches row values
            $totalInUsd += $roundedConvertedValue;
        }

        return Inertia::render('ProfileManagement/index', [
            'wallets' => $preparedWallets,
            'users' => $user ? $user->toArray() : null,
            'total_usd' => round($totalInUsd, 2),
            'base_currency' => $baseCurrency,
            'transaction_history' => $transaction_history ? $transaction_history->toArray() : [],
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
