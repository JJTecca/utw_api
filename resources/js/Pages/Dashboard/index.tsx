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
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useForm } from '@inertiajs/inertia-react';
import { styles } from './Dashboard.styles'; 
import { motion, AnimatePresence } from "framer-motion";

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

  /*************************************
  *   Event Handlers of Dashboard/index.tsx 
  * -> useState() update UI component State
  * -> purpose: Use Interaction handle with proper calls
  * -> Keep handlers focused on single responsibilities
  * 1. handleFlightStatusClick
  * 2. handleMenuClose
  * 3. handleAccountManagement
  * 4. handleNext
  * 5. handleSwapCities
  * 6. handleBooking
  * 7. handleLogout
  *************************************/
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

  {/* When step is reaching MAX Slides it resets by %*/}
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

  {/*****************************************
      FRAMER MOTION ANIMATION VARIANTS
      - Section transitions for hero content
      - Grid animations for feature cards
      - All animations are non-blocking for interactions
  *******************************************/}
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
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
      {/******************************************
       * Nav bar which contains all the user options
       * Clickable, each section NEEDS to be implemented
       * Each Box, Button shall be implemented
       * ********************************************/}
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
            {/***************************************************
             * Avatar Role : Open the Menu with an "accordion" UI
             * All the options shall be listed in the Menu UI 
             * It shall list the profile of the User with user-options
             * TODO : Functionalities will be implemented 
             ***************************************************/ }
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

        {/* Animated Sections Container */}
        <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
          <AnimatePresence mode="wait" custom={activeIndex}>
            {/* Flight Search Section */}
            {/* TODO: Place this in styling files */}
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

                  {/************************************************************************
                  *   Trip Type Selector 
                  * Here we have to chose all the type of trips the client wants
                  * 1. One Way Trip (It shall eliminate the destination option)
                  * 2. Round trip (It shall enable both destination and arrival labels)
                  * 3. TODO: Multi City feature 
                  ************************************************************************/}
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
                        size='small' // ← THIS MAKES THE SELECT SMALLER
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}
                        displayEmpty
                        sx={styles.citySelect}
                      >
                        <MenuItem value="" disabled sx={styles.placeholderText}>
                            <Typography variant="h6" sx={styles.citySelectText}>
                              🛫 Departure City
                            </Typography>
                        </MenuItem>
                        {/* Reduced padding */}
                        <MenuItem value="New York" sx={{ py: 0.35 }}>🗽New York</MenuItem>
                        <MenuItem value="London" sx={{ py: 0.35 }}>🇬🇧 London</MenuItem>
                        <MenuItem value="Tokyo" sx={{ py: 0.35 }}>🗼Tokyo</MenuItem>
                        <MenuItem value="Paris" sx={{ py: 0.35 }}>🥐Paris</MenuItem>
                        <MenuItem value="Lisbon" sx={{ py: 0.35 }}>🌊Lisbon</MenuItem>
                        <MenuItem value="Berlin" sx={{ py: 0.35 }}>🏛️Berlin</MenuItem>
                        <MenuItem value="Rome" sx={{ py: 0.35 }}>🏟️Rome</MenuItem>
                        <MenuItem value="Madrid" sx={{ py: 0.35 }}>💃Madrid</MenuItem>
                        <MenuItem value="Barcelona" sx={{ py: 0.35 }}>🏖️Barcelona</MenuItem>
                        <MenuItem value="Amsterdam" sx={{ py: 0.35 }}>🚲Amsterdam</MenuItem>
                        <MenuItem value="Viena" sx={{ py: 0.35 }}>🎻Vienna</MenuItem>
                        <MenuItem value="Prague" sx={{ py: 0.35 }}>🏰Prague</MenuItem>
                      </Select>
                    </Box>

                    {/***********************************************
                     * Swap Button -> Desintation City = Arrival City
                    ************************************************/}
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
                        size="small" // ← THIS MAKES THE SELECT SMALLER
                        value={arrivalCity}
                        onChange={(e) => setArrivalCity(e.target.value)}
                        displayEmpty
                        sx={styles.citySelect}
                      >
                        <MenuItem value="" disabled sx={styles.placeholderText}>
                            <Typography variant="h6" sx={styles.citySelectText}>
                              🛫 Arrival City
                            </Typography>
                        </MenuItem>
                        <MenuItem value="New York" sx={{ py: 0.35 }}>🗽New York</MenuItem>
                        <MenuItem value="London" sx={{ py: 0.35 }}>🇬🇧 London</MenuItem>
                        <MenuItem value="Tokyo" sx={{ py: 0.35 }}>🗼Tokyo</MenuItem>
                        <MenuItem value="Paris" sx={{ py: 0.35 }}>🥐Paris</MenuItem>
                        <MenuItem value="Lisbon" sx={{ py: 0.35 }}>🌊Lisbon</MenuItem>
                        <MenuItem value="Berlin" sx={{ py: 0.35 }}>🏛️Berlin</MenuItem>
                        <MenuItem value="Rome" sx={{ py: 0.35 }}>🏟️Rome</MenuItem>
                        <MenuItem value="Madrid" sx={{ py: 0.35 }}>💃Madrid</MenuItem>
                        <MenuItem value="Barcelona" sx={{ py: 0.35 }}>🏖️Barcelona</MenuItem>
                        <MenuItem value="Amsterdam" sx={{ py: 0.35 }}>🚲Amsterdam</MenuItem>
                        <MenuItem value="Viena" sx={{ py: 0.35 }}>🎻Vienna</MenuItem>
                        <MenuItem value="Prague" sx={{ py: 0.35 }}>🏰Prague</MenuItem>
                      </Select>
                    </Box>
                  </Box>

                  {/*******************************************************************************
                   *    Dates and Passengers
                   *  1. Box for DEPARTURE DATE
                   *  2. Box for ARRIVAL DATE
                   *  3. BOX FOR PASSENGER COUNT
                   * NOTE: When User Select One Way type of trip , the arrival date will disappear
                  **********************************************************************************/}
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
                    size="small" // Added small size
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
                    <MenuItem value="Exotic" sx={{ ...styles.menuItem, py: 1, fontSize: '0.875rem' }}>🏝️ Exotic Getaway</MenuItem>
                    <MenuItem value="Casual" sx={{ ...styles.menuItem, py: 1, fontSize: '0.875rem' }}>😎 Casual Vacation</MenuItem>
                    <MenuItem value="Across Country" sx={{ ...styles.menuItem, py: 1, fontSize: '0.875rem' }}>🗺️ Across Country</MenuItem>
                    <MenuItem value="Business" sx={{ ...styles.menuItem, py: 1, fontSize: '0.875rem' }}>💼 Business Class</MenuItem>
                  </Select>
                  <Button
                    fullWidth
                    variant="contained"
                    size="small" // Added small size
                    onClick={handleBooking}
                    sx={styles.experienceBookButton}>
                    Continue to Book
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
                    size="small" // Added small size
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
          >
            <Typography variant="h6" sx={styles.bookButtonText}>
              🎫 Book Your Flight
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Why Choose Us Section with Grid Animations */}
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
    </AuthenticatedLayout>
  );
}