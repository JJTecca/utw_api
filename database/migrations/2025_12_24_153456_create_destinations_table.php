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
         * 5. Each model shall start with id and end with timestamps
         ***********************************************/
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->string('subtitle')->nullable()->default('');
            $table->string('description');
            $table->string('image'); //this could be a path
            $table->float('rating')->default(0.0);
            $table->unsignedInteger('reviews')->default(0);
            $table->unsignedInteger('price')->default(0); // This stays as int , easier for us, then we convert to $x.xxx
            $table->boolean('is_featured')->default(true);
            $table->string('category')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
