<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/get-encrypted-user-id', function (Request $request) {
    return response()->json([
        'encrypted_data' => \App\Auxiliar\Encrypt::encryptUserId($request->user()->id)
    ]);
});