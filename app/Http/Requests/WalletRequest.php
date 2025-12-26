<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Wallet;

class WalletRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            $userId = Auth::id(); // Get the authenticated user's ID
            
            // If the action is changing currency or inserting money, ensure the user owns the wallet
            if ($this->route('wallet') instanceof Wallet) {
                // Check if the authenticated user owns the wallet
                return $this->route('wallet')->user_id === $userId;
            }
            
            return true; // If no specific wallet is being acted upon (e.g., for creating wallets)
        }

        return false; // If the user is not authenticated
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */

    public function rules(): array
    {
        if ($this->isMethod('post') && $this->route()->getName() == 'wallet.insertMoney') {
            return [
                'amount' => 'required|numeric|min:1', // Amount must be a positive number
            ];
        }

        if ($this->isMethod('post') && $this->route()->getName() == 'wallet.changeCurrency') {
            return [
                'currency' => 'required|string|in:RON, GBP, USD, JPY, EUR, KNY, CHF, AUD, CAD, HKD, SGD, INR, KRW, SEK, MXN, NZD, NOK, TWD, BRL, ZAR, PLN, DKK, IDR, TRY, THB, ILS, HUF, CZK, CLP, PHP, COP, MYR, AED, SAR, PEN', // List of valid currencies
            ];
        }

        return [];
    }
}
