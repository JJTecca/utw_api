<?php

namespace Database\Seeders;

use App\Models\Report;
use Illuminate\Database\Seeder;

class ReportSeeder extends Seeder
{
    public function run(): void
    {
        $reportData = [
            [
                'booking_id' => 2,
                'flight_logs' => 'Flight departed on time. Cruising altitude reached. Minor turbulence at 12:45 UTC.',
                'maintenance' => 'Engine #1: Normal operation. Landing gear: No issues. Avionics: All systems functional.',
                'weather' => 'Clear skies with 10+ mile visibility. Light cloud cover at cruise altitude.',
                'financial' => 'Fuel Costs: $12,000. Other Costs: $3,500. Revenue: $20,000. Profit: $4,500.',
                'passenger_reports' => 'Total Passengers: 180. Business Class: 36. Special Meals: 5.',
                'crew_reports' => 'Captain: Normal duty. First Officer: All checks performed. Cabin Crew: Efficient service.',
                'safety_reports' => 'No safety incidents. All emergency equipment checked. Passenger briefing completed.',
            ],
            [
                'booking_id' => 1,
                'flight_logs' => 'Delayed departure by 25 mins. Smooth flight after initial hold.',
                'maintenance' => 'APU needed reset. Flight controls responsive. Fuel system: No leaks.',
                'weather' => 'Headwinds averaging 30 knots. Temperature at altitude: -50°C.',
                'financial' => 'Fuel Costs: $14,500. Other Costs: $4,200. Revenue: $22,000. Profit: $3,300.',
                'passenger_reports' => 'Total Passengers: 220. Business Class: 44. Special Meals: 8.',
                'crew_reports' => 'Purser handled requests professionally. Relief crew available as scheduled.',
                'safety_reports' => 'Evacuation slides armed. Fire extinguishers checked. No security breaches.',
            ],
            [
                'booking_id' => 3,
                'flight_logs' => 'Perfect takeoff. Tailwinds saved fuel. Landed 20 mins early.',
                'maintenance' => 'Oxygen systems: Fully operational. Emergency lighting: Tested OK.',
                'weather' => 'High pressure system over route. Some cirrus clouds at flight level.',
                'financial' => 'Fuel Costs: $9,800. Other Costs: $3,000. Revenue: $18,000. Profit: $5,200.',
                'passenger_reports' => 'Total Passengers: 150. Business Class: 30. Special Meals: 3.',
                'crew_reports' => 'No crew fatigue issues. All crew passed pre-flight checks.',
                'safety_reports' => 'Medical kit available. All seatbelts functional. No unauthorized items.',
            ],
            [
                'booking_id' => 5,
                'flight_logs' => 'Deviated slightly for weather. Communication with ATC excellent.',
                'maintenance' => 'Hydraulics: Pressure within limits. Cabin systems: Fully functional.',
                'weather' => 'Brief period of light turbulence. Otherwise perfect conditions.',
                'financial' => 'Fuel Costs: $11,200. Other Costs: $3,800. Revenue: $19,500. Profit: $4,500.',
                'passenger_reports' => 'Total Passengers: 190. Business Class: 38. Special Meals: 6.',
                'crew_reports' => 'Positive teamwork observed. No sick calls or absences.',
                'safety_reports' => 'Crew performed safety demonstration. All exits clear.',
            ],
            [
                'booking_id' => 4,
                'flight_logs' => 'Standard flight profile. All systems nominal throughout.',
                'maintenance' => 'Pre-flight check complete. No technical issues detected.',
                'weather' => 'Tailwinds provided fuel savings. Visibility excellent.',
                'financial' => 'Fuel Costs: $10,500. Other Costs: $3,200. Revenue: $17,800. Profit: $4,100.',
                'passenger_reports' => 'Total Passengers: 170. Business Class: 34. Special Meals: 4.',
                'crew_reports' => 'Senior cabin crew managed service efficiently.',
                'safety_reports' => 'No safety incidents reported. All checks completed.',
            ],
            [
                'booking_id' => 7,
                'flight_logs' => 'Held at gate for 15 mins. Otherwise routine flight operations.',
                'maintenance' => 'Minor issue with entertainment system. Not safety critical.',
                'weather' => 'Light rain at destination. Dry conditions enroute.',
                'financial' => 'Fuel Costs: $13,000. Other Costs: $4,000. Revenue: $21,000. Profit: $4,000.',
                'passenger_reports' => 'Total Passengers: 210. Business Class: 42. Special Meals: 7.',
                'crew_reports' => 'Crew resource management excellent throughout.',
                'safety_reports' => 'All emergency exits verified. No issues found.',
            ],
            [
                'booking_id' => 6,
                'flight_logs' => 'Early morning flight. Cabin pressure maintained optimally.',
                'maintenance' => 'All systems normal. Post-flight inspection scheduled.',
                'weather' => 'Cold temperatures at altitude. No significant weather.',
                'financial' => 'Fuel Costs: $9,200. Other Costs: $2,800. Revenue: $16,000. Profit: $4,000.',
                'passenger_reports' => 'Total Passengers: 140. Business Class: 28. Special Meals: 2.',
                'crew_reports' => 'Well-rested crew. Smooth shift handovers.',
                'safety_reports' => 'Passenger safety cards in all seatbacks. Demo equipment ready.',
            ],
            [
                'booking_id' => 9,
                'flight_logs' => 'Red-eye flight. Quiet cabin. On-time arrival.',
                'maintenance' => 'Galley equipment fully functional. Lavatories operational.',
                'weather' => 'Calm winds. Excellent visibility throughout.',
                'financial' => 'Fuel Costs: $8,500. Other Costs: $2,500. Revenue: $15,000. Profit: $4,000.',
                'passenger_reports' => 'Total Passengers: 130. Business Class: 26. Special Meals: 1.',
                'crew_reports' => 'Night crew performed exceptionally well.',
                'safety_reports' => 'All safety protocols followed. No violations.',
            ],
            [
                'booking_id' => 10,
                'flight_logs' => 'International flight. Customs clearance smooth.',
                'maintenance' => 'Long-range systems checked. All within parameters.',
                'weather' => 'Crosswinds at landing within limits. Otherwise clear.',
                'financial' => 'Fuel Costs: $15,000. Other Costs: $5,000. Revenue: $25,000. Profit: $5,000.',
                'passenger_reports' => 'Total Passengers: 250. Business Class: 50. Special Meals: 10.',
                'crew_reports' => 'Multilingual crew handled international passengers well.',
                'safety_reports' => 'International safety protocols followed. All documents verified.',
            ],
            [
                'booking_id' => 8,
                'flight_logs' => 'Short-haul flight. Quick turnaround achieved.',
                'maintenance' => 'Rapid turn maintenance completed. All green.',
                'weather' => 'Localized fog at origin. Cleared quickly.',
                'financial' => 'Fuel Costs: $7,800. Other Costs: $2,200. Revenue: $13,000. Profit: $3,000.',
                'passenger_reports' => 'Total Passengers: 120. Business Class: 24. Special Meals: 0.',
                'crew_reports' => 'Efficient service despite short duration.',
                'safety_reports' => 'Quick safety briefing delivered. All understood.',
            ]
        ];

        foreach($reportData as $report) {
            Report::create($report);
        }
    }
}
