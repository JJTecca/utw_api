<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PaymentWalletRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        return [
            // Payment fields
            'booking_id' => 'nullable|integer|exists:bookings,id',
            'destination_city_name' => 'required|string|max:255',
            'arrival_city_name' => 'required|string|max:255|different:destination_city_name',
            'experience_type' => [
                'required',
                'string',
                Rule::in(['First Class', 'Economy Class', 'Business Class'])
            ],
            'price' => 'required|numeric|min:0',
            'payment_method' => 'required|string|in:wallet,bank_transfer',
            'notes' => 'nullable|string|max:1000',
            
            // Wallet-specific fields (required when payment_method is wallet)
            'wallet_id' => 'required_if:payment_method,wallet|integer|exists:wallets,id',
            'currency' => 'nullable|string|size:3'
        ];
    }

    public function messages()
    {
        return [
            'arrival_city_name.different' => 'Arrival city must be different from departure city',
            'experience_type.in' => 'Invalid experience type selected',
            'wallet_id.required_if' => 'Wallet ID is required for wallet payments',
            'payment_method.in' => 'Invalid payment method selected',
        ];
    }
}