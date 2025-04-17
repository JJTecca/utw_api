<?php

namespace App\Http\Resources;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'destination_city_name' => $this->destination_city_name,
            'arrival_city_name' => $this->arrival_city_name,
            'experience_type' => $this->experience_type,
            'description' => $this->description
        ];
    }
}
