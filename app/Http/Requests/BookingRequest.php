<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        return [
            'destination_city_name' => 'required|string|max:255',
            'arrival_city_name' => 'required|string|max:255|different:destination_city_name',
            'experience_type' => [
                'required',
                'string',
                Rule::in(['Exotic', 'Casual', 'Across Country', 'Business'])
            ],
        ];
    }

    public function messages()
    {
        return [
            'arrival_city_name.different' => 'Arrival city must be different from departure city',
            'experience_type.in' => 'Invalid experience type selected',
        ];
    }
}
