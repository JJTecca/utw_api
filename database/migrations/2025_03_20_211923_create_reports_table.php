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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('booking_id');
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('cascade');
            $table->text('flight_logs');
            $table->text('maintenance');
            $table->text('weather');
            $table->text('financial');
            $table->text('passenger_reports');
            $table->text('crew_reports');
            $table->text('safety_reports');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
