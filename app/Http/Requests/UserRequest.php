<?php

namespace App\Http\Requests;

use App\Auxiliar\Encrypt;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; 
        //return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                'regex:/^[a-zA-Z0-9._%+-]+@gmail\.com$/',
                'unique:users,email'
            ],
            'password' => 'required|min:8|confirmed',
            'password_confirmation' => 'required',
            'country' => 'required|string|max:255'
        ];
    }
    
    public function messages()
    {
        return [
            'firstName.required' => 'The first name field is required.',
            'lastName.required' => 'The last name field is required.',
            'email.unique' => 'This email is already taken.',
            'password.required' => 'The password field is required.',
            'password.confirmed' => 'Password confirmation does not match.',
            'password_confirmation.required' => 'Please confirm your password.',
            'country.required' => 'The country field is required'
        ];
    }
}