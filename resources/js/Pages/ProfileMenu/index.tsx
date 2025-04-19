import React, { useState } from "react";
import { Typography, Button, Box, LinearProgress, Accordion, AccordionSummary, AccordionDetails, Rating } from '@mui/material';
import ProfileMenuLayout from "@/Layouts/ProfileMenuLayout";
import Circle from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import SendIcon from '@mui/icons-material/Send';
import {
  headerContainerStyles,
  mainButtonStyles,
  paymentMethodsStyles,
  statusStyles,
  reportBoxStyles,
  accordionStyles,
  accordionTextStyles,
  ratingBoxStyles,
  ratingItemStyles,
  ratingComponentStyles,
  progressBoxStyles,
  progressItemStyles,
  progressBarStyles,
  favoritePlaneStyles,
  weatherBoxStyles,
  iconStyles,
  statusIconStyles,
  submitButtonStyles
} from './ProfileMenu.styles';

interface Report {
    id: number;
    flight_logs: string;
    maintenance: string;
    weather: string;
    financial: string;
    passenger_reports: string;
    crew_reports: string;
    safety_reports: string;
}
interface ProfileMenuProps { //a doua interfata ca altfel da eroare
    report: Report; 
}

export default function ProfileMenu( {report}:ProfileMenuProps ) {
    const [showLayout, setShowLayout] = useState(false);

    const handleButtonClick = () => {
        setShowLayout(!showLayout);
    };

    return (
        <ProfileMenuLayout>
            <Box sx={headerContainerStyles}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4, alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        sx={mainButtonStyles}
                        onClick={handleButtonClick}
                    >
                        Home Of Aviation
                    </Button>
                </Typography>
            </Box>

            <Box sx={paymentMethodsStyles}>
                Payment Methods:
                <PaymentsIcon sx={iconStyles} />
                <CreditCardIcon sx={iconStyles} />
            </Box>

            <Box sx={statusStyles}>
                Status
                <Circle sx={statusIconStyles} />
            </Box>

            {showLayout && (
                <>
                    {/* Reports Box */}
                    <Box sx={reportBoxStyles}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            REPORTS
                        </Typography>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Flight Logs</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.flight_logs}                                  
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Maintenance</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.maintenance}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Weather</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.weather}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Financial</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.financial}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Passenger Reports</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.passenger_reports}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Crew Reports</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.crew_reports}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={accordionStyles}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={iconStyles} />}>
                                <Typography variant="h6" sx={accordionTextStyles}>Safety Reports</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={accordionTextStyles}>
                                    {report.safety_reports}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    {/* Rating Box */}
                    <Box sx={ratingBoxStyles}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            RATING
                        </Typography>

                        <Box sx={ratingItemStyles}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                User Friendly Experience:
                            </Typography>
                            <Rating name="user-friendly-rating" defaultValue={5.0} precision={0.5} sx={ratingComponentStyles} />
                        </Box>

                        <Box sx={ratingItemStyles}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Flight Booking Process:
                            </Typography>
                            <Rating name="flight-booking-rating" defaultValue={5.0} precision={0.5} sx={ratingComponentStyles} />
                        </Box>

                        <Box sx={ratingItemStyles}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Customer Support:
                            </Typography>
                            <Rating name="customer-support-rating" defaultValue={5.0} precision={0.5} sx={ratingComponentStyles} />
                        </Box>

                        <Box sx={ratingItemStyles}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                In-Flight Experience:
                            </Typography>
                            <Rating name="in-flight-rating" defaultValue={5.0} precision={0.5} sx={ratingComponentStyles} />
                        </Box>

                        <Box sx={ratingItemStyles}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Mobile App Performance:
                            </Typography>
                            <Rating name="mobile-app-rating" defaultValue={5.0} precision={0.5} sx={ratingComponentStyles} />
                        </Box>
                        
                        <Button variant="contained" startIcon={<SendIcon/>} size="large"sx={submitButtonStyles} >
                            Submit Review
                        </Button>
                        
                    </Box>

                    {/* Progress Box */}
                    <Box sx={progressBoxStyles}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            PROGRESS
                        </Typography>
                        <Box sx={progressItemStyles}>
                            <Typography variant="body1">Account verification :</Typography>
                            <LinearProgress variant="determinate" value={50} sx={progressBarStyles} />
                        </Box>
                        <Box sx={progressItemStyles}>
                            <Typography variant="body1">Money Spent :</Typography>
                            <LinearProgress variant="determinate" value={75} sx={progressBarStyles} />
                        </Box>
                        <Box sx={progressItemStyles}>
                            <Typography variant="body1">Reservations Booked :</Typography>
                            <LinearProgress variant="determinate" value={25} sx={progressBarStyles} />
                        </Box>
                        <Box sx={progressItemStyles}>
                            <Typography variant="body1">Bonuses Earned :</Typography>
                            <LinearProgress variant="determinate" value={80} sx={progressBarStyles} />
                        </Box>
                        <Box sx={progressItemStyles}>
                            <Typography variant="body1">Achievements Acquire :</Typography>
                            <LinearProgress variant="determinate" value={65} sx={progressBarStyles} />
                        </Box>
                    </Box>

                    {/* Favorite Plane Box */}
                    <Box sx={favoritePlaneStyles}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            FAVORITE PLANE
                        </Typography>
                    </Box>

                    {/* Weather Box */}
                    <Box sx={weatherBoxStyles}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            WEATHER
                            <NightsStayIcon sx={iconStyles} />
                        </Typography>
                    </Box>
                </>
            )}
        </ProfileMenuLayout>
    );
}
