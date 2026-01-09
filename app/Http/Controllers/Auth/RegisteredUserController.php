<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(UserRequest $request) {
        $validated = $request->validated();

        //Create User after validation
        $user = User::create([
            'firstName' => $validated['firstName'],
            'lastName' => $validated['lastName'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'country' => $validated['country'],
            'gender' => $request->input('gender', ''),
        ]);
        
        $currencies = [
            'USD' => 1000.00,
            'EUR' => 1000.00,  
            'RON' => 5000.00,
        ];

        // Create wallets for each currency
        foreach ($currencies as $currency => $balance) {
            Wallet::create([
                'user_id' => $user->id,
                'currency' => $currency,
                'value' => $balance,
            ]);
        }

        Auth::login($user);
        return redirect()->route('dashboard');
    }
}
