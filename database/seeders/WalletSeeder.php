<?php

namespace Database\Seeders;

use App\Models\Wallet;
use Illuminate\Database\Seeder;

class WalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Wallet::create([
            'user_id' => 1,
            'currency' => 'EUR',
            'value' => 2500,
        ]);

        Wallet::create([
            'user_id' => 1,
            'currency' => 'USD',
            'value' => 1500,
        ]);

        Wallet::create([
            'user_id' => 2,
            'currency' => 'GBP',
            'value' => 3200,
        ]);

        Wallet::create([
            'user_id' => 3,
            'currency' => 'JPY',
            'value' => 500000,
        ]);

        Wallet::create([
            'user_id' => 3,
            'currency' => 'AUD',
            'value' => 1200,
        ]);

        Wallet::create([
            'user_id' => 4,
            'currency' => 'CAD',
            'value' => 800,
        ]);

        Wallet::create([
            'user_id' => 5,
            'currency' => 'CHF',
            'value' => 4500,
        ]);

        Wallet::create([
            'user_id' => 6,
            'currency' => 'RON',
            'value' => 10000,
        ]);

        Wallet::create([
            'user_id' => 7,
            'currency' => 'SGD',
            'value' => 2800,
        ]);

        Wallet::create([
            'user_id' => null, // Some wallets might not be assigned to users yet
            'currency' => 'INR',
            'value' => 50000,
        ]);

        // Bonus: More examples with different currencies
        Wallet::create([
            'user_id' => 8,
            'currency' => 'HKD',
            'value' => 15000,
        ]);

        Wallet::create([
            'user_id' => 9,
            'currency' => 'TRY',
            'value' => 12000,
        ]);

        Wallet::create([
            'user_id' => 10,
            'currency' => 'ZAR',
            'value' => 7500,
        ]);

        Wallet::create([
            'user_id' => 2,
            'currency' => 'NOK',
            'value' => 6000,
        ]);
    }
}
