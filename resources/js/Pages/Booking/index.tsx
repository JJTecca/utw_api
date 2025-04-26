import BookingLayout from '@/Layouts/BookingLayout';
import { Box, Typography, Rating, Accordion, AccordionSummary, AccordionDetails, Button, CardContent, Card, CardActionArea, CardActions } from "@mui/material";
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { styles } from './Booking.styles';
import axios from 'axios';

interface BookingInterface {
    destination_city_name: string,
    arrival_city_name: string,
    experience_type: string,
    description: string
}

interface BookingInterfaceProps {
    bookings: BookingInterface[]
}

interface TextBoxInterface {
    activeIndex: number
}

const titles = [
    "Fly Smart. Fly Safe. Fly With Us.",
    "Where Your Flight Experience Takes Off.",
    "Elevate Your Travel Standards.",
    "Trusted Skies, Tailored Journeys.",
    "Book With Ease, Travel With Confidence.",
    "More Than a Ticket—It's an Experience."
];

const descriptions = [
    "Because your journey deserves reliability and comfort.",
    "Enjoy seamless booking and exceptional in-air service.",
    "Luxury, punctuality, and personalized service in every flight.",
    "Because we make every mile memorable and stress-free.",
    "Top-tier technology meets world-class customer care.",
    "From takeoff to landing, we're redefining the way you fly."
];

const logos = [
    <FlightTakeoffIcon sx={styles.iconStyles} />,
    <AirplaneTicketIcon sx={styles.iconStyles} />,
    <WorkspacePremiumIcon sx={styles.iconStyles} />,
    <TravelExploreIcon sx={styles.iconStyles} />,
    <VerifiedUserIcon sx={styles.iconStyles} />,
    <EmojiEventsIcon sx={styles.iconStyles} />
];

const TextBox: React.FC<TextBoxInterface> = ({ activeIndex }) => {
    return (
        <Card sx={styles.textBoxCard}>
            <CardActionArea>
                <Box sx={styles.textBoxHeader}>
                    {logos[activeIndex]}
                </Box>
                <CardContent sx={styles.textBoxContent}>
                    <Typography gutterBottom variant="h5" component="div" sx={styles.textBoxTitle}>
                        {titles[activeIndex]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={styles.textBoxDescription}>
                        {descriptions[activeIndex]}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={styles.textBoxActions}>
            </CardActions>
        </Card>
    );
};

export default function Booking({ bookings }: BookingInterfaceProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | false>(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    const handleAccordionChange = (index: number) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedIndex(isExpanded ? index : false);
        };

    const handleNext = (step: number) => {
        if (!(activeIndex === 0 && step === -1))
            setActiveIndex((prevIndex) => (prevIndex + step) % 6);
    };

    const handleClose = async () => {
        setAnchorEl(null);
    }

    const handleBooking = async (booking : BookingInterface) => {
        handleClose(); // aici vine submitu de flight request 
        try {
            await axios.post('/dashboard/submit-booking',{
                destination_city_name: booking.destination_city_name,
                arrival_city_name: booking.arrival_city_name,
                experience_type: booking.experience_type
            },{
                withCredentials: true // <== IMPORTANT!
            });
            console.log('Booking sent suucesfully');

        }catch (error) {
            console.error('Failed to add user:', error);
          }
    }

    const getStarsValue = (experienceTypeString : string) : number => {
        switch(experienceTypeString) {
             case 'Casual':
                return 1;
            case 'Across Country':
                return 3;
            case 'Exotic':
                return 4;
            case 'Business':
                return 5;
            default:
                return 2; 
        }
    }

    return (
        <BookingLayout>
            <Box sx={styles.whyContainer}>
                <Typography variant='h5' sx={styles.whyTitle}>
                    Why with UTW?
                </Typography>
                
                <Button
                    onClick={() => handleNext(-1)}
                    startIcon={<ArrowBack />}
                    sx={styles.navButton}
                >
                    Prev
                </Button>
                
                <Box sx={styles.textBoxContainer}>
                    <TextBox activeIndex={activeIndex} />
                </Box>
                
                <Button
                    onClick={() => handleNext(1)}
                    endIcon={<ArrowForward />}
                    sx={styles.navButton}
                >
                    Next
                </Button>
            </Box>
            
            <Box sx={styles.mainPanel}>
                <Box sx={styles.panelHeader}>
                    <CardTravelIcon sx={{ color: 'red', fontSize: '2rem', mr: 2 }} />
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
                        Your Main Panel of Bookings
                    </Typography>
                </Box>

                {bookings.map((booking, index) => (
                    <Accordion
                        key={index}
                        expanded={expandedIndex === index}
                        onChange={handleAccordionChange(index)}
                        sx={styles.accordion}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                <Box sx={styles.cityBox}>
                                    <FlightTakeoffIcon sx={{ color: 'green', ...styles.iconStyles }} />
                                    <Typography variant="subtitle2" sx={styles.subtitleStyles}>
                                        From
                                    </Typography>
                                    <Typography variant="h6" sx={styles.cityNameStyles}>
                                        {booking.destination_city_name}
                                    </Typography>
                                </Box>

                                <Box sx={styles.experienceBox}>
                                    <Rating 
                                        readOnly 
                                        value={ getStarsValue(booking.experience_type) } 
                                        precision={0.5} 
                                        sx={{ color: 'yellow' }} />
                                    <Typography variant="subtitle2" sx={styles.subtitleStyles}>
                                        Experience
                                    </Typography>
                                    <Typography variant="h6" sx={styles.experienceTag}>
                                        {booking.experience_type}
                                    </Typography>
                                </Box>

                                <Box sx={styles.cityBox}>
                                    <FlightLandIcon sx={{ color: 'orange', ...styles.iconStyles }} />
                                    <Typography variant="subtitle2" sx={styles.subtitleStyles}>
                                        To
                                    </Typography>
                                    <Typography variant="h6" sx={styles.cityNameStyles}>
                                        {booking.arrival_city_name}
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={styles.descriptionText}>
                                {booking.description}
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Button 
                                variant="contained" 
                                startIcon={<SendIcon/>} 
                                onClick={() => handleBooking(booking)} //se trimit parametrii
                                size="large"
                                sx={styles.submitButtonStyles} >
                                Select Flight
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </BookingLayout>
    );
}