<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\User;
use Carbon\Carbon;
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
                //'user_id' => 1,
                'destination_city_name' => 'Lisbon',
                'destination_airport_id' => 'APT10',
                'arrival_city_name' => 'New York',
                'arrival_airport_id' => 'APT1',
                'experience_type' => 'Business',
                'flight_number' => 1234,
                'departure_day_date' => Carbon::create(2025, 4, 10)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 5, 5)->format('Y-m-d') // +25 days
            ],
            [
                //'user_id' => 2,
                'destination_city_name' => 'Paris',
                'destination_airport_id' => 'APT22',
                'arrival_city_name' => 'Tokyo',
                'arrival_airport_id' => 'APT33',
                'experience_type' => 'Casual',
                'flight_number' => 5678,
                'departure_day_date' => Carbon::create(2025, 5, 1)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 6, 10)->format('Y-m-d') // +40 days
            ],
            [
                //'user_id' => 3,
                'destination_city_name' => 'London',
                'destination_airport_id' => 'APT44',
                'arrival_city_name' => 'Dubai',
                'arrival_airport_id' => 'APT55',
                'experience_type' => 'Casual',
                'flight_number' => 9012,
                'departure_day_date' => Carbon::create(2025, 6, 15)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 7, 20)->format('Y-m-d') // +35 days
            ],
            [
                //'user_id' => 4,
                'destination_city_name' => 'Berlin',
                'destination_airport_id' => 'APT66',
                'arrival_city_name' => 'Sydney',
                'arrival_airport_id' => 'APT77',
                'experience_type' => 'Exotic',
                'flight_number' => 3456,
                'departure_day_date' => Carbon::create(2025, 7, 1)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 8, 15)->format('Y-m-d') // +45 days
            ],
            [
                //'user_id' => 5,
                'destination_city_name' => 'Rome',
                'destination_airport_id' => 'APT88',
                'arrival_city_name' => 'Toronto',
                'arrival_airport_id' => 'APT99',
                'experience_type' => 'Across Country',
                'flight_number' => 7890,
                'departure_day_date' => Carbon::create(2025, 8, 10)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 9, 10)->format('Y-m-d') // +31 days
            ],
            [
                //'user_id' => 6,
                'destination_city_name' => 'Madrid',
                'destination_airport_id' => 'APT101',
                'arrival_city_name' => 'Singapore',
                'arrival_airport_id' => 'APT202',
                'experience_type' => 'Casual',
                'flight_number' => null,
                'departure_day_date' => Carbon::create(2025, 9, 5)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 10, 15)->format('Y-m-d') // +40 days
            ],
            [
                //'user_id' => 7,
                'destination_city_name' => 'Barcelona',
                'destination_airport_id' => 'APT303',
                'arrival_city_name' => 'Hong Kong',
                'arrival_airport_id' => 'APT404',
                'experience_type' => 'Business',
                'flight_number' => 1122,
                'departure_day_date' => Carbon::create(2025, 10, 1)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 11, 1)->format('Y-m-d') // +31 days
            ],
            [
                //'user_id' => 8,
                'destination_city_name' => 'Amsterdam',
                'destination_airport_id' => 'APT505',
                'arrival_city_name' => 'Los Angeles',
                'arrival_airport_id' => 'APT606',
                'experience_type' => 'Casual',
                'flight_number' => 3344,
                'departure_day_date' => Carbon::create(2025, 11, 15)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2025, 12, 20)->format('Y-m-d') // +35 days
            ],
            [
                //'user_id' => 9,
                'destination_city_name' => 'Vienna',
                'destination_airport_id' => 'APT707',
                'arrival_city_name' => 'Chicago',
                'arrival_airport_id' => 'APT808',
                'experience_type' => 'Across Country',
                'flight_number' => 5566,
                'departure_day_date' => Carbon::create(2025, 12, 10)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2026, 1, 15)->format('Y-m-d') // +36 days
            ],
            [
                //'user_id' => 10,
                'destination_city_name' => 'Prague',
                'destination_airport_id' => 'APT909',
                'arrival_city_name' => 'Seoul',
                'arrival_airport_id' => 'APT1010',
                'experience_type' => 'Business',
                'flight_number' => 7788,
                'departure_day_date' => Carbon::create(2026, 1, 5)->format('Y-m-d'),
                'arrival_day_date' => Carbon::create(2026, 2, 15)->format('Y-m-d') // +41 days
            ]
        ];

        foreach($bookingData as $booking) {
            Booking::create($booking);
        }

    }
}
