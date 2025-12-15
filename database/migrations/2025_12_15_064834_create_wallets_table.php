<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /***********************************************
         * 1. ONLY CAMEL CASE USAGE
         * 2. Check with php artisan migrate:refresh + php artisan migrate 
         * 3. Ensure ALL the ERD functions are here
         * 4. Use string as much instead of text
         * 5. Each modell shall start with id and end with timestamps
         ***********************************************/
        Schema::create('wallets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            /* Maybe we don't need this much currency */
            $table->enum('currency', ['EUR','RON','USD','JPY','GBP','KNY','CHF',
                    'AUD','CAD','HKD','SGD','INR','KRW','SEK','MXN',
                    'NZD','NOK','TWD','BRL','ZAR','PLN',
                    'DKK','IDR','TRY','THB','ILS','HUF',
                    'CZK','CLP','PHP','COP','MYR','AED','SAR','PEN',
                ]);
            $table->unsignedBigInteger('value')->default(0);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wallets');
    }
};
