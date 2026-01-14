<?php

namespace App\Http\Controllers;

use App\Models\TransactionHistory;
use App\Models\UserBookingLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionHistoryController extends Controller
{
    // 1. POST: Save a new transaction
    public function store(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required|string|max:255',
            'amount'      => 'required|numeric',
            'status'      => 'required|string',
            'booking_id'  => 'required|integer|exists:bookings,id'
        ]);

        $transaction = TransactionHistory::create([
            'user_id'     => Auth::id(),
            'description' => $validated['description'],
            'amount'      => $validated['amount'],
            'status'      => $validated['status'],
        ]);

        $userBookingLink = UserBookingLink::create([
            'user_id' => Auth::id(),
            'booking_id' => $validated['booking_id']
        ]);

        return response()->json([
            'transaction' => $transaction,
            'user_booking_link' => $userBookingLink
        ,201]);
    }

    // 2. GET: Retrieve history for the logged-in user
    public function index()
    {
        // Fetches latest transactions first
        $history = TransactionHistory::where('user_id', Auth::id())
                    ->latest()
                    ->get();

        return response()->json($history);
    }
}