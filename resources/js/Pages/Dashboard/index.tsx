import { useState } from 'react';
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
  Grid,
  Card,
  CardContent,
  TextField,
  Collapse,
  MenuItem,
  Select,
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ExploreIcon from '@mui/icons-material/Explore';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PublicIcon from '@mui/icons-material/Public';
import FlightIcon from '@mui/icons-material/Flight';
import ShieldIcon from '@mui/icons-material/Shield';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useForm } from '@inertiajs/inertia-react';
import { styles } from './Dashboard.styles'; 

export default function Dashboard() {
  const [openFlightStatus, setOpenFlightStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [experienceType, setExperienceType] = useState('');

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

  const handleAccountManagement = () => {
    handleMenuClose();
    window.location.href = '/profileMenu';
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
              <FlightTakeoffIcon style={{ fontSize: '3rem' }} />
            </IconButton>

            <Typography
              variant="h4"
              component="div"
              sx={styles.logoText}
            >
              UTW Airlines
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={styles.navButton}
              href={route('dashboard.experiences')}
            >
              <ExploreIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              EXPERIENCE
            </Button>
            <Button
              sx={styles.navButton}
              href="/settings"
            >
              <EventSeatIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              RESERVE
            </Button>
            <Button
              sx={styles.navButton}
              href={route('dashboard.worldtour')}
            >
              <PublicIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              WORLD TOUR
            </Button>
            <Button
              sx={styles.navButton}
              href="/manage"
            >
              <FlightIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              MANAGE YOUR FLIGHTS
            </Button>
            <Button
              sx={styles.accountButton}
              onClick={(event) => setAnchorEl(event.currentTarget)} 
            >
              <Avatar
                alt="Account"
                src="/Images/login-avatar.jpg"
                sx={{ width: 50, height: 50, ml: 2 }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleAccountManagement}>
                <Typography variant="body1">Account Management</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography variant="body1" color="error">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <div
        style={{
          backgroundImage: 'url(/Images/turkish-menu.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          marginTop: '-20px',
          position: 'relative',
        }}
      >
        <Box sx={styles.flightSearchBox}>
          <Typography variant="h5" sx={styles.searchTitle}>
            Make your destinations come true
          </Typography>
          <Select
            fullWidth
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            displayEmpty
            sx={{ mb: 4 }}
          >
            <MenuItem value="" disabled>
              Select Departure City
            </MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="London">London</MenuItem>
            <MenuItem value="Tokyo">Tokyo</MenuItem>
            <MenuItem value="Paris">Paris</MenuItem>
          </Select>
          <Select
            fullWidth
            value={arrivalCity}
            onChange={(e) => setArrivalCity(e.target.value)}
            displayEmpty
            sx={{ mb: 4 }}
          >
            <MenuItem value="" disabled>
              Select Arrival City
            </MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="London">London</MenuItem>
            <MenuItem value="Tokyo">Tokyo</MenuItem>
            <MenuItem value="Paris">Paris</MenuItem>
          </Select>
          <Box>
            <Typography variant="h6" sx={styles.dateTitle}>
              Departure day & Return day
            </Typography>     
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              sx={{ width: '45%', mr: 4 }} 
            />
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              sx={{ width: '45%' }} 
            />
          </Box>
        </Box>

        <Box sx={styles.experienceBox}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb:4 }}>
            Experiences
          </Typography>
          <Select
            fullWidth
            value={experienceType}
            onChange={(e) => setExperienceType(e.target.value)}
            displayEmpty
            sx={{ mb: 4 }}
          >
            <MenuItem value="" disabled>
              Select Experience
            </MenuItem>
            <MenuItem value="Exotic">Exotic</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Across Country">Across Country</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
        </Box>

        <Box sx={styles.flightStatusBox}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<FlightTakeoffIcon />}
            onClick={handleFlightStatusClick}
            sx={styles.flightStatusButton}
          >
            Flight Status
          </Button>

          <Collapse in={openFlightStatus} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Flight No.
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="TK Enter flight number"
                />
              </Box>

              <Box sx={{ width: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Date
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                >
                  <CalendarTodayIcon sx={{ color: 'action.active' }} />
                  <Typography>{currentDate}</Typography>
                </Box>
              </Box>
            </Box>
          </Collapse>
        </Box>
      </div>

      <Box sx={styles.whyChooseSection}>
        <Typography variant="h4" component="div" sx={styles.sectionTitle}>
          Why Choose UTW Airlines?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={5} sm={6} md={3}>
            <Card sx={styles.featureCard}>
              <EventSeatIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={styles.featureTitle}>
                  Comfortable Seating
                </Typography>
                <Typography variant="body1">
                  Enjoy the most comfortable seats in the sky.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5} sm={6} md={3}>
            <Card sx={styles.featureCard}>
              <ShieldIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={styles.featureTitle}>
                  Top Safety Standards
                </Typography>
                <Typography variant="body1">
                  Your safety is our top priority.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5} sm={6} md={3}>
            <Card sx={styles.featureCard}>
              <HeadsetMicIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={styles.featureTitle}>
                  24/7 Customer Support
                </Typography>
                <Typography variant="body1">
                  We're here to help you anytime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={5} sm={6} md={3}>
            <Card sx={styles.featureCard}>
              <VerifiedUserIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={styles.featureTitle}>
                  We value your privacy
                </Typography>
                <Typography variant="body1">
                  We highly value your privacy across the world
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AuthenticatedLayout>
  );
}

