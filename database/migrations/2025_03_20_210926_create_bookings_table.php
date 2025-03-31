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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('destination_city_name')->unique(); 
            $table->string('destination_airport_id');
            $table->string('arrival_city_name')->unique(); 
            $table->string('arrival_airport_id'); 
            $table->string('experience_type'); 
            $table->unsignedInteger('flight_number')->nullable(); 
            $table->dateTime('flight_number_date'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
