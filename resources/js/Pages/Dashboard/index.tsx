/*************************************************
 * @format Dashboard Screen 
 * @author Maior Cristian
 * ********************************************* */ 
/****************************************************************************************************
 * 1. Import only necessary modules, in the correct logical order.
 * 2. Import screen components from their correct paths. 
 *    - If there's an error, try saving the file (Ctrl+S) or retyping with autocomplete.
 * 3. Import any react-native or gluestack themed necessarry UI 
 * 4. Define props (if any) using camelCase — similar to C's `typedef struct` style.
 * 5. Declare const variables.
 * 6. Add any extra/helper functions.
 * 7. Export the main component function.
 * 8. EVERY index.tsx FILE MUST HAVE A .ts FILE 
 * 9. Every style that has more than 2 props, put it in the .ts file , otherwise let it be here
 * 10. This shall be the ONLY home screen we have, as we need further improvements
 * 11. This file is #1 prior and needs the most frontend attention
 ****************************************************************************************************/
/****************************************************************************************************
 * 1. Provides an interactive airline dashboard where users can search, select, and book flights.
 * 2. Integrates dynamic UI sections that cycle between flight search, experience selection, and flight status.
 * 3. Connects with backend routes to securely handle bookings, account management, and user authentication.
 ****************************************************************************************************/
import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  Card,
  CardContent,
  TextField,
  Collapse,
  MenuItem,
  Select,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ExploreIcon from '@mui/icons-material/Explore';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PublicIcon from '@mui/icons-material/Public';
import FlightIcon from '@mui/icons-material/Flight';
import ShieldIcon from '@mui/icons-material/Shield';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from '@mui/material/Link';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useForm } from '@inertiajs/inertia-react';
import { styles } from './Dashboard.styles'; 

export default function Dashboard() {
  const [openFlightStatus, setOpenFlightStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [experienceType, setExperienceType] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [activeIndex, setActiveIndex] = useState(0); 
  const [currentImage, setCurrentImage] = useState(0);
  const [tripType, setTripType] = useState('round');
  const [passengers, setPassengers] = useState(1);

  {/*We have to add as much diverse images we can */}
  {/* TODO: Find stretched */}
  const heroImages = [
    '/Images/turkish-menu.jpg',
    '/Images/edit-profile.jpg',
    '/Images/a350.jpg',
    '/Images/turkish-dashboard1.jpg',
    '/Images/Turkish_Boeing_787.jpg',
    '/Images/Turkish_boeing_777.jpg',
    '/Images/clouds-255012_1280.jpg',
    '/Images/turkish-dashboard-2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
  });

  const form = useForm();

  const handleFlightStatusClick = () => {
    setOpenFlightStatus(!openFlightStatus);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAccountManagement = async () => {
    handleMenuClose(); // Close the menu
    window.location.href = '/profileMenu';
  };

  const handleNext = (step: number) => {
    if (!(activeIndex === 0 && step === -1)) 
            setActiveIndex((prevIndex) => (prevIndex + step) % 3); 
  }

  const handleSwapCities = () => {
    const temp = departureCity;
    setDepartureCity(arrivalCity);
    setArrivalCity(temp);
  };

  const handleBooking = async () => {
    try {
      const csrfMeta = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null;
      
      if (!csrfMeta || !csrfMeta.content) {
        throw new Error("CSRF token meta tag missing or empty. Please reload the page.");
      } //trb verificat daca e NULL sau nu , nu inteleg dc nu merge fara if
  
      const response = await fetch('/dashboard/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfMeta.content
        },
        body: JSON.stringify({
          destination_city_name: departureCity,
          arrival_city_name: arrivalCity,
          experience_type: experienceType,       
        })
      });

      if(!response) {
        alert("Problems with the response");
      } else {
        window.location.href = `/dashboard/view-bookings/destination?destination_city_name=${departureCity}&arrival_city_name=${arrivalCity}&experience_type=${experienceType}`;

        //trb luate bookingurile care deja erau in db
      }

    } catch (error) {
      console.error("Booking error:", error);
    }
  };
  

  const handleLogout = () => {
    handleMenuClose();
    form.post('/logout');
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.logoContainer}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={styles.logoButton}
            >
              <FlightTakeoffIcon style={{ fontSize: '2.5rem' }} />
            </IconButton>

            <Typography
              variant="h4"
              component="div"
              sx={styles.logoText}
            >
              UTW Airlines
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              sx={styles.navButton}
              href={route('dashboard.experiences')}
            >
              <ExploreIcon style={{ fontSize: '1.25rem' }} />
              EXPERIENCE
            </Button>
            <Button
              sx={styles.navButton}
              href={route('dashboard.worldtour')}
            >
              <PublicIcon style={{ fontSize: '1.25rem' }} />
              WORLD TOUR
            </Button>
            <Button
              sx={styles.accountButton}
              onClick={(event) => setAnchorEl(event.currentTarget)} 
            >
              <Avatar
                alt="Account"
                src="/Images/login-avatar.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </Button>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleAccountManagement} sx={{ padding: '12px 20px' }}>
                <Typography variant="body1">Account Management</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout} sx={{ padding: '12px 20px' }}>
                <Typography variant="body1" color="error">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section with Slideshow */}
      <Box
        sx={{
          ...styles.heroSection,
          backgroundImage: `url(${heroImages[currentImage]})`,
        }}
      >
        {/* Navigation Buttons */}
        <Button
          variant="contained"
          startIcon={<ArrowBackIosNewIcon />}
          sx={{ ...styles.navArrowButton, ...styles.prevButton }}
          onClick={() => handleNext(-1)} 
        >
          Previous
        </Button>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ ...styles.navArrowButton, ...styles.nextButton }}
          onClick={() => handleNext(1)} 
        >
          Next
        </Button>

        {/* Flight Search Section */}
        { activeIndex === 0 && (
          <Box sx={styles.flightSearchBox}>
            <Typography variant="h4" sx={styles.searchTitle}>
              ✈️ Where Will You Fly Today?
            </Typography>

            {/* Trip Type Selector */}
            <Box sx={styles.tripTypeContainer}>
              {['round', 'oneway'].map((type) => (
                <Box 
                  key={type}
                  sx={{
                    ...styles.tripTypeOption,
                    ...(tripType === type ? styles.tripTypeActive : {})
                  }}
                  onClick={() => setTripType(type)}
                >
                  <Typography sx={{
                    ...styles.tripTypeLabel,
                    ...(tripType === type ? { color: 'white' } : {})
                  }}>
                    {type === 'round' ? '🔄 Round Trip' : '🚀 One Way'}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* City Selection */}
            <Box sx={styles.citiesContainer}>
              {/* Departure City */}
              <Box sx={styles.cityInputContainer}>
                <Typography variant="h6" sx={styles.inputLabel}>
                  From
                </Typography>
                <Select
                  fullWidth
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                  displayEmpty
                  sx={styles.citySelect}
                >
                  <MenuItem value="" disabled sx={styles.placeholderText}>
                    🛫 Departure City
                  </MenuItem>
                  <MenuItem value="New York">🗽New York</MenuItem>
                  <MenuItem value="London">🇬🇧 London</MenuItem>
                  <MenuItem value="Tokyo">🗼Tokyo</MenuItem>
                  <MenuItem value="Paris">🥐Paris</MenuItem>
                  <MenuItem value="Lisbon">🌊Lisbon</MenuItem>
                  <MenuItem value="Berlin">🏛️Berlin</MenuItem>
                  <MenuItem value="Rome">🏟️Rome</MenuItem>
                  <MenuItem value="Madrid">💃Madrid</MenuItem>
                  <MenuItem value="Barcelona">🏖️Barcelona</MenuItem>
                  <MenuItem value="Amsterdam">🚲Amsterdam</MenuItem>
                  <MenuItem value="Viena">🎻Vienna</MenuItem>
                  <MenuItem value="Prague">🏰Prague</MenuItem>
                </Select>
              </Box>

              {/* Swap Button */}
              <IconButton 
                sx={styles.swapButton}
                onClick={handleSwapCities}
              >
                <SwapHorizIcon />
              </IconButton>

              {/* Arrival City */}
              <Box sx={styles.cityInputContainer}>
                <Typography variant="h6" sx={styles.inputLabel}>
                  To
                </Typography>
                <Select
                  fullWidth
                  value={arrivalCity}
                  onChange={(e) => setArrivalCity(e.target.value)}
                  displayEmpty
                  sx={styles.citySelect}
                >
                  <MenuItem value="" disabled sx={styles.placeholderText}>
                    🛬 Arrival City
                  </MenuItem>
                  <MenuItem value="" disabled sx={styles.placeholderText}>
                    🛫 Departure City
                  </MenuItem>
                  <MenuItem value="New York">🗽New York</MenuItem>
                  <MenuItem value="London">🇬🇧 London</MenuItem>
                  <MenuItem value="Tokyo">🗼Tokyo</MenuItem>
                  <MenuItem value="Paris">🥐Paris</MenuItem>
                  <MenuItem value="Lisbon">🌊Lisbon</MenuItem>
                  <MenuItem value="Berlin">🏛️Berlin</MenuItem>
                  <MenuItem value="Rome">🏟️Rome</MenuItem>
                  <MenuItem value="Madrid">💃Madrid</MenuItem>
                  <MenuItem value="Barcelona">🏖️Barcelona</MenuItem>
                  <MenuItem value="Amsterdam">🚲Amsterdam</MenuItem>
                  <MenuItem value="Viena">🎻Vienna</MenuItem>
                  <MenuItem value="Prague">🏰Prague</MenuItem>
                </Select>
              </Box>
            </Box>

            {/* Dates and Passengers */}
            <Box sx={styles.datesPassengersContainer}>
              <Box sx={styles.dateContainer}>
                <Typography variant="h6" sx={styles.inputLabel}>
                  Departure
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </Box>
              
              {tripType === 'round' && (
                <Box sx={styles.dateContainer}>
                  <Typography variant="h6" sx={styles.inputLabel}>
                    Return
                  </Typography>
                  <TextField
                    fullWidth
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                  />
                </Box>
              )}

              <Box sx={styles.passengerContainer}>
                <Typography variant="h6" sx={styles.inputLabel}>
                  Passengers
                </Typography>
                <Select
                  fullWidth
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value as number)}
                  sx={styles.passengerSelect}
                >
                  {[1,2,3,4,5,6,7,8,9].map(num => (
                    <MenuItem key={num} value={num} sx={{ py: 1.5 }}>
                      👥 {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
        )}

        {/* Experience Section */}
        {activeIndex === 1 && (
          <Box sx={styles.experienceBox}>
            <Typography variant="h4" sx={styles.experienceTitle}>
              ✨ Travel Experience
            </Typography>
            <Select
              fullWidth
              value={experienceType}
              onChange={(e) => setExperienceType(e.target.value)}
              displayEmpty
              sx={styles.experienceSelect}
            >
              <MenuItem value="" disabled sx={styles.placeholderText}>
                Select Your Travel Style
              </MenuItem>
              <MenuItem value="Exotic" sx={styles.menuItem}>🏝️ Exotic Getaway</MenuItem>
              <MenuItem value="Casual" sx={styles.menuItem}>😎 Casual Vacation</MenuItem>
              <MenuItem value="Across Country" sx={styles.menuItem}>🗺️ Across Country</MenuItem>
              <MenuItem value="Business" sx={styles.menuItem}>💼 Business Class</MenuItem>
            </Select>
            <Button
              fullWidth
              variant="contained"
              onClick={handleBooking}
              sx={{
                background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)',
              }}
            >
              Continue to Book
            </Button>
          </Box>
        )}

        {/* Flight Status Section */}
        {activeIndex === 2 && (
          <Box sx={styles.flightStatusBox}>
            <Typography variant="h4" sx={styles.flightStatusTitle}>
              📡 Flight Status
            </Typography>
            <Button
              fullWidth
              variant="contained"
              startIcon={<FlightTakeoffIcon />}
              onClick={handleFlightStatusClick}
              sx={styles.flightStatusButton}
            >
              Check Flight Status
            </Button>

            <Collapse in={openFlightStatus} timeout="auto" unmountOnExit>
              <Box sx={styles.flightStatusContent}>
                <Box sx={styles.flightStatusField}>
                  <Typography variant="h6" sx={styles.inputLabel}>
                    Flight Number
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="TK 1234"
                  />
                </Box>

                <Box sx={styles.flightStatusField}>
                  <Typography variant="h6" sx={styles.inputLabel}>
                    Date
                  </Typography>
                  <Box sx={styles.dateDisplay}>
                    <CalendarTodayIcon sx={{ color: '#1e40af' }} />
                    <Typography fontWeight="500">{currentDate}</Typography>
                  </Box>
                </Box>
              </Box>
            </Collapse>
          </Box>
        )}
        
        {/* Book Flight Button */}
        <Box sx={styles.bookFlightButton}>
          <Button
            variant="contained"
            startIcon={<FlightTakeoffIcon />}
            onClick={handleBooking}
            sx={styles.bookButton}
          >
            <Typography variant="h6" sx={styles.bookButtonText}>
              🎫 Book Your Flight
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={styles.whyChooseSection}>
        <Typography variant="h4" component="div" sx={styles.sectionTitle}>
          Why Choose UTW Airlines?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { icon: <EventSeatIcon />, title: "Premium Comfort", description: "Experience unparalleled comfort with our spacious seating and premium amenities." },
            { icon: <ShieldIcon />, title: "Top Safety", description: "Your safety is our priority with the highest international safety standards." },
            { icon: <HeadsetMicIcon />, title: "24/7 Support", description: "Round-the-clock customer service to assist you throughout your journey." },
            { icon: <VerifiedUserIcon />, title: "Privacy First", description: "We protect your data with enterprise-grade security and privacy measures." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={styles.featureCard}>
                <Box sx={styles.featureIcon}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography variant="h5" component="div" sx={styles.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography variant="h5" sx={styles.featureDescription}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AuthenticatedLayout>
  );
}