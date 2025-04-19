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
            $table->unsignedBigInteger('passenger_count')->default(0);
            $table->string('destination_city_name'); 
            $table->string('destination_airport_id')->nullable();
            $table->string('arrival_city_name');
            $table->string('arrival_airport_id')->nullable(); 
            $table->string('experience_type'); 
            $table->unsignedInteger('flight_number')->nullable(); 
            $table->dateTime('departure_day_date')->nullable();
            $table->dateTime('arrival_day_date')->nullable();
            $table->text('description');
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
