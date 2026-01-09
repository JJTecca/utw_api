<?php

namespace Database\Seeders;

use App\Models\Booking;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bookingData = [];

        $popularRoutes = [
            // Dubai to Paris - 15 flights (5 of each type)
            [
                'from' => 'Dubai', 'from_code' => 'DXB',
                'to' => 'Paris', 'to_code' => 'CDG',
                'flights' => 15
            ],
            // London to New York - 15 flights (5 of each type)
            [
                'from' => 'London', 'from_code' => 'LHR',
                'to' => 'New York City', 'to_code' => 'JFK',
                'flights' => 15
            ],
            // Tokyo to Singapore - 12 flights (4 of each type)
            [
                'from' => 'Tokyo', 'from_code' => 'NRT',
                'to' => 'Singapore', 'to_code' => 'SIN',
                'flights' => 12
            ],
            // Sydney to Los Angeles - 12 flights (4 of each type)
            [
                'from' => 'Sydney', 'from_code' => 'SYD',
                'to' => 'Los Angeles', 'to_code' => 'LAX',
                'flights' => 12
            ],
            // Istanbul to Dubai - 9 flights (3 of each type)
            [
                'from' => 'Istanbul', 'from_code' => 'IST',
                'to' => 'Dubai', 'to_code' => 'DXB',
                'flights' => 9
            ],
            // Paris to Rome - 9 flights (3 of each type)
            [
                'from' => 'Paris', 'from_code' => 'CDG',
                'to' => 'Rome', 'to_code' => 'FCO',
                'flights' => 9
            ],
            // New York to Miami - 9 flights (3 of each type)
            [
                'from' => 'New York City', 'from_code' => 'JFK',
                'to' => 'Miami', 'to_code' => 'MIA',
                'flights' => 9
            ],
            // Amsterdam to Barcelona - 6 flights (2 of each type)
            [
                'from' => 'Amsterdam', 'from_code' => 'AMS',
                'to' => 'Barcelona', 'to_code' => 'BCN',
                'flights' => 6
            ],
            // Singapore to Bangkok - 6 flights (2 of each type)
            [
                'from' => 'Singapore', 'from_code' => 'SIN',
                'to' => 'Bangkok', 'to_code' => 'BKK',
                'flights' => 6
            ],
            // Berlin to Vienna - 6 flights (2 of each type)
            [
                'from' => 'Berlin', 'from_code' => 'BER',
                'to' => 'Vienna', 'to_code' => 'VIE',
                'flights' => 6
            ],
        ];

        // Experience types
        $experienceTypes = ['First Class', 'Business Class', 'Economy Class'];
        
        // Flight number counter
        $flightNumber = 1000;
        $bookingId = 1;
        
        // Generate bookings for each popular route
        foreach ($popularRoutes as $route) {
            $flightsPerType = $route['flights'] / 3;
            
            foreach ($experienceTypes as $type) {
                for ($i = 1; $i <= $flightsPerType; $i++) {
                    // Generate dates (spread across 2025)
                    $departureDate = date('Y-m-d', strtotime("2025-".rand(1,12)."-".rand(1,28)));
                    $arrivalDate = date('Y-m-d', strtotime($departureDate . " +" . rand(2,7) . " days"));
                    
                    $bookingData[] = [
                        'id' => $bookingId,
                        'destination_city_name' => $route['from'],
                        'destination_airport_id' => $route['from_code'],
                        'arrival_city_name' => $route['to'],
                        'arrival_airport_id' => $route['to_code'],
                        'experience_type' => $type,
                        'flight_number' => $flightNumber,
                        'departure_day_date' => $departureDate,
                        'arrival_day_date' => $arrivalDate,
                        'description' => "This {$type} journey takes you from {$route['from']} to {$route['to']} on flight #{$flightNumber}. Departing on {$departureDate}, you'll arrive by {$arrivalDate}. Enjoy premium travel experience.",
                    ];
                    
                    $flightNumber++;
                    $bookingId++;
                }
            }
        }

        // Add individual unique flights to reach 200 total
        $otherRoutes = [
            ['from' => 'Dubai', 'from_code' => 'DXB', 'to' => 'London', 'to_code' => 'LHR'],
            ['from' => 'London', 'from_code' => 'LHR', 'to' => 'Dubai', 'to_code' => 'DXB'],
            ['from' => 'Paris', 'from_code' => 'CDG', 'to' => 'Tokyo', 'to_code' => 'NRT'],
            ['from' => 'Tokyo', 'from_code' => 'NRT', 'to' => 'Paris', 'to_code' => 'CDG'],
            ['from' => 'New York City', 'from_code' => 'JFK', 'to' => 'Los Angeles', 'to_code' => 'LAX'],
            ['from' => 'Los Angeles', 'from_code' => 'LAX', 'to' => 'New York City', 'to_code' => 'JFK'],
            ['from' => 'Singapore', 'from_code' => 'SIN', 'to' => 'Sydney', 'to_code' => 'SYD'],
            ['from' => 'Sydney', 'from_code' => 'SYD', 'to' => 'Singapore', 'to_code' => 'SIN'],
            ['from' => 'Hong Kong', 'from_code' => 'HKG', 'to' => 'Tokyo', 'to_code' => 'NRT'],
            ['from' => 'Tokyo', 'from_code' => 'NRT', 'to' => 'Hong Kong', 'to_code' => 'HKG'],
            ['from' => 'Frankfurt', 'from_code' => 'FRA', 'to' => 'Madrid', 'to_code' => 'MAD'],
            ['from' => 'Madrid', 'from_code' => 'MAD', 'to' => 'Frankfurt', 'to_code' => 'FRA'],
            ['from' => 'Seoul', 'from_code' => 'ICN', 'to' => 'Shanghai', 'to_code' => 'PVG'],
            ['from' => 'Shanghai', 'from_code' => 'PVG', 'to' => 'Seoul', 'to_code' => 'ICN'],
            ['from' => 'Toronto', 'from_code' => 'YYZ', 'to' => 'Vancouver', 'to_code' => 'YVR'],
            ['from' => 'Vancouver', 'from_code' => 'YVR', 'to' => 'Toronto', 'to_code' => 'YYZ'],
            ['from' => 'Mumbai', 'from_code' => 'BOM', 'to' => 'Dubai', 'to_code' => 'DXB'],
            ['from' => 'Dubai', 'from_code' => 'DXB', 'to' => 'Mumbai', 'to_code' => 'BOM'],
            ['from' => 'Cairo', 'from_code' => 'CAI', 'to' => 'Istanbul', 'to_code' => 'IST'],
            ['from' => 'Istanbul', 'from_code' => 'IST', 'to' => 'Cairo', 'to_code' => 'CAI'],
            ['from' => 'São Paulo', 'from_code' => 'GRU', 'to' => 'Buenos Aires', 'to_code' => 'EZE'],
            ['from' => 'Buenos Aires', 'from_code' => 'EZE', 'to' => 'São Paulo', 'to_code' => 'GRU'],
            ['from' => 'Johannesburg', 'from_code' => 'JNB', 'to' => 'Cape Town', 'to_code' => 'CPT'],
            ['from' => 'Cape Town', 'from_code' => 'CPT', 'to' => 'Johannesburg', 'to_code' => 'JNB'],
        ];

        while (count($bookingData) < 200) {
            foreach ($otherRoutes as $route) {
                if (count($bookingData) >= 200) break;
                
                foreach ($experienceTypes as $type) {
                    if (count($bookingData) >= 200) break;
                    
                    $departureDate = date('Y-m-d', strtotime("2025-".rand(1,12)."-".rand(1,28)));
                    $arrivalDate = date('Y-m-d', strtotime($departureDate . " +" . rand(2,7) . " days"));
                    
                    $bookingData[] = [
                        'id' => $bookingId,
                        'destination_city_name' => $route['from'],
                        'destination_airport_id' => $route['from_code'],
                        'arrival_city_name' => $route['to'],
                        'arrival_airport_id' => $route['to_code'],
                        'experience_type' => $type,
                        'flight_number' => $flightNumber,
                        'departure_day_date' => $departureDate,
                        'arrival_day_date' => $arrivalDate,
                        'description' => "This {$type} journey takes you from {$route['from']} to {$route['to']} on flight #{$flightNumber}. Departing on {$departureDate}, you'll arrive by {$arrivalDate}. Enjoy premium travel experience.",
                    ];
                    
                    $flightNumber++;
                    $bookingId++;
                }
            }
        }

        // Insert all bookings
        foreach ($bookingData as $booking) {
            Booking::create($booking);
        }
    }
}