<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth; 

class UserController extends Controller
{
    //
    public function store(UserRequest $request) {
        $validated = $request->validated();

        $user = User::create([
            'firstName' => $validated['firstName'],
            'lastName' => $validated['lastName'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']), //hash before save
            'country' => $validated['country'],
        ]);
        Auth::login($user);
        
        return back()->withErrors(['email' => 'Authentication failed.']);
    }
}
