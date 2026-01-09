<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Report;

class ReportSeeder extends Seeder
{
    public function run(): void
    {
        Report::create([
            'booking_id' => 1,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 2,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 3,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 4,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 5,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 6,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 7,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 8,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 9,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 10,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 11,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 12,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 13,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 14,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 15,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 16,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 17,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 18,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 19,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 20,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 21,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 22,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 23,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 24,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 25,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 26,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 27,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 28,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 29,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 30,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 31,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 32,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 33,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 34,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 35,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 36,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 37,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 38,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 39,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 40,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 41,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 42,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 43,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 44,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 45,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 46,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 47,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 48,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 49,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 50,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 51,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 52,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 53,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 54,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 55,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 56,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 57,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 58,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 59,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 60,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 61,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 62,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 63,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 64,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 65,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 66,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 67,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 68,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 69,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 70,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 71,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 72,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 73,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 74,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 75,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 76,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 77,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 78,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 79,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 80,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 81,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 82,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 83,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 84,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 85,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 86,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 87,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 88,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 89,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 90,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 91,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 92,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 93,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 94,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 95,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 96,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 97,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 98,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 99,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 100,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 101,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 102,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 103,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 104,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 105,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 106,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 107,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 108,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 109,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 110,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 111,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 112,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 113,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 114,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 115,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 116,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 117,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 118,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 119,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 120,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 121,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 122,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 123,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 124,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 125,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 126,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 127,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 128,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 129,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 130,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 131,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 132,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 133,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 134,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 135,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 136,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 137,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 138,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 139,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 140,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 141,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 142,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 143,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 144,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 145,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 146,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 147,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 148,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 149,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 150,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 151,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 152,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 153,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 154,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 155,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 156,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 157,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 158,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 159,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 160,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 161,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 162,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 163,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 164,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 165,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 166,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 167,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 168,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 169,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 170,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 171,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 172,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 173,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 174,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 175,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 176,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 177,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 178,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 179,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 180,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 181,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 182,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 183,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 184,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 185,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 186,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 187,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 188,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 189,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 190,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 191,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 192,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 193,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 194,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 195,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 196,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 197,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 198,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 199,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 200,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 201,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 202,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 203,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 204,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 205,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 206,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 207,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 208,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 209,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 210,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 211,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 212,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 213,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 214,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 215,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 216,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 217,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 218,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 219,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 220,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 221,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 222,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 223,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 224,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 225,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 226,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 227,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 228,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 229,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 230,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 231,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 232,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 233,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 234,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 235,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 236,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 237,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 238,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 239,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 240,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 241,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 242,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 243,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 244,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 245,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 246,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 247,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 248,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 249,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 250,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 251,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 252,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 253,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 254,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 255,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 256,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 257,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 258,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 259,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 260,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 261,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 262,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 263,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 264,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 265,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 266,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 267,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 268,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 269,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 270,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 271,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 272,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 273,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 274,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 275,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 276,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 277,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 278,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 279,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 280,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 281,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 282,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 283,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 284,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 285,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 286,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 287,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 288,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 289,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 290,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 291,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 292,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 293,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 294,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 295,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 296,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 297,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 298,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 299,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 300,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 301,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 302,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 303,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 304,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 305,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 306,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 307,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 308,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 309,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 310,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 311,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 312,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 313,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 314,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 315,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 316,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 317,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 318,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 319,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 320,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 321,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 322,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 323,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 324,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 325,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 326,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 327,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 328,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 329,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 330,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 331,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 332,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 333,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 334,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 335,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 336,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 337,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 338,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 339,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 340,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 341,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 342,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 343,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 344,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 345,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 346,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 347,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 348,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 349,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 350,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 351,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 352,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 353,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 354,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 355,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 356,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 357,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 358,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 359,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 360,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 361,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 362,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 363,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 364,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 365,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 366,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 367,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 368,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 369,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 370,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 371,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 372,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 373,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 374,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 375,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 376,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 377,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 378,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 379,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 380,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 381,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 382,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 383,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 384,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 385,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 386,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 387,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 388,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 389,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 390,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 391,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 392,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 393,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 394,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 395,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 396,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 397,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 398,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 399,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 400,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 401,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 402,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 403,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 404,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 405,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 406,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 407,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 408,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 409,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 410,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 411,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 412,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 413,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 414,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 415,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 416,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 417,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 418,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 419,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 420,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 421,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 422,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 423,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 424,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 425,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 426,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 427,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 428,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 429,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 430,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 431,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 432,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 433,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 434,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 435,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 436,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 437,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 438,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 439,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 440,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 441,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 442,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 443,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 444,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 445,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 446,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 447,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 448,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 449,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 450,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 451,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 452,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 453,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 454,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 455,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 456,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 457,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 458,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 459,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 460,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 461,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 462,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 463,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 464,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 465,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 466,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 467,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 468,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 469,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 470,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 471,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 472,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 473,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 474,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 475,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 476,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 477,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 478,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 479,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 480,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 481,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 482,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 483,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 484,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 485,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 486,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 487,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 488,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 489,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 490,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 491,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 492,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 493,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 494,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 495,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 496,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 497,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 498,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 499,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 500,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 501,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 502,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 503,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 504,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 505,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 506,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 507,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 508,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 509,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 510,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 511,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 512,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 513,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 514,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 515,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 516,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 517,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 518,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 519,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 520,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 521,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 522,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 523,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 524,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 525,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 526,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 527,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 528,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 529,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 530,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 531,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 532,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 533,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 534,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 535,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 536,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 537,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 538,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 539,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 540,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 541,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 542,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 543,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 544,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 545,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 546,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 547,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 548,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 549,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 550,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 551,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 552,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 553,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 554,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 555,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 556,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 557,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 558,
            'flight_logs' => 'Minor turbulence reported mid-flight.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 559,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 560,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 561,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 562,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Ticket sales hit record high.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 563,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Engine 2 oil pressure slightly below norm.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 564,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 565,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 566,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'New trainee received good feedback.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 567,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 568,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'One complaint about meal quality.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 569,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Storm clouds avoided via reroute.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 570,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 571,
            'flight_logs' => 'Flight path stable, no anomalies detected.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'Emergency exits confirmed operational.',
        ]);
        Report::create([
            'booking_id' => 572,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Routine checks completed, no issues.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 573,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Moderate headwinds at 30,000 ft.',
            'financial' => 'Profit margins exceeded projections.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Crew performance exemplary.',
            'safety_reports' => 'One passenger needed medical attention.',
        ]);
        Report::create([
            'booking_id' => 574,
            'flight_logs' => 'Autopilot maintained altitude effectively.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Unexpected customs fee incurred.',
            'passenger_reports' => 'Minor delays in boarding process.',
            'crew_reports' => 'Excellent coordination during takeoff.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
        Report::create([
            'booking_id' => 575,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Landing gear inspected, no faults found.',
            'weather' => 'Light rain during descent.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'High satisfaction with cabin service.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'Safety drill conducted successfully.',
        ]);
        Report::create([
            'booking_id' => 576,
            'flight_logs' => 'Fuel levels optimal, engines nominal.',
            'maintenance' => 'Cabin pressure system recalibrated.',
            'weather' => 'Clear skies throughout.',
            'financial' => 'Operational costs within budget.',
            'passenger_reports' => 'All passengers satisfied.',
            'crew_reports' => 'Minor delay in communication.',
            'safety_reports' => 'No safety incidents reported.',
        ]);
    }
}

