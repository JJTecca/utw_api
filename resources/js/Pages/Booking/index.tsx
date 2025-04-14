import BookingLayout from '@/Layouts/BookingLayout';
import { Box, Typography, Rating, Accordion, AccordionSummary, AccordionDetails, Button, CardMedia, CardContent, Card, CardActionArea, CardActions } from "@mui/material";
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

interface BookingInterface {
    destination_city_name: string,
    arrival_city_name: string,
    experience_type: string
}

interface BookingInterfaceProps {
    bookings: BookingInterface[]
}

interface TextBoxInterface {
    title: string,
    description: string,
    logo: React.ReactNode,
    activeIndex: number
}

const titles = [
    "Fly Smart. Fly Safe. Fly With Us.",
    "Where Your Flight Experience Takes Off.",
    "Elevate Your Travel Standards.",
    "Trusted Skies, Tailored Journeys.",
    "Book With Ease, Travel With Confidence.",
    "More Than a Ticket—It’s an Experience."
  ];

const descriptions = [
    "Because your journey deserves reliability and comfort.",
    "Enjoy seamless booking and exceptional in-air service.",
    "Luxury, punctuality, and personalized service in every flight.",
    "Because we make every mile memorable and stress-free.",
    "Top-tier technology meets world-class customer care.",
    "From takeoff to landing, we’re redefining the way you fly."
  ];
  
  const logos = [
    <FlightTakeoffIcon sx={{ fontSize: 60 }} />,
    <AirplaneTicketIcon sx={{ fontSize: 60 }} />,
    <WorkspacePremiumIcon sx={{ fontSize: 60 }} />,
    <TravelExploreIcon sx={{ fontSize: 60 }} />,
    <VerifiedUserIcon sx={{ fontSize: 60 }} />,
    <EmojiEventsIcon sx={{ fontSize: 60 }} />
  ];

  const TextBox: React.FC<TextBoxInterface> = ({ activeIndex }) => {
    return (
      <Card sx={{ 
        width: '100%',
        height: '100%', 
        textAlign: 'center',
        borderRadius: '20px', 
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
        '&:hover': {
          transform: 'scale(1.05)', // zoom in
        },
      }}>
        <CardActionArea>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: 120,
            backgroundColor: 'turquoise', 
            borderRadius: '12px', 
            padding: '20px', 
          }}>
            {logos[activeIndex]}
          </Box>
          <CardContent sx={{
            padding: '20px', 
            borderRadius: '15px', 
          }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: 'black',
              textTransform: 'uppercase', 
            }}>
              {titles[activeIndex]}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              fontSize: '1.25rem',
              padding: '10px', 
            }}>
              {descriptions[activeIndex]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ 
          justifyContent: 'center', 
          marginTop: 'auto',
          padding: '10px',
        }}>
        </CardActions>
      </Card>
    );
  };

export default function Booking({ bookings }: BookingInterfaceProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | false>(false);
    const [activeIndex, setActiveIndex] = useState(0); 

    const handleAccordionChange = (index: number) => 
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedIndex(isExpanded ? index : false);
        };
    const handleNext = (step: number) => {
        if (!(activeIndex === 0 && step === -1)) //sa nu se faca prev la prima pagina
             setActiveIndex((prevIndex) => (prevIndex + step) % 6); 
    };

    return (
        <BookingLayout>
            <Box sx={{
                position:'absolute',
                top:'5%',
                left:'1%',
                height:'45%',
                width:'38%',
                backgroundColor:'gray',
                borderRadius:'15px',
                mt:'1%'
            }}>
            <img src="https://publish.finviz.com/041425/sec_d1_064929712.png" alt="Finviz Map" style={{ width: '100%' }} />
            </Box>
            <Box sx={{
                position: 'absolute',
                top: '56%',
                left: '1%',
                height: '42%',
                width: '38%',
                backgroundColor: 'gray',
                borderRadius: '15px',
                display: 'flex',          
                justifyContent: 'space-between', 
                alignItems: 'center',  
                padding: '0 20px',        
            }}>
                <Typography variant='h5' sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '34%',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 'bold', // Makes the title bold to stand out
                    color: '#ffffff', // White color for good contrast against gray box
                    }}>
                    Why with UTW?
                </Typography>
                <Button 
                    onClick={() => handleNext(-1)}
                    sx={{
                        backgroundColor: 'blue',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkblue', 
                        },
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                    }}
                >
                    Prev
                </Button>
                <Box sx={{
                    display: 'flex',       
                    flexDirection: 'column',  
                    position:'absolute',
                    left:'20%',
                    top:'20%',
                    width: '60%',
                    height:'75%',      
                    }}>
                    <TextBox 
                        title={titles[activeIndex]}
                        description={descriptions[activeIndex]}
                        logo={logos[activeIndex]}
                        activeIndex={activeIndex}
                    />
                </Box>
                <Button 
                    onClick={() => handleNext(1)}
                    sx={{
                        backgroundColor: 'blue', 
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkblue', 
                        },
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                    }}
                >
                    Next
                </Button>
            </Box>
            <Box sx={{
                position: 'absolute',
                top: '5%',
                left: '40%',
                height: '60%',
                width: '55%',
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: 3,
                overflowY: 'auto',
            }}>
                <Box sx={{
                    backgroundColor: 'aliceblue',
                    borderRadius: '8px', 
                    padding: '12px 20px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <CardTravelIcon sx={{ 
                        color: 'red', 
                        fontSize: '2rem',
                        mr: 2 
                    }} />
                    <Typography variant="h5" sx={{ 
                        fontWeight: 'bold', 
                        color: 'black', 
                    }}>
                        Your Main Panel of Bookings
                    </Typography>
                </Box>

                {bookings.map((booking, index) => (
                    <Accordion 
                        key={index}
                        expanded={expandedIndex === index}
                        onChange={handleAccordionChange(index)}
                        sx={{
                            mb: 3,
                            border: '1px solid whitesmoke',
                            borderRadius: '8px',
                            backgroundColor: 'ghostwhite',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                backgroundColor: 'white'
                            },
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box sx={{ 
                                display: 'flex', 
                                width: '100%',
                                alignItems: 'center'
                            }}>    
                                <Box sx={{ 
                                    textAlign: 'center', 
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <FlightTakeoffIcon sx={{ 
                                        color: 'green', 
                                        fontSize: '2rem',
                                        mb: 1 
                                    }} />
                                    <Typography variant="subtitle2" sx={{ 
                                        color: 'gray', 
                                        fontSize: '1.2rem', 
                                        mb: 1,
                                        fontWeight: 'bold'
                                    }}>
                                        From
                                    </Typography>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: 'navy',
                                        fontSize: '1.4rem'
                                    }}>
                                        {booking.destination_city_name}
                                    </Typography>
                                </Box>
                                
                                <Box sx={{ 
                                    textAlign: 'center', 
                                    flex: 1,
                                    mx: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <Rating readOnly defaultValue={2.0} precision={0.5} sx={{color:'yellow'}} />
                                    <Typography variant="subtitle2" sx={{ 
                                        color: 'gray', 
                                        fontSize: '1.2rem', 
                                        mb: 1,
                                        fontWeight: 'bold'
                                    }}>
                                        Experience
                                    </Typography>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: 'dodgerblue',
                                        backgroundColor: 'aliceblue',
                                        borderRadius: '8px',
                                        px: 2,
                                        py: 1,
                                        display: 'inline-block',
                                        fontSize: '1.2rem',
                                        border: '1px solid lightblue'
                                    }}>
                                        {booking.experience_type}
                                    </Typography>
                                </Box>

                                <Box sx={{ 
                                    textAlign: 'center', 
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <FlightLandIcon sx={{ 
                                        color: 'orange', 
                                        fontSize: '2rem',
                                        mb: 1 
                                    }} />
                                    <Typography variant="subtitle2" sx={{ 
                                        color: 'gray', 
                                        fontSize: '1.2rem', 
                                        mb: 1,
                                        fontWeight: 'bold'
                                    }}>
                                        To
                                    </Typography>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: 'navy',
                                        fontSize: '1.4rem'
                                    }}>
                                        {booking.arrival_city_name}
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" sx={{ 
                                textAlign: 'center',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>
                                THIS IS DESCRIPTION OF THE FLIGHT
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
            
        </BookingLayout>
    );
}