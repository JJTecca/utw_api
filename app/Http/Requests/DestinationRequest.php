<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DestinationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'destination_id' => 'required|integer|exists:destinations,id',
            'wallet_id' => 'required|integer|exists:wallets,id',
            'value' => 'required|numeric|min:1',
            'currency' => 'required|string|in:RON,GBP,USD,JPY,EUR,CNY,CHF,AUD,CAD,HKD,SGD,INR,KRW,SEK,MXN,NZD,NOK,TWD,BRL,ZAR,PLN,DKK,IDR,TRY,THB,ILS,HUF,CZK,CLP,PHP,COP,MYR,AED,SAR,PEN',
            'notes' => 'nullable|string'
        ];
    }
    
    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'destination_id.required' => 'Destination ID is required.',
            'destination_id.exists' => 'The selected destination does not exist.',
            'wallet_id.required' => 'Wallet ID is required.',
            'wallet_id.exists' => 'The selected wallet does not exist.',
            'value.required' => 'Payment amount is required.',
            'value.min' => 'Payment amount must be at least 1.',
            'currency.required' => 'Currency is required.',
            'currency.in' => 'The selected currency is invalid.',
        ];
    }
}