<?php

namespace Database\Seeders;

use App\Models\Report;
use Illuminate\Database\Seeder;

class ReportSeeder extends Seeder
{
    public function run(): void
    {
        $reportsData = [];

        // Flight log variations
        $flightLogs = [
            'Fuel levels optimal, engines nominal.',
            'Flight path stable, no anomalies detected.',
            'Autopilot maintained altitude effectively.',
            'Minor turbulence reported mid-flight.',
            'Smooth flight with optimal fuel consumption.',
            'Flight completed within scheduled time.',
            'Excellent visibility throughout the flight.',
            'Standard flight operations maintained.',
            'Flight path adjusted for weather conditions.',
            'All systems functioning normally.',
        ];

        // Maintenance variations
        $maintenanceReports = [
            'Routine checks completed, no issues.',
            'Engine 2 oil pressure slightly below norm.',
            'Cabin pressure system recalibrated.',
            'Landing gear inspected, no faults found.',
            'All systems operating within parameters.',
            'Pre-flight inspection completed successfully.',
            'Minor maintenance performed on hydraulics.',
            'Engine performance within normal range.',
            'Aircraft cleaned and serviced for next flight.',
            'All safety systems tested and operational.',
        ];

        // Weather variations
        $weatherReports = [
            'Moderate headwinds at 30,000 ft.',
            'Storm clouds avoided via reroute.',
            'Light rain during descent.',
            'Clear skies throughout.',
            'Some turbulence encountered mid-flight.',
            'Excellent weather conditions for entire flight.',
            'Low cloud cover during approach.',
            'Smooth air at cruising altitude.',
            'Visibility reduced during landing.',
            'Perfect flying weather.',
        ];

        // Financial variations
        $financialReports = [
            'Unexpected customs fee incurred.',
            'Ticket sales hit record high.',
            'Profit margins exceeded projections.',
            'Operational costs within budget.',
            'Revenue higher than expected.',
            'All financial targets met.',
            'Fuel costs lower than projected.',
            'Ancillary revenue performing well.',
            'Flight operating at a profit.',
            'Cost-saving measures implemented successfully.',
        ];

        // Passenger report variations
        $passengerReports = [
            'All passengers satisfied.',
            'High satisfaction with cabin service.',
            'Minor delays in boarding process.',
            'One complaint about meal quality.',
            'Passengers praised in-flight entertainment.',
            'All passengers arrived on time.',
            'Excellent passenger feedback received.',
            'Special needs passengers accommodated well.',
            'Full flight with high occupancy.',
            'Passengers appreciated crew service.',
        ];

        // Crew report variations
        $crewReports = [
            'Excellent coordination during takeoff.',
            'Minor delay in communication.',
            'Crew performance exemplary.',
            'New trainee received good feedback.',
            'All crew members performed duties well.',
            'Smooth handover between crew shifts.',
            'Crew training completed successfully.',
            'Excellent teamwork demonstrated.',
            'Crew exceeded service expectations.',
            'Professional conduct maintained throughout.',
        ];

        // Safety report variations
        $safetyReports = [
            'Emergency exits confirmed operational.',
            'One passenger needed medical attention.',
            'Safety drill conducted successfully.',
            'No safety incidents reported.',
            'All safety equipment checked and ready.',
            'Security protocols followed correctly.',
            'Emergency procedures reviewed with crew.',
            'Passenger safety briefing completed.',
            'Medical kit fully stocked and accessible.',
            'Fire safety systems operational.',
        ];

        // Generate 200 reports
        for ($bookingId = 1; $bookingId <= 200; $bookingId++) {
            $reportsData[] = [
                'booking_id' => $bookingId,
                'flight_logs' => $flightLogs[array_rand($flightLogs)],
                'maintenance' => $maintenanceReports[array_rand($maintenanceReports)],
                'weather' => $weatherReports[array_rand($weatherReports)],
                'financial' => $financialReports[array_rand($financialReports)],
                'passenger_reports' => $passengerReports[array_rand($passengerReports)],
                'crew_reports' => $crewReports[array_rand($crewReports)],
                'safety_reports' => $safetyReports[array_rand($safetyReports)],
            ];
        }

        // Insert all reports
        foreach ($reportsData as $reportData) {
            Report::create($reportData);
        }
    }
}