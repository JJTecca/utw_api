/*************************************************
 * @format Experience Menu (The new one)
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
 * 10. This shall be the ONLY layout screen we have, as we need further improvements
 * 11. This file is #1 prior and needs the most frontend attention
 ****************************************************************************************************/
{/**************************************************************************************************
              File Structure Convention:
        1. Imports
        2. React Hooks (useState, useEffect, etc.)
        3. Type Definitions (Interfaces/Types)
        4. Static/Constant Data
        5. Helper/Utility Functions
        6. Component Return Statement
        7. Export the main function / import the layout </div>
    **************************************************************************************************/}
import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Fade,
  DialogActions,
  Tabs,
  Tab,
} from '@mui/material';
import {
  ArrowRightOutlined,
  HomeOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { VerifiedUser, Menu as MenuIcon} from '@mui/icons-material';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ShieldIcon from '@mui/icons-material/Shield';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DiamondIcon from '@mui/icons-material/Diamond';
import BusinessIcon from '@mui/icons-material/Business';
import EconomyIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import firstClassExperience from '../../../../public/Images/experience-first-class.png';
import businessClassExperience from '../../../../public/Images/experience-business-class.jpg';
import economyClassExperience from '../../../../public/Images/experience-economy-class.jpg';
import { Star } from '@mui/icons-material';

const navItems = [ 
  { label: 'About', icon: <InfoCircleOutlined />, path: '/about' } 
];

const FlightExperienceApp: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const classesData = [
    {
      title: 'First Class',
      description: 'Experience unparalleled luxury in our First Class cabins. Enjoy fully-enclosed private suites with sliding doors, personalized mood lighting, and fine dining prepared by world-class chefs. Each suite features a lie-flat bed, 24" entertainment screen, and direct aisle access.',
      features: [
        'Private Suite with sliding doors',
        'Gourmet à la carte dining',
        '24" 4K entertainment screen',
        'Priority check-in & boarding',
        'Exclusive lounge access'
      ],
      buttonText: 'Discover First Class',
      image: firstClassExperience,
      priceRange: '$5,000 - $15,000+'
    },
    {
      title: 'Business Class',
      description: 'Work or relax in premium comfort with our Business Class experience. Featuring fully lie-flat seats with massage function, premium amenity kits, and curated international cuisine. Access our exclusive A380 Onboard Lounge for networking and relaxation.',
      features: [
        'Fully lie-flat seat (78" bed)',
        'Direct aisle access',
        'Onboard lounge access',
        'Premium amenity kit',
        'Noise-canceling headphones'
      ],
      buttonText: 'Explore Business Class',
      image: businessClassExperience,
      priceRange: '$2,000 - $6,000'
    },
    {
      title: 'Economy Class',
      description: 'Travel comfortably with our enhanced Economy Class. Enjoy extra legroom, adjustable headrests, and complimentary meals and beverages. Stay connected with in-seat power outlets and enjoy hundreds of entertainment options on your personal screen.',
      features: [
        'Extra legroom (32" seat pitch)',
        'Adjustable headrest & footrest',
        'Complimentary meals & drinks',
        'Personal entertainment screen',
        'In-seat power & USB ports'
      ],
      buttonText: 'View Economy Class',
      image: economyClassExperience,
      priceRange: '$300 - $1,200'
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAboutClick = () => {
    setAboutDialogOpen(true);
  };

  const handleAboutClose = () => {
    setAboutDialogOpen(false);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: '#0f172a', height: '100%', color: 'white' }}>
      <Toolbar sx={{ justifyContent: 'center', py: 3 }}>
        <FlightTakeoffIcon style={{ fontSize: '2rem', marginRight: 8, color: '#a7e90e' }} />
        <Typography variant="h6" fontWeight="bold" color="white">
          UTW Airlines
        </Typography>
      </Toolbar>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label} 
            disablePadding
            sx={{ 
              color: 'white',
              py: 2,
              '&:hover': { backgroundColor: '#1e293b' }
            }}
          >
            <Box sx={{ mr: 2, color: '#a7e90e' }}>{item.icon}</Box>
            <ListItemText 
              primary={item.label} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  {/*******************************************
        About Dialog Component -> Pop-Up 
    ********************************************/}
  const aboutDialog = (
    <Dialog
      open={aboutDialogOpen}
      onClose={handleAboutClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '12px',
          overflow: 'hidden',
          maxHeight: '80vh'
        }
      }}
    >
      <DialogTitle sx={{ 
        backgroundColor: '#0f172a', 
        color: '#a7e90e',
        borderBottom: '1px solid #334155',
        fontWeight: 'bold',
        fontSize: '1.5rem'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <InfoCircleOutlined />
          About Our Premium Flight Experiences
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ padding: 0 }}>
        <Box sx={{ borderBottom: 1, borderColor: '#334155' }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                color: '#94a3b8',
                '&.Mui-selected': {
                  color: '#a7e90e',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#a7e90e',
              }
            }}
          >
            {/* Enum on the classes */}
            <Tab 
              icon={<DiamondIcon />} 
              label="First Class" 
              iconPosition="start"
            />
            <Tab 
              icon={<BusinessIcon />} 
              label="Business Class" 
              iconPosition="start"
            />
            <Tab 
              icon={<EconomyIcon />} 
              label="Economy Class" 
              iconPosition="start"
            />
          </Tabs>
        </Box>
        
        {/****************************************
         *          FEATURE SELECTION 
         *  1. selectedTab === 0 -> First Class
         *  2. selectedTab === 1 -> Business Class
         *  3. selectedTab === 2 -> Economy Class
         **************************************/}
        <Box sx={{ padding: 3 }}>
          {selectedTab === 0 && (
            <Fade in={selectedTab === 0} timeout={300}>
              <Box>
                <Typography variant="h5" gutterBottom sx={{ color: '#a7e90e', fontWeight: 'bold' }}>
                  First Class Excellence
                </Typography>
                
                <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                  Exclusive Features:
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { title: "Private Suites", desc: "Fully enclosed suites with sliding doors for ultimate privacy" },
                    { title: "Gourmet Dining", desc: "Meals prepared by Michelin-starred chefs with premium wines" },
                    { title: "Entertainment", desc: "32\" 4K touchscreen displays with noise-canceling headphones" },
                    { title: "Lounge Access", desc: "Exclusive access to private airport lounges worldwide" },
                    { title: "Concierge Service", desc: "Personal travel concierge available 24/7" },
                    { title: "Luxury Amenities", desc: "Premium skincare products, pajamas, and memory foam bedding" }
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card sx={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                        border: '1px solid #334155',
                        '&:hover': { borderColor: '#a7e90e' }
                      }}>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ color: '#a7e90e', fontWeight: 'bold', mb: 1 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {item.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          )}
          
          {selectedTab === 1 && (
            <Fade in={selectedTab === 1} timeout={300}>
              <Box>
                <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                  Business Features:
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { title: "Lie-Flat Seats", desc: "180-degree fully flat beds with massage function" },
                    { title: "Onboard Lounge", desc: "Exclusive lounge area for networking and relaxation" },
                    { title: "Work Station", desc: "Adjustable work table with power outlets and USB ports" },
                    { title: "WiFi Connectivity", desc: "High-speed internet available throughout the flight" },
                    { title: "Priority Services", desc: "Fast track security, priority boarding and baggage" },
                    { title: "Business Amenities", desc: "Noise-canceling headphones and premium amenity kits" }
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card sx={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                        border: '1px solid #334155',
                        '&:hover': { borderColor: '#a7e90e' }
                      }}>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ color: '#a7e90e', fontWeight: 'bold', mb: 1 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {item.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          )}
          
          {selectedTab === 2 && (
            <Fade in={selectedTab === 2} timeout={300}>
              <Box>
                <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                  Economy Features:
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { title: "Extra Legroom", desc: "Generous 32-inch seat pitch for comfortable travel" },
                    { title: "Entertainment", desc: "Personal 10\" HD screen with hundreds of movies and shows" },
                    { title: "Complimentary Meals", desc: "Freshly prepared meals with beverage service" },
                    { title: "Power Access", desc: "In-seat power outlets and USB charging ports" },
                    { title: "Adjustable Comfort", desc: "Adjustable headrests and footrests for better posture" },
                    { title: "WiFi Access", desc: "Affordable WiFi packages for staying connected" }
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card sx={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                        border: '1px solid #334155',
                        '&:hover': { borderColor: '#a7e90e' }
                      }}>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ color: '#a7e90e', fontWeight: 'bold', mb: 1 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {item.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          )}
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ 
        padding: 3, 
        borderTop: '1px solid #334155',
        backgroundColor: '#0f172a'
      }}>
        <Button 
          onClick={handleAboutClose}
          sx={{ 
            color: '#94a3b8',
            '&:hover': { color: '#a7e90e' }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white'
    }}>
      {/*******************************************
       *            HEADER NAVIGATION
       *  Structure:
       *  1. AppBar + Toolbar for primary navigation
       *  2. Logo section (left-aligned)
       *  3. Mobile menu toggle (hidden on desktop)
       *  4. Desktop navigation items (hidden on mobile)
       *  
       *  Features:
       *  - Responsive design (mobile/desktop breakpoints)
       *  - Gradient background with accent border
       *  - Active state styling for navigation items
       *  - Hover effects with brand colors
       * **************************************** */}
      <AppBar position="sticky" sx={{ 
        backgroundColor: '#0f172a', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderBottom: '1px solid #334155'
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: '#a7e90e' }}
          >
            <MenuIcon />
          </IconButton>
          
          <FlightTakeoffIcon style={{ fontSize: '1.8rem', marginRight: 12, color: '#a7e90e' }} />
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white' }}>
            UTW Airlines
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Button 
                key={item.label} 
                color="inherit" 
                startIcon={item.icon}
                onClick={handleAboutClick}
                sx={{ 
                  fontWeight: item.label === 'Experience' ? 'bold' : 'normal',
                  borderBottom: item.label === 'Experience' ? '2px solid #a7e90e' : 'none',
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(167, 233, 14, 0.1)',
                    color: '#a7e90e'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          
          <Button 
            variant="contained" 
            sx={{ 
              ml: 2, 
              backgroundColor: '#a7e90e', 
              color: '#0f172a',
              fontWeight: 'bold',
              '&:hover': { 
                backgroundColor: '#94c11e',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(167, 233, 14, 0.3)'
              }
            }}
          >
            Book Now
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ 
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: '#0f172a',
            borderRight: '1px solid #334155'
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Breadcrumb Navigation */}
      <Container maxWidth="lg" sx={{ mt: 3, mb: 2 }}>
        <Breadcrumbs 
          aria-label="breadcrumb"
          sx={{ color: '#94a3b8' }}
        >
          <Link 
            color="inherit" 
            href="/" 
            underline="hover"
            sx={{ 
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: '#a7e90e' }
            }}
          >
            <HomeOutlined style={{ marginRight: 4 }} />
            Home
          </Link>
          <Typography sx={{ color: '#a7e90e', display: 'flex', alignItems: 'center' }}>
            <Star style={{ marginRight: 4, color: '#a7e90e' }} />
            Flight Experience
          </Typography>
        </Breadcrumbs>
      </Container>

       {/*************************************************
       *            MAIN CONTENT
       *  
       *  IMPLEMENTATION DETAILS:
       *  - Uses Material-UI Container for max-width constraints
       *  - Flexbox layout with column direction for vertical stacking
       *  - Dynamic card generation via classesData.map()
       *  - Each card contains:
       *      - Responsive CardMedia (image section)
       *      - CardContent with:
       *        - Title and price badge (flex row layout)
       *        - Description paragraph
       *        - Features grid (2-column on desktop)
       *        - Footer with CTA button and disclaimer
       *  
       *  STATE MANAGEMENT:
       *  - No local state in this section
       *  - Pure presentation based on classesData constant
       *  
       * *************************************************/}
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
            sx={{ 
              color: 'white',
              mb: 2,
              background: 'linear-gradient(45deg, #a7e90e 30%, #94c11e 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Elevate Your Journey
          </Typography>
          <Typography variant="h5" sx={{ 
            maxWidth: 800, 
            mx: 'auto', 
            mb: 4, 
            color: '#cbd5e1',
            fontWeight: 300 
          }}>
            Discover our premium cabin experiences designed for comfort, luxury, and exceptional service
          </Typography>
          
          {/* Quick Stats */}
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item>
              <Box sx={{ 
                p: 2, 
                backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                borderRadius: 2,
                border: '1px solid #334155',
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="h6" sx={{ color: '#a7e90e' }}>180+</Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>Destinations</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ 
                p: 2, 
                backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                borderRadius: 2,
                border: '1px solid #334155',
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="h6" sx={{ color: '#a7e90e' }}>★ 4.8</Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>Customer Rating</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ 
                p: 2, 
                backgroundColor: 'rgba(30, 41, 59, 0.7)', 
                borderRadius: 2,
                border: '1px solid #334155',
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="h6" sx={{ color: '#a7e90e' }}>500+</Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>Daily Flights</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Flight Classes*/}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {classesData.map((classInfo, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                borderRadius: 3,
                overflow: 'hidden',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 40px rgba(167, 233, 14, 0.2)',
                  transform: 'translateY(-4px)',
                  borderColor: '#a7e90e'
                }
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: '100%', md: '40%' },
                  height: { xs: 240, md: 'auto' },
                  objectFit: 'cover'
                }}
                image={classInfo.image}
                alt={classInfo.title}
              />
              
              <CardContent sx={{ 
                p: 4, 
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    sx={{ color: 'white' }}
                  >
                    {classInfo.title}
                  </Typography>
                  <Box sx={{ 
                    backgroundColor: '#a7e90e', 
                    color: '#0f172a', 
                    px: 2, 
                    py: 0.5, 
                    borderRadius: 2,
                    fontWeight: 'bold'
                  }}>
                    <Typography variant="body2" fontWeight="bold">
                      {classInfo.priceRange}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" paragraph sx={{ 
                  mb: 3, 
                  color: '#cbd5e1',
                  lineHeight: 1.7
                }}>
                  {classInfo.description}
                </Typography>
                
                {/* Features List */}
                <Grid container spacing={1} sx={{ mb: 3 }}>
                  {classInfo.features.map((feature, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          backgroundColor: '#a7e90e', 
                          borderRadius: '50%',
                          mr: 1.5 
                        }} />
                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowRightOutlined />}
                    size="large"
                    sx={{
                      backgroundColor: '#a7e90e',
                      color: '#0f172a',
                      borderRadius: 2,
                      px: 4,
                      py: 1,
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#94c11e',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(167, 233, 14, 0.3)'
                      }
                    }}
                  >
                    {classInfo.buttonText}
                  </Button>
                  
                  <Typography variant="caption" sx={{ color: '#64748b' }}>
                    *All prices are approximate and vary by route
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Additional Information Section */}
        <Box sx={{ 
          mt: 8, 
          p: 4, 
          backgroundColor: 'rgba(30, 41, 59, 0.7)', 
          borderRadius: 3,
          border: '1px solid #334155',
          backdropFilter: 'blur(10px)'
        }}>
          
          {/* Classic footer */}
          <Box sx={{ mt: 4 }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }}}>
                <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ color: 'white', mb: 4, marginLeft:'10%' }}>
                    Why Choose UTW Airlines?
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: '#a7e90e', mb: 3, marginLeft:'10%' }}>
                    Premium Aviation Features
                </Typography>
            </Box>
            <Grid container spacing={3}>
              {[
                { 
                  icon: <EventSeatIcon sx={{ fontSize: 30, color: '#a7e90e' }} />, 
                  title: "Premium Comfort", 
                  description: "Experience unparalleled comfort with our spacious seating and premium amenities." 
                },
                { 
                  icon: <ShieldIcon sx={{ fontSize: 30, color: '#a7e90e' }} />, 
                  title: "Top Safety", 
                  description: "Your safety is our priority with the highest international safety standards." 
                },
                { 
                  icon: <HeadsetMicIcon sx={{ fontSize: 30, color: '#a7e90e' }} />, 
                  title: "24/7 Support", 
                  description: "Round-the-clock customer service to assist you throughout your journey." 
                },
                { 
                  icon: <VerifiedUser sx={{ fontSize: 30, color: '#a7e90e' }} />, 
                  title: "Privacy First", 
                  description: "We protect your data with enterprise-grade security and privacy measures." 
                },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{
                    backgroundColor: '#1e293b',
                    borderRadius: '12px',
                    border: '1px solid #334155',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(167, 233, 14, 0.2)',
                      borderColor: '#a7e90e',
                    }
                  }}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingTop: 3,
                      paddingBottom: 2,
                    }}>
                      <Box sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(167, 233, 14, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(167, 233, 14, 0.2)',
                      }}>
                        {feature.icon}
                      </Box>
                    </Box>
                    <CardContent sx={{
                      flexGrow: 1,
                      padding: 3,
                      paddingTop: 0,
                      textAlign: 'center',
                    }}>
                      <Typography variant="h6" component="div" sx={{
                        fontWeight: 'bold',
                        color: '#f1f5f9',
                        marginBottom: 1,
                        fontSize: '1.1rem',
                      }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                      }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Render Dialogs */}
      {aboutDialog}
    </Box>
  );
};

export default FlightExperienceApp;