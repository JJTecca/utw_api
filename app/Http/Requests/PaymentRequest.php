<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
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
            'user_id' => 'required|integer|exists:users,id',
            'currency' => 'required|string|in:RON,GBP,USD,JPY,EUR,CNY,CHF,AUD,CAD,HKD,SGD,INR,KRW,SEK,MXN,NZD,NOK,TWD,BRL,ZAR,PLN,DKK,IDR,TRY,THB,ILS,HUF,CZK,CLP,PHP,COP,MYR,AED,SAR,PEN',
            'value' => 'required|numeric|min:0.01',
            'converted_value' => 'nullable|numeric',
            'converted_currency' => 'nullable|string',
            'exchange_rate' => 'nullable|numeric',
        ];
    }
}