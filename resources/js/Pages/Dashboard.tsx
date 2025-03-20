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

export default function Dashboard() {
  const [openFlightStatus, setOpenFlightStatus] = useState(false);
  const [anchorEl, setanchorEl] = useState<null | HTMLElement>(null); //variabila standard , ramane asa
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [experienceType, setExperienceType] = useState('');

  const handleFlightStatusClick = () => {
    setOpenFlightStatus(!openFlightStatus)
  };

  const handleMenuClose = () => {
    setanchorEl(null)
  };

  const handleAccountManagement = () => {
    handleMenuClose();
    window.location.href='/profileMenu' //dute la profileMenu
  };
  
  const form = useForm();

  const handleLogout = () => {
    handleMenuClose();
    form.post('/logout');
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
  });

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <AppBar position="static" sx={{ backgroundColor: 'powderblue', minHeight: '120px', paddingTop: '5px' }}>
        <Toolbar sx={{ minHeight: '100px', px: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, fontWeight: 'bold', color: 'black' }}
            >
              <FlightTakeoffIcon style={{ fontSize: '3rem' }} />
            </IconButton>

            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: 'bold', fontSize: '2.5rem', color: 'black', paddingTop: '5px' }}
            >
              UTW Airlines
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'black', mx: 2, display: 'flex', alignItems: 'center', paddingTop: '5px' }}
              href="/about"
            >
              <ExploreIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              EXPERIENCE
            </Button>
            <Button
              sx={{ fontWeight: 'bold', fontSize: '1.5em', color: 'black', mx: 2, display: 'flex', alignItems: 'center', paddingTop: '5px' }}
              href="/settings"
            >
              <EventSeatIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              RESERVE
            </Button>
            <Button
              sx={{ fontWeight: 'bold', fontSize: '1.5em', color: 'black', mx: 2, display: 'flex', alignItems: 'center', paddingTop: '5px' }}
              href={route('dashboard.worldtour')}
            >
              <PublicIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              WORLD TOUR
            </Button>
            <Button
              sx={{ fontWeight: 'bold', fontSize: '1.5em', color: 'black', mx: 2, display: 'flex', alignItems: 'center', paddingTop: '5px' }}
              href="/manage"
            >
              <FlightIcon style={{ fontSize: '1.5rem', marginRight: '8px' }} />
              MANAGE YOUR FLIGHTS

            {/*merge si cu div */}
            </Button>
              <Button
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.5em',
                  color: 'black',
                  mx: 2,
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '5px',
                }}
                onClick={(event) => setanchorEl(event.currentTarget)} 
              >
                <Avatar
                  alt="Account"
                  src="/Images/login-avatar.jpg"
                  sx={{ width: 50, height: 50, ml: 2 }}
                />
              </Button>
              {/* Dropdown Menu */}
              <Menu
                anchorEl={ anchorEl } 
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

      {/* Background Image Section */}
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
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '26%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '20%',
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            height: '65%',
            paddingBottom: '16px'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' ,mb: 2 , mt: 4}}>
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
            <Typography variant="h6" sx={{ fontWeight: 'bold' , ml : 5 , mr : 5 , fontSize:'1.25rem' }}>
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

        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '46%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '15%',
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' ,mb:4 }}>
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

        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '6%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '15%',
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <Button
            fullWidth
            variant="contained"
            startIcon={<FlightTakeoffIcon />}
            onClick={handleFlightStatusClick}
            sx={{
              backgroundColor: '#0077B6',
              color: 'white',
              '&:hover': { backgroundColor: '#005f8a' },
              textTransform: 'none',
              padding: '12px',
              height: '70%'
            }}
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

      {/* Why Choose UTW Airlines Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6, px: 4 }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Why Choose UTW Airlines?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={5} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <EventSeatIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Comfortable Seating
                </Typography>
                <Typography variant="body1">
                  Enjoy the most comfortable seats in the sky.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <ShieldIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Top Safety Standards
                </Typography>
                <Typography variant="body1">
                  Your safety is our top priority.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5} sm={6} md={3}> {/*item spans 6 columns and covers 3 columns ,un fel de impartire*/ }
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <HeadsetMicIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  24/7 Customer Support
                </Typography>
                <Typography variant="body1">
                  We're here to help you anytime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={5} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <VerifiedUserIcon style={{ fontSize: '3rem', color: '#0077B6' }} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
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

