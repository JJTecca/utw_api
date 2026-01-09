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
         * 1. ONLY SNAKE CASE USAGE
         * 2. Check with php artisan migrate:refresh + php artisan migrate 
         * 3. Ensure ALL the ERD functions are here
         * 4. Use string as much instead of text
         * 5. Each model shall start with id and end with timestamps
         ***********************************************/
        Schema::create('user_booking_links', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('booking_id')->nullable();
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_booking_links');
    }
};
