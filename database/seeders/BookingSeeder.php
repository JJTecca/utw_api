<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bookingData = [
            [
                'user_id' => 1,
                'destination_city_name' => 'Lisbon',
                'destination_airport_id' => 'APT10',
                'arrival_city_name' => 'New York',
                'arrival_airport_id' => 'APT1',
                'experience_type' => 'Business',
                'flight_number' => 1234,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 2,
                'destination_city_name' => 'Paris',
                'destination_airport_id' => 'APT22',
                'arrival_city_name' => 'Tokyo',
                'arrival_airport_id' => 'APT33',
                'experience_type' => 'Casual',
                'flight_number' => 5678,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 3,
                'destination_city_name' => 'London',
                'destination_airport_id' => 'APT44',
                'arrival_city_name' => 'Dubai',
                'arrival_airport_id' => 'APT55',
                'experience_type' => 'Casual',
                'flight_number' => 9012,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 4,
                'destination_city_name' => 'Berlin',
                'destination_airport_id' => 'APT66',
                'arrival_city_name' => 'Sydney',
                'arrival_airport_id' => 'APT77',
                'experience_type' => 'Exotic',
                'flight_number' => 3456,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 5,
                'destination_city_name' => 'Rome',
                'destination_airport_id' => 'APT88',
                'arrival_city_name' => 'Toronto',
                'arrival_airport_id' => 'APT99',
                'experience_type' => 'Across Country',
                'flight_number' => 7890,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 6,
                'destination_city_name' => 'Madrid',
                'destination_airport_id' => 'APT101',
                'arrival_city_name' => 'Singapore',
                'arrival_airport_id' => 'APT202',
                'experience_type' => 'Casual',
                'flight_number' => null, // Example of nullable flight number
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 7,
                'destination_city_name' => 'Barcelona',
                'destination_airport_id' => 'APT303',
                'arrival_city_name' => 'Hong Kong',
                'arrival_airport_id' => 'APT404',
                'experience_type' => 'Business',
                'flight_number' => 1122,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 8,
                'destination_city_name' => 'Amsterdam',
                'destination_airport_id' => 'APT505',
                'arrival_city_name' => 'Los Angeles',
                'arrival_airport_id' => 'APT606',
                'experience_type' => 'Casual',
                'flight_number' => 3344,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 9,
                'destination_city_name' => 'Vienna',
                'destination_airport_id' => 'APT707',
                'arrival_city_name' => 'Chicago',
                'arrival_airport_id' => 'APT808',
                'experience_type' => 'Across Country',
                'flight_number' => 5566,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ],
            [
                'user_id' => 10,
                'destination_city_name' => 'Prague',
                'destination_airport_id' => 'APT909',
                'arrival_city_name' => 'Seoul',
                'arrival_airport_id' => 'APT1010',
                'experience_type' => 'Business',
                'flight_number' => 7788,
                'flight_number_date' => Carbon::create(2025, 4, 10)->format('Y-m-d')
            ]
        ];

        foreach($bookingData as $booking) {
            Booking::create($booking);
        }

    }
}
