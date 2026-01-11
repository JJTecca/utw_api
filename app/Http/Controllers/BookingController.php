<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookingRequest;
use App\Http\Requests\PaymentWalletRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use App\Models\Destination;
use App\Models\User;
use App\Models\UserBookingLink;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index(Request $request) {
        $destination = $request->query('destination_city_name');
        $arrival = $request->query('arrival_city_name');
        $experience = $request->query('experience_type');
        $passengers = $request->query('passenger_count');
        $bookings = Booking::where('destination_city_name', $destination)
                    ->where('arrival_city_name',$arrival)->where('experience_type',$experience)
                    ->select([
                        'id',
                        'passenger_count',
                        'destination_city_name',
                        'arrival_city_name',
                        'experience_type',
                        'description'
                    ])
                    ->get(); //first=primu element din colectie , get = all colectie */

        //Get the prices for X city : if city is Dubai , the destination title contains "Dubai, UAE"
        $destinationPrice = Destination::where('title', 'LIKE', $destination . '%')
                                        ->orWhere('title', 'LIKE', '%' . $destination . '%')
                                        ->value('price');
        
        $arrivalPrice = Destination::where('title', 'LIKE', $arrival . '%')
                                    ->orWhere('title', 'LIKE', '%' . $arrival . '%')
                                    ->value('price');
        $user = User::where('id',Auth::id())->first();
        $wallets = Wallet::where('user_id',Auth::id())->get();

        return Inertia::render('Booking/index',[
            'user' => $user,
            'wallets' => $wallets,
            'bookings' => BookingResource::collection($bookings)->resolve(), //buna functie , unwraps collection to array
            'full_price' => ($destinationPrice + $arrivalPrice + rand(100,400)) * $passengers / 4 //add a random value to show that tickets fluctuate
        ]);
        
    }

    public function paymentBooking(PaymentWalletRequest $request) {
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

        // FIX: Check if wallet_id exists in validated data first
        if (!isset($validatedData['wallet_id'])) {
            return response()->json([
                'success' => false,
                'message' => 'Wallet ID is required for wallet payments',
            ], 400);
        }

        $selectedWallet = Wallet::where('id', $validatedData['wallet_id'])
                                ->where('user_id', $authUser->id)
                                ->first();

        if (!$selectedWallet) {
            return response()->json([
                'success' => false,
                'message' => 'Wallet not found or unauthorized',
            ], 404);
        }

        $exchangeRates = config('exchange.rates');
        $baseCurrency = config('exchange.base_currency', 'USD');
        $destinationConverted = $validatedData['price']; // Use validated data

        if ($selectedWallet->currency !== $baseCurrency && isset($exchangeRates[$selectedWallet->currency])) {
            $destinationConverted = $validatedData['price'] * $exchangeRates[$selectedWallet->currency];
        }
        
        if ($selectedWallet->value < $destinationConverted) {
            $neededAmount = $destinationConverted - $selectedWallet->value;
            return response()->json([
                'success' => false,
                'message' => 'Insufficient funds. You need ' . 
                            round($neededAmount, 2) . ' ' . $selectedWallet->currency . 
                            ' more (approx $' . round($neededAmount, 2) . ').',
            ], 400);
        }
        
        $selectedWallet->value -= $destinationConverted;
        $selectedWallet->save();

        return response()->json([
            'success' => true,
            'message' => 'Destination Booking Processed Successfully'
        ]);
    }
    
    public function submitBooking(BookingRequest $request) {
        $validate = $request->validated();
        $booking = Booking::where('destination_city_name', $request->destination_city_name)
                ->where('arrival_city_name', $request->arrival_city_name)
                ->where('experience_type', $request->experience_type)
                ->select([
                    'id',
                    'passenger_count',
                    'destination_city_name',
                    'arrival_city_name',
                    'experience_type',
                    'description'
                ])
                ->first();
        
        dd($booking);
        UserBookingLink::create([
            'user_id' => Auth::user()->id,
            'booking_id' => $booking->id 
        ]);  

        return response()->json([
            'message' => 'Booking linked successfully',
            'user_id' => Auth::user()->id
        ], 201); //mai trb schimbat
    }

    public function storeBooking(BookingRequest $request) {
        $validated = $request->validated();
        // $currentBooking =  Booking::create($validated);

        return response()->json([
            'message' => true,
            // 'bookings' => $currentBooking,
        ]);
    }
}