<?php

namespace App\Http\Controllers;

use App\Http\Requests\DestinationRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Destination;
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

use function Termwind\render;

class DestinationController extends Controller
{
    public function index() { 
        // Join table wallets with users
        // Approach with Laravel : $wallets = Wallet::where('user_id', Auth::id())->get();
        $wallets = DB::table('wallets')
            ->join('users', 'wallets.user_id', '=', 'users.id')
            ->where('wallets.user_id', Auth::id())
            ->select('wallets.*')
            ->get();

        //Get Auth User
        $user = User::where('id',Auth::id())->first();
        //Get all the Destinations
        $destination = Destination::all();
        //Get the exchange rates from config file
        $exchangeRates = config('exchange.rates');
        $baseCurrency = 'USD';
        $totalInUsd = 0;

        /********Testing************
           dd($wallets);
        if(!$users || $wallets) { 
             return response()->json(['message' => 'No data found',],500);
        }
        ***************************/

        foreach ($wallets as $wallet) {
            $originalCurrency = $wallet->currency;
            $originalValue = $wallet->value;
            $convertedValue = $originalValue;
            
            // Convert to USD if not already in USD
            if ($originalCurrency !== $baseCurrency && isset($exchangeRates[$originalCurrency])) {
                $convertedValue = $originalValue / $exchangeRates[$originalCurrency];
            }
        
            $totalInUsd += $convertedValue;
        }
        
        return Inertia::render('Tour/index', [
            'user' => $user ? $user->toArray() : null,
            'total_usd' => round($totalInUsd, 2),
            'base_currency' => $baseCurrency,
            'destinations' => $destination,
            'wallets' => $wallets
        ]);
    }

    // PHP follows PSR standards, especially PSR-1 / PSR-12.
    public function bookDestination(DestinationRequest $request) {
        // Get validated data
        $validatedData = $request->validated();
        // Get authenticated user
        $authUser = Auth::user();

        if (!$authUser) {
            return response()->json([
                'success' => false,
                'message' => 'User not authenticated',
            ], 401);
        }

        $selectedWallet = Wallet::where('id',$validatedData['wallet_id'])->first();
        //$selectedWallet = Wallet::find($validatedData['wallet_id']);

        if (!$selectedWallet) {
            return response()->json([
                'success' => false,
                'message' => 'Wallet not found',
            ], 404);
        }

        if ($selectedWallet->user_id != $authUser->id) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized wallet access',
            ], 403);
        }

        // Check sufficient funds
        if ($selectedWallet->value < $validatedData['value']) {
            return response()->json([
                'success' => false,
                'message' => 'Insufficient funds',
            ], 400);
        }

        // Get the destination
        $destination = Destination::find($validatedData['destination_id']);
        
        if (!$destination) {
            return response()->json([
                'success' => false,
                'message' => 'Destination not found',
            ], 404);
        }

        if ($destination->price != $validatedData['value']) {
            return response()->json([
                'success' => false,
                'message' => 'Price mismatch. Please refresh and try again.',
            ], 400);
        }

        $exchangeRates = config('exchange.rates');
        $baseCurrency = config('exchange.base_currency', 'USD');
        
        // Convert destination price (USD) to wallet currency
        $destinationConverted = $destination->price; 
        
        // If wallet currency is not USD, convert the destination price
        if ($selectedWallet->currency !== $baseCurrency && isset($exchangeRates[$selectedWallet->currency])) {
            $destinationConverted = $destination->price * $exchangeRates[$selectedWallet->currency];
        }

        // Check sufficient funds (now comparing same currency!)
        if ($selectedWallet->value < $destinationConverted) {
            // Calculate how much more is needed
            $neededAmount = $destinationConverted - $selectedWallet->value;
            
            $neededAmountInUsd = $neededAmount;
            if ($selectedWallet->currency !== $baseCurrency && isset($exchangeRates[$selectedWallet->currency])) {
                $neededAmountInUsd = $neededAmount / $exchangeRates[$selectedWallet->currency];
            }
            
            return response()->json([
                'success' => false,
                'message' => 'Insufficient funds. You need ' . 
                            round($neededAmount, 2) . ' ' . $selectedWallet->currency . 
                            ' more (approx $' . round($neededAmountInUsd, 2) . ').',
            ], 400);
        }

        // Now we subtract the converted amount so we hanlde the conversion rates also
        $selectedWallet->value -= $destinationConverted;
        $selectedWallet->save();

        return response()->json([
            'success' => true,
            'message' => 'Destination Booking Processed Successfully',
            'data' => [
                'destination' => $destination->title,
                'amount_paid' => $validatedData['value'],
                'currency' => $validatedData['currency'],
                'remaining_balance' => $selectedWallet->value,
            ]
        ]);

    } 
}
