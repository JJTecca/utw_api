import React, { useState } from "react";
import { Typography, Button, Box,LinearProgress, Accordion, AccordionSummary, AccordionDetails, Rating } from '@mui/material';
import ProfileMenuLayout from "@/Layouts/ProfileMenuLayout";
import Circle from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function ProfileMenu() {
    const [showLayout, setShowLayout] = useState(false); 

    const handleButtonClick = () => {
        setShowLayout(!showLayout); 
    };

    return (
        <ProfileMenuLayout>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', top: '5%', left: '5%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4, alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '2.25rem',
                            padding: '16px',
                            height: '100px',
                            width: '600px',
                            backgroundColor: 'black', 
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '12px', // Rounded corners
                        }}
                        onClick={handleButtonClick} 
                    >
                        Home Of Aviation
                    </Button>
                </Typography>
            </Box>

            <Box
                sx={{
                    fontSize: '2.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '5%',
                    left: '35%',
                    padding: '16px',
                    height: '100px',
                    width: '600px',
                    backgroundColor: 'black', 
                    color: 'white', // White text
                    fontWeight: 'bold',
                    borderRadius: '12px',
                }}
            >
                Payment Methods:
                <PaymentsIcon sx={{ fontSize: '2rem', ml: 2, color: 'white' }} /> 
                <CreditCardIcon sx={{ fontSize: '2rem', ml: 2, color: 'white' }} /> 
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '5%',
                    left: '70%',
                    fontSize: '2.25rem',
                    padding: '16px',
                    height: '100px',
                    width: '600px',
                    backgroundColor: 'black', 
                    color: 'white', // White text
                    fontWeight: 'bold',
                    borderRadius: '12px', 
                }}
            >
                Status
                <Circle sx={{ fontSize: '2rem', ml: 2, color: '#4caf50' }} /> 
            </Box>

            {showLayout && (
                <>
                    {/* Reports Box */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '5%',
                            width: '630px',
                            height: 'auto', 
                            backgroundColor: 'black', 
                            padding: '20px',
                            borderRadius: '12px', 
                            boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.2)', 
                            color: 'white', 
                        }}
                    >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}> 
                        REPORTS
                    </Typography>

                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }} 
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Flight Logs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Departure: 10:00 AM<br />
                                - Arrival: 12:00 PM<br />
                                - Duration: 2 hours<br />
                                - Route: New York to Chicago<br />
                                - Aircraft: Boeing 737-800<br />
                                - Pilot: John Doe<br />
                                - Co-Pilot: Jane Smith<br />
                                - Passengers: 150
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Maintenance Dropdown */}
                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }} // Darker black for dropdown
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Maintenance</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Last Maintenance: 2023-10-01<br />
                                - Next Maintenance: 2023-11-01<br />
                                - Component Replaced: Engine<br />
                                - Maintenance Hours: 120<br />
                                - Technician: Michael Brown<br />
                                - Status: Completed<br />
                                - Notes: Engine oil changed, filters replaced
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Weather Dropdown */}
                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }} // Darker black for dropdown
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Weather</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Current: Sunny<br />
                                - Wind: 10 mph<br />
                                - Temperature: 75°F<br />
                                - Humidity: 60%<br />
                                - Visibility: 10 miles<br />
                                - Pressure: 1013 hPa<br />
                                - Forecast: Clear skies for the next 24 hours
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Financial Dropdown */}
                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }} 
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Financial</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Revenue: $50,000<br />
                                - Expenses: $30,000<br />
                                - Profit: $20,000<br />
                                - Fuel Costs: $10,000<br />
                                - Maintenance Costs: $5,000<br />
                                - Crew Salaries: $8,000<br />
                                - Passenger Revenue: $35,000<br />
                                - Cargo Revenue: $15,000
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Passenger Reports Dropdown */}
                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Passenger Reports</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Total Passengers: 150<br />
                                - Business Class: 20<br />
                                - Economy Class: 130<br />
                                - Checked Bags: 120<br />
                                - Carry-On Bags: 150<br />
                                - Special Requests: 5 (e.g., wheelchair assistance)<br />
                                - Passenger Feedback: 4.5/5
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Crew Reports Dropdown */}
                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }} 
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Crew Reports</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Total Crew: 10<br />
                                - Pilots: 2<br />
                                - Cabin Crew: 8<br />
                                - Flight Hours: 120<br />
                                - Rest Periods: Compliant<br />
                                - Training Status: Up-to-date<br />
                                - Incidents: 0
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Safety Reports Dropdown */}
                    <Accordion
                        sx={{ mb: 1, background: '#111', borderRadius: '8px' }} // Darker black for dropdown
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h6" sx={{ color: 'white' }}>Safety Reports</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white' }}>
                                - Safety Inspections: 5<br />
                                - Incidents: 0<br />
                                - Emergency Drills: 2<br />
                                - Compliance: 100%<br />
                                - Safety Equipment: Fully functional<br />
                                - Notes: No issues reported
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                    {/* Rating Box */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '35%',
                            width: '770px', 
                            height: 'auto',
                            backgroundColor: 'black', 
                            padding: '20px',
                            borderRadius: '12px', // Rounded corners
                            color: 'white', // White text
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            RATING
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                User Friendly Experience:
                            </Typography>
                            <Rating name="user-friendly-rating" defaultValue={5.0} precision={0.5} sx={{ 
                                color: 'white' ,
                                '& .MuiRating-iconHover': { color: 'yellow'},
                                }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Flight Booking Process:
                            </Typography>
                            <Rating name="flight-booking-rating" defaultValue={5.0} precision={0.5} sx={{ 
                                color: 'white',
                                '& .MuiRating-iconHover': { color: 'yellow'},
                                }} 
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Customer Support:
                            </Typography>
                            <Rating name="customer-support-rating" defaultValue={5.0} precision={0.5} sx={{ 
                                color: 'white',
                                '& .MuiRating-iconHover': { color: 'yellow'}, 
                                }} 
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                In-Flight Experience:
                            </Typography>
                            <Rating name="in-flight-rating" defaultValue={5.0} precision={0.5} sx={{ 
                                color: 'white',
                                '& .MuiRating-iconHover': { color: 'yellow'}, 
                                }} 
                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Mobile App Performance:
                            </Typography>
                            <Rating name="mobile-app-rating" defaultValue={5.0} precision={0.5} sx={{ 
                                color: 'white',
                                '& .MuiRating-iconHover': { color: 'yellow'}, 
                                }} 
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'absolute',
                            top: '55%',
                            left: '35%',
                            width: '770px', 
                            height: 'auto',
                            backgroundColor: 'black',
                            padding: '20px',
                            borderRadius: '12px', 
                            color: 'white',
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}> 
                            PROGRESS
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1">Account verification :</Typography>
                            <LinearProgress variant="determinate" value={50} sx={{ height: '10px', borderRadius: '5px', backgroundColor: 'green' }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1">Money Spent :</Typography>
                            <LinearProgress variant="determinate" value={75} sx={{ height: '10px', borderRadius: '5px', backgroundColor: 'green' }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1">Reservations Booked :</Typography>
                            <LinearProgress variant="determinate" value={25} sx={{ height: '10px', borderRadius: '5px', backgroundColor: 'green' }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1">Bonuses Earned :</Typography>
                            <LinearProgress variant="determinate" value={80} sx={{ height: '10px', borderRadius: '5px', backgroundColor: 'green' }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1">Achievements Acquire :</Typography>
                            <LinearProgress variant="determinate" value={65} sx={{ height: '10px', borderRadius: '5px', backgroundColor: 'green' }} />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '70%',
                            width: '660px', 
                            height: '370px',
                            backgroundColor: 'black', 
                            backgroundSize: 'cover',
                            padding: '20px',
                            borderRadius: '12px',
                            color: 'white', 
                            backgroundImage: 'url(/Images/turkish-fav-plane.jpg)'
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}> 
                            FAVORITE PLANE
                        </Typography>
                    </Box>

                    {/* Weather Box */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '60%',
                            left: '70%',
                            width: '660px', 
                            height: '30%', 
                            backgroundColor: 'black', 
                            backgroundImage: 'url(/Images/clouds.gif)',
                            backgroundSize: 'cover',
                            padding: '20px',
                            borderRadius: '12px', // Rounded corners
                            color: 'white', // White text
                        }}
                        
                    >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}> 
                            WEATHER
                            <NightsStayIcon sx={{ fontSize: '2rem', ml: 2, color: 'white' }} /> 
                        </Typography>
                    </Box>
                </>
            )}
        </ProfileMenuLayout>
    );
}
