<?php

namespace App\Http\Controllers;

use App\Http\Requests\WalletRequest;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WalletController extends Controller
{
    /**
     * Change the currency in the wallet and update the balance using hardcoded exchange rates from the config file.
     */
    public function changeCurrency(WalletRequest $request, Wallet $wallet)
    {
        $userId = Auth::id(); // Get the logged-in user's ID

        // Check if the wallet exists for this user
        if ($wallet->user_id !== $userId) {
            return response()->json(['error' => 'Unauthorized to modify this wallet'], 403);
        }

        // The original currency (assuming USD) and the new selected currency (EUR)
        $originalCurrency = $wallet->currency;
        $newCurrency = $request->input('currency'); // The currency selected by the user

        // If the selected currency is the same as the current one, no need for conversion
        if ($originalCurrency === $newCurrency) {
            return response()->json(['message' => 'Currency is already the same. No conversion needed.']);
        }

        // Fetch the exchange rates from the config file
        $exchangeRates = config('exchange.rates');
        
        // Check if the conversion rate exists for the original and new currencies
        if (!isset($exchangeRates[$originalCurrency]) || !isset($exchangeRates[$newCurrency])) {
            return response()->json(['error' => 'Currency conversion rate not available'], 400);
        }

        // Get the exchange rates for the original currency relative to the base currency
        $originalCurrencyRate = $exchangeRates[$originalCurrency]; // Rate of original currency in terms of base currency (USD)
        $newCurrencyRate = $exchangeRates[$newCurrency];         // Rate of new currency in terms of base currency (USD)

        // Convert the wallet value to the new currency
        // 1. Convert original currency to USD using the original currency rate
        // 2. Then convert the amount from USD to the new currency using the new currency rate
        $valueInBaseCurrency = $wallet->value / $originalCurrencyRate;  // Convert to base currency (USD)
        $newValue = $valueInBaseCurrency * $newCurrencyRate;             // Convert to the new currency

        // Update the wallet with the new currency and value
        $wallet->update([
            'currency' => $newCurrency,
            'value' => $newValue
        ]);

        return response()->json([
            'message' => 'Currency changed successfully!',
            'new_balance' => $newValue,
            'new_currency' => $newCurrency
        ]);
    }
}
