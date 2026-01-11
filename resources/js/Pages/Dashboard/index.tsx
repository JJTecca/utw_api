/*************************************************
 * @format Dashboard Screen (The new one)
 * @author Maior Cristian
 * ********************************************* */ 
import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
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
  Dialog,
  DialogContent,
  CircularProgress,
  Backdrop,
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
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
//Old Import
// import { useForm } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/react';
import { styles } from './Dashboard.styles'; 
import { motion, AnimatePresence } from "framer-motion";

// Define the props interface for the Dashboard component
interface DashboardProps {
  availableCities: string[];
  departureCities: string[];
  arrivalCities: string[];
  bookings: Array<{
    id: number;
    destination_city_name: string;
    destination_airport_id: string;
    arrival_city_name: string;
    arrival_airport_id: string;
    experience_type: string;
    flight_number: number;
    departure_day_date: string;
    arrival_day_date: string;
    description: string;
  }>;
}

export default function Dashboard() {
  // Get data from backend via Inertia
  const { props } = usePage();
  const dashboardProps = props as unknown as DashboardProps;
  
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
  const [availableExperienceTypes, setAvailableExperienceTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  const [searchMessage, setSearchMessage] = useState('Searching for flights...');

  // Get unique experience types from bookings
  useEffect(() => {
    if (dashboardProps.bookings) {
      const experiences = Array.from(
        new Set(dashboardProps.bookings.map(booking => booking.experience_type))
      );
      setAvailableExperienceTypes(experiences);
    }
  }, [dashboardProps.bookings]);

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
  });

  /*************************************
  *   Event Handlers
  *************************************/
  const form = useForm();

  const handleFlightStatusClick = () => {
    setOpenFlightStatus(!openFlightStatus);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAccountManagement = async () => {
    handleMenuClose();
    window.location.href = '/profileMenu';
  };

  const handleNext = (step: number) => {
    if (!(activeIndex === 0 && step === -1))
      setActiveIndex((prevIndex) => (prevIndex + step) % 2); 
  }

  const handleSwapCities = () => {
    const temp = departureCity;
    setDepartureCity(arrivalCity);
    setArrivalCity(temp);
  };

  const handleBooking = async () => {
    try {
      // Validate required fields
      if (!departureCity || !arrivalCity || !experienceType) {
        alert("Please select departure city, arrival city, and experience type");
        return;
      }

      // Start loading
      setLoading(true);
      setSearchProgress(0);
      setSearchMessage('Searching for flights...');

      // Simulate search progress
      const progressInterval = setInterval(() => {
        setSearchProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      // Update messages during search
      const messageTimeout = setTimeout(() => {
        setSearchMessage('Checking availability...');
      }, 1000);

      const messageTimeout2 = setTimeout(() => {
        setSearchMessage('Finalizing search results...');
      }, 2000);

      // Get CSRF token
      const csrfMeta = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null;
      
      if (!csrfMeta || !csrfMeta.content) {
        throw new Error("CSRF token meta tag missing or empty. Please reload the page.");
      }

      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2500));

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
          departure_date: departureDate,
          return_date: tripType === 'round' ? arrivalDate : null,
          passengers: passengers
        })
      });

      // Clear intervals and timeouts
      clearInterval(progressInterval);
      clearTimeout(messageTimeout);
      clearTimeout(messageTimeout2);

      if (!response.ok) {
        const errorData = await response.json();
        setLoading(false);
        alert(errorData.message || "Booking failed");
        return;
      }

      // Complete progress
      setSearchProgress(100);
      setSearchMessage('Found flights! Redirecting...');

      // Wait a moment to show completion
      await new Promise(resolve => setTimeout(resolve, 500));

      // Stop loading
      setLoading(false);

      // Redirect to bookings page with search parameters
      window.location.href = `/dashboard/view-bookings/destination?destination_city_name=${encodeURIComponent(departureCity)}&arrival_city_name=${encodeURIComponent(arrivalCity)}&experience_type=${encodeURIComponent(experienceType)}&passenger_count=${passengers}`;

    } catch (error) {
      console.error("Booking error:", error);
      setLoading(false);
      alert("An error occurred while processing your booking");
    }
  };

  const handleLogout = () => {
    handleMenuClose();
    form.post('/logout');
  };

  const getAvailableArrivalCities = () => {
    if (!departureCity) return dashboardProps.availableCities || [];
    
    if (dashboardProps.arrivalCities) {
      return dashboardProps.arrivalCities;
    }
    
    return (dashboardProps.availableCities || []).filter(city => city !== departureCity);
  };

  const getAvailableDepartureCities = () => {
    if (!arrivalCity) return dashboardProps.availableCities || [];

    if (dashboardProps.departureCities) {
      return dashboardProps.departureCities;
    }
    
    return (dashboardProps.availableCities || []).filter(city => city !== arrivalCity);
  };

  const sectionVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const gridItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      
      {/* Navigation Bar */}
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
              href={route('tour.view')}
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
                sx={{ width: '100%'}}
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
        sx={{ ...styles.heroSection,
              backgroundImage: `url(${heroImages[currentImage]})`,}} >
        
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

        {/* Main Content Container */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
          <AnimatePresence mode="wait" custom={activeIndex}>
            
            {/* Flight Search Section */}
            {activeIndex === 0 && (
              <motion.div
                key="flight-search"
                custom={activeIndex}
                variants={sectionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={styles.flightSearchBox}>
                  <Typography variant="h5" sx={styles.searchTitle}>
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
                        size='small'
                        value={departureCity}
                        onChange={(e) => {
                          setDepartureCity(e.target.value);
                          // Clear arrival if it's the same as departure
                          if (e.target.value === arrivalCity) {
                            setArrivalCity('');
                          }
                        }}
                        displayEmpty
                        sx={styles.citySelect}
                      >
                        <MenuItem value="" disabled sx={styles.placeholderText}>
                          <Typography variant="h6" sx={styles.citySelectText}>
                            🛫 Departure City
                          </Typography>
                        </MenuItem>
                        {(getAvailableDepartureCities() || []).map((city) => (
                          <MenuItem key={city} value={city} sx={{ py: 0.35 }}>
                            {getCityEmoji(city)} {city}
                          </MenuItem>
                        ))}
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
                        size="small"
                        value={arrivalCity}
                        onChange={(e) => {
                          setArrivalCity(e.target.value);
                          // Clear departure if it's the same as arrival
                          if (e.target.value === departureCity) {
                            setDepartureCity('');
                          }
                        }}
                        displayEmpty
                        sx={styles.citySelect}
                      >
                        <MenuItem value="" disabled sx={styles.placeholderText}>
                          <Typography variant="h6" sx={styles.citySelectText}>
                            🛬 Arrival City
                          </Typography>
                        </MenuItem>
                        {(getAvailableArrivalCities() || []).map((city) => (
                          <MenuItem key={city} value={city} sx={{ py: 0.35 }}>
                            {getCityEmoji(city)} {city}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>

                  {/* Dates and Passengers */}
                  <Box sx={styles.datesPassengersContainer}>
                    <Box sx={styles.dateContainer}>
                      <Typography variant="body2" sx={{ ...styles.inputLabel, fontSize: '0.8rem', mb: 0.5 }}>
                        Departure
                      </Typography>
                      <TextField
                        fullWidth
                        type="date"
                        size="small"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        sx={{
                          '& .MuiInputBase-root': {
                            height: '36px',
                            fontSize: '0.8rem',
                          }
                        }}
                      />
                    </Box>
                    
                    {tripType === 'round' && (
                      <Box sx={styles.dateContainer}>
                        <Typography variant="body2" sx={{ ...styles.inputLabel, fontSize: '0.8rem', mb: 0.5 }}>
                          Return
                        </Typography>
                        <TextField
                          fullWidth
                          type="date"
                          size="small"
                          value={arrivalDate}
                          onChange={(e) => setArrivalDate(e.target.value)}
                          sx={{
                            '& .MuiInputBase-root': {
                              height: '36px',
                              fontSize: '0.8rem',
                            }
                          }}
                        />
                      </Box>
                    )}

                    <Box sx={styles.passengerContainer}>
                      <Typography variant="body2" sx={{ ...styles.inputLabel, fontSize: '0.8rem', mb: 0.5 }}>
                        Passengers
                      </Typography>
                      <Select
                        fullWidth
                        value={passengers}
                        size="small"
                        onChange={(e) => setPassengers(e.target.value as number)}
                        sx={{
                          ...styles.passengerSelect,
                          height: '36px',
                          '& .MuiSelect-select': {
                            padding: '6px 12px',
                            fontSize: '0.8rem',
                          }
                        }}
                      >
                        {[1,2,3,4,5,6,7,8,9].map(num => (
                          <MenuItem key={num} value={num} sx={{ py: 0.5, fontSize: '0.8rem' }}>
                            👥 {num} {num === 1 ? 'Passenger' : 'Passengers'}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            )}

            {/* Experience Section */}
            {activeIndex === 1 && (
              <motion.div
                key="experience"
                custom={activeIndex}
                variants={sectionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={styles.experienceBox}>
                  <Typography variant="h5" sx={styles.experienceTitle}>
                    ✨ Travel Experience
                  </Typography>
                  <Select
                    fullWidth
                    size="small"
                    value={experienceType}
                    onChange={(e) => setExperienceType(e.target.value)}
                    displayEmpty
                    sx={{
                      ...styles.experienceSelect,
                      '& .MuiSelect-select': {
                        padding: '8px 12px',
                        fontSize: '0.875rem',
                      }
                    }}
                  >
                    <MenuItem value="" disabled sx={{ ...styles.placeholderText, fontSize: '0.875rem' }}>
                      Select Your Travel Style
                    </MenuItem>
                    {availableExperienceTypes.map((expType) => (
                      <MenuItem 
                        key={expType} 
                        value={expType} 
                        sx={{ ...styles.menuItem, py: 1, fontSize: '0.875rem' }}
                      >
                        {getExperienceIcon(expType)} {expType}
                      </MenuItem>
                    ))}
                  </Select>
                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    onClick={handleBooking}
                    sx={styles.experienceBookButton}
                    disabled={!departureCity || !arrivalCity || !experienceType || loading}
                  >
                    {loading ? 'Searching...' : 'Continue to Book'}
                  </Button>
                </Box>
              </motion.div>
            )}

            {/* Flight Status Section */}
            {activeIndex === 1 && (
              <motion.div
                key="flight-status"
                custom={activeIndex}
                variants={sectionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box sx={styles.flightStatusBox}>
                  <Typography variant="h5" sx={styles.flightStatusTitle}>
                    📡 Flight Status
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    startIcon={<FlightTakeoffIcon />}
                    onClick={handleFlightStatusClick}
                    sx={styles.flightStatusButton}
                  >
                    Check Flight Status
                  </Button>

                  <Collapse in={openFlightStatus} timeout="auto" unmountOnExit>
                    <Box sx={styles.flightStatusContent}>
                      <Box sx={styles.flightStatusField}>
                        <Typography variant="body1" sx={{ ...styles.inputLabel, fontSize: '0.9rem' }}>
                          Flight Number
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          variant="outlined"
                          placeholder="TK 1234"
                        />
                      </Box>

                      <Box sx={styles.flightStatusField}>
                        <Typography variant="body1" sx={{ ...styles.inputLabel, fontSize: '0.9rem' }}>
                          Date
                        </Typography>
                        <Box sx={styles.dateDisplay}>
                          <CalendarTodayIcon sx={{ color: '#1e40af', fontSize: '1rem' }} />
                          <Typography fontWeight="500" fontSize="0.9rem">{currentDate}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
        
        {/* Book Flight Button */}
        <Box sx={styles.bookFlightButton}>
          <Button
            variant="contained"
            startIcon={<FlightTakeoffIcon />}
            onClick={handleBooking}
            sx={styles.bookButton}
            disabled={!departureCity || !arrivalCity || !experienceType || loading}
          >
            <Typography variant="h6" sx={styles.bookButtonText}>
              {loading ? '🔄 Searching...' : '🎫 Book Your Flight'}
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={styles.whyChooseSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5" component="div" sx={styles.sectionTitle}>
            Why Choose UTW Airlines?
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={2} justifyContent="center">
            {[
              { icon: <EventSeatIcon />, title: "Premium Comfort", description: "Experience unparalleled comfort with our spacious seating and premium amenities." },
              { icon: <ShieldIcon />, title: "Top Safety", description: "Your safety is our priority with the highest international safety standards." },
              { icon: <HeadsetMicIcon />, title: "24/7 Support", description: "Round-the-clock customer service to assist you throughout your journey." },
              { icon: <VerifiedUserIcon />, title: "Privacy First", description: "We protect your data with enterprise-grade security and privacy measures." },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={gridItemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card sx={styles.featureCard}>
                    <Box sx={styles.featureIcon}>
                      {feature.icon}
                    </Box>
                    <CardContent>
                      <Typography variant="h6" component="div" sx={styles.featureTitle}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={styles.featureDescription}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* Loading Pop-up Dialog */}
      <Dialog
        open={loading}
        onClose={() => {}} // Prevent closing by clicking outside
        aria-labelledby="search-flight-dialog"
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            padding: 3,
            background: 'linear-gradient(135deg, #060808 0%, #102a22 45%, #23d59dff 100%)',
            color: 'white',
          }
        }}
      >
        <DialogContent sx={{ textAlign: 'center', py: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <CircularProgress 
              variant="determinate" 
              value={searchProgress} 
              size={80}
              thickness={4}
              sx={{ 
                color: 'white',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                }
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
            </Box>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            ✈️ Searching Flights
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            {searchMessage}
          </Typography>

          <Box sx={{ width: '100%', mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">Progress</Typography>
              <Typography variant="body2">{searchProgress}%</Typography>
            </Box>
            <Box sx={{ 
              width: '100%', 
              height: 8, 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              borderRadius: 4,
              overflow: 'hidden'
            }}>
              <Box sx={{ 
                width: `${searchProgress}%`, 
                height: '100%', 
                backgroundColor: 'white',
                borderRadius: 4,
                transition: 'width 0.3s ease-in-out'
              }} />
            </Box>
          </Box>

          <Typography variant="caption" sx={{ opacity: 0.7, display: 'block' }}>
            Searching for: {departureCity} → {arrivalCity} ({experienceType})
          </Typography>

          <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <CircularProgress size={20} sx={{ color: 'white' }} />
            <Typography variant="caption">
              Please wait while we find the best flights for you...
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Optional: Add a subtle backdrop */}
      {loading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </AuthenticatedLayout>
  );
}

// Helper function to get city emoji
function getCityEmoji(city: string): string {
  const emojiMap: Record<string, string> = {
    'New York City': '🗽',
    'New York': '🗽',
    'Paris': '🥐',
    'Tokyo': '🗼',
    'London': '🇬🇧',
    'Dubai': '🏙️',
    'Sydney': '🇦🇺',
    'Barcelona': '🏖️',
    'Rome': '🏟️',
    'Santorini': '🌅',
    'Venice': '🛶',
    'Kyoto': '⛩️',
    'Bali': '🏝️',
    'Maldives': '🏝️',
    'Swiss Alps': '🏔️',
    'Cape Town': '🌄',
    'Rio de Janeiro': '⛰️',
    'Iceland': '🧊',
    'Phuket': '🏖️',
    'Marrakech': '🕌',
    'Queenstown': '⛰️',
    'Cancún': '🌴',
    'Prague': '🏰',
    'Singapore': '🌇',
    'Edinburgh': '🏰',
    'Hawaii': '🌺',
    'Budapest': '🏰',
    'Los Angeles': '🎬',
    'Maui': '🌺',
    'Amalfi Coast': '🏖️',
    'Lisbon': '🌊',
    'Berlin': '🏛️',
    'Madrid': '💃',
    'Amsterdam': '🚲',
    'Vienna': '🎻',
    'Viena': '🎻',
  };
  
  return emojiMap[city] || '📍';
}

// Helper function to get experience icon
function getExperienceIcon(experienceType: string): string {
  const iconMap: Record<string, string> = {
    'First Class': '👑',
    'Economy Class': '💺',
    'Business Class': '💼',
  };
  
  return iconMap[experienceType] || '✨';
}