/*************************************************
 * @format Profile Menu (The new one)
 * @author Maior Cristian, Niculescu Cristian
 * @description The main profile management layout for the aviation app
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
  ***************************************************************************************************/}
import { PropsWithChildren, ReactNode } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  CssBaseline,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  Grow,
  CircularProgress,
} from '@mui/material';
import {
  AccountBalanceWallet,
  Analytics,
  Assignment,
  Facebook,
  Flight,
  Help,
  Menu as MenuIcon,
  Share,
  VerifiedUser,
} from '@mui/icons-material';
import GppBadOutlinedIcon from '@mui/icons-material/GppBadOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { InstagramOutlined, TikTokOutlined } from '@ant-design/icons';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ShieldIcon from '@mui/icons-material/Shield';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { useState } from 'react';
import { styles } from './ProfileManagement.styles';
import { UploadButton } from '@/Components/UploadButton';

interface ProfileItemProps {
  icon: ReactNode;
  label: string;
  value?: string;
  children?: ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}

const handleSelectedFiles = async(files:File[]) => {
	const formData = new FormData();
	files.forEach((file) => formData.append('files', file));
	
	const response = await fetch('<URL HERE>', {method: 'POST',body: formData}); //Backend URL to handle uploads

  if (!response.ok) {
    console.log(`Upload failed: ${response.status}`);
  }

  return response.json();
	
};


function ProfileItem({ icon, label, value, children, clickable = false, onClick }: ProfileItemProps) {
  const isVerified = value === 'verified';
  
  return (
    <Box 
      sx={{
        ...styles.profileItemContainer,
        cursor: clickable ? 'pointer' : 'default',
        '&:hover': clickable ? {
          backgroundColor: 'rgba(14, 165, 233, 0.1)',
          borderRadius: '8px',
          padding: '8px',
          marginLeft: '-8px',
          marginRight: '-8px',
        } : {},
      }}
      onClick={clickable ? onClick : undefined}
    >
      <Box sx={{
        ...styles.profileItemIcon,
        color: isVerified ? '#10b981' : styles.profileItemIcon.color,
      }}>
        {icon}
      </Box>
      <Box sx={styles.profileItemContent}>
        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
          {label}
        </Typography>
        {value ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1" sx={{ 
              fontWeight: '500', 
              color: isVerified ? '#10b981' : '#f1f5f9' 
            }}>
              {value}
            </Typography>
            {clickable && !isVerified && (
              <Typography variant="caption" sx={styles.verifyBtnText}>
                Click to verify
              </Typography>
            )}
            {isVerified && (
              <Typography variant="caption" sx={styles.isVerifiedBtnText}>
                ✓ Verified
              </Typography>
            )}
          </Box>
        ) : null}
        {children}
      </Box>
    </Box>
  );
}

function FundsProgressCircle() {
  const availableFunds = 1800; // €
  const insufficientFunds = 2500; // Target or required funds
  
  const percentage = Math.min(Math.round((availableFunds / insufficientFunds) * 100), 100);
  const remaining = insufficientFunds - availableFunds;
  
  return (
    <Box sx={styles.mainContainer}>
      {/* Circular Progress */}
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress 
          variant="determinate" 
          value={percentage}
          size={120}
          thickness={6}
          sx={{
            color: percentage >= 75 ? '#10b981' : 
                   percentage >= 50 ? '#0ea5e9' : 
                   percentage >= 25 ? '#f59e0b' : 
                   '#ef4444',
          }}
        />
        <Box sx={styles.percentageBox}>
          <Typography
            variant="h5"
            component="div"
            sx={{ 
              fontWeight: 'bold',
              color: '#f1f5f9',
            }}
          >
            {percentage}%
          </Typography>
        </Box>
      </Box>
      
      {/* Status Text */}
      <Typography variant="body1" sx={styles.statusText}>
        {percentage >= 100 ? 'Fully Funded! ✈️' : 'Flight Fund Progress'}
      </Typography>
      
      {/* Breakdown */}
      <Box sx={styles.breakdownBox}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            Available:
          </Typography>
          <Typography variant="body2" sx={{ color: '#10b981', fontWeight: '500' }}>
            {availableFunds.toLocaleString()} €
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            Required:
          </Typography>
          <Typography variant="body2" sx={{ color: '#f1f5f9', fontWeight: '500' }}>
            {insufficientFunds.toLocaleString()} €
          </Typography>
        </Box>
        
        {remaining > 0 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            paddingTop: 1,
            borderTop: '1px solid #334155'
          }}>
            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
              Needed:
            </Typography>
            <Typography variant="body2" sx={{ 
              color: remaining > 500 ? '#ef4444' : '#f59e0b', 
              fontWeight: '500' 
            }}>
              {remaining.toLocaleString()} €
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

interface FundCardProps {
  title: string;
  amount: string;
  color?: 'primary' | 'secondary';
}

function FundCard({ title, amount, color = 'primary' }: FundCardProps) {
  const gradient = color === 'primary' 
    ? 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)'
    : 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)';
  
  return (
    <Paper sx={{
      padding: 2,
      background: gradient,
      color: 'white',
      borderRadius: 8,
      border: 'none',
    }}>
      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {amount}
      </Typography>
    </Paper>
  );
}

function ProfileManLayoutContent({ children }: PropsWithChildren) {
    const isMobile = useMediaQuery('(max-width: 899px)');
    const [verificationOpen, setVerificationOpen] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState("unverified");
    const [showSuccess, setShowSuccess] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleVerification = () => {
        setVerificationOpen(true);
    };

    const handleVerifySubmit = () => {
    // Show loading/pending state
    setVerificationStatus('pending');
    
    setTimeout(() => {
            setVerificationStatus('verified');
            setShowSuccess(true);
            
            // Close dialog after 1.5 seconds
            setTimeout(() => {
            setVerificationOpen(false);
            setVerificationStatus('verified'); // Keep it as verified after closing
            }, 1500);
        }, 2000);
    };

    const handleCloseVerification = () => {
        setVerificationOpen(false);
        // Don't reset verification status if it's already verified
        if (verificationStatus !== 'verified') {
            setVerificationStatus('unverified');
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigationItems = [
        { text: 'MY FLIGHTS', icon: <Analytics /> },
        { text: 'WALLET', icon: <AccountBalanceWallet /> },
        { text: 'HELP', icon: <Help /> },
    ];

    const detailItems = [
        { 
            label: 'Account verification', 
            value: verificationStatus === 'verified' ? 'verified' : 'unverified', 
            icon: verificationStatus === 'verified' ? <CheckCircleOutlinedIcon /> : <GppBadOutlinedIcon />,
            clickable: verificationStatus !== 'verified',
            onClick: verificationStatus !== 'verified' ? handleVerification : undefined,
        },
        { 
            label: 'Referral program', 
            value: 'active', 
            icon: <Share />,
            clickable: false,
        },
    ];
    const fundItems = [
        { title: 'Available funds', amount: '1.800,00 €' },
        { title: 'Invested funds', amount: '2.100,30 €' },
    ];

    const actionItems = [
        { text: 'Add funds', icon: <AccountBalanceWallet /> },
        { text: 'Create Additionals', icon: <Assignment /> },
    ];

    const settingItems = [
        { text: 'Support requests', icon: <Help /> },
        { text: 'Referral program', icon: <Share /> },
        { text: 'Flight documents', icon: <Assignment /> },
    ];

    const drawer = (
        <Box sx={styles.sidebarContainer}>
        <Box sx={styles.sidebarHeader}>
            <Typography variant="h4" sx={styles.userName}>
                Maior Cristian
            </Typography>
            <Chip
                label="AVIATION PRO"
                size="small"
                sx={styles.userChip}
            />
        </Box>

      <List sx={styles.navList}>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={styles.navListItem}>
            <ListItemButton sx={styles.navListItemButton}>
              <ListItemIcon sx={styles.navListItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ 
                  fontWeight: '500',
                  color: '#f1f5f9'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={styles.detailsContainer}>
        <Typography variant="subtitle2" sx={styles.detailsTitle}>
          DETAILS
        </Typography>
        {detailItems.map((item) => (
          <ProfileItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={item.value}
            clickable={item.clickable}
            onClick={item.onClick}
          />
        ))}
        <Typography variant="body2" sx={styles.accountId}>
          Account ID: <span style={{ color: '#f1f5f9' }}>737579</span>
        </Typography>
      </Box>
    </Box>
  );

  const verificationDialog = (
    <Dialog
      open={verificationOpen}
      onClose={handleCloseVerification}
      maxWidth="xs"
      fullWidth
      TransitionComponent={Grow}
      transitionDuration={300}
      PaperProps={styles.verificationDialog}
    >
      <DialogTitle sx={styles.dialogTitle}>
        Verify Your Account
      </DialogTitle>
      
      <DialogContent sx={{ paddingTop: 3 }}>
        <Box sx={{ textAlign: 'center', padding: 2 }}>
          {verificationStatus === 'pending' ? (
            <Fade in={verificationStatus === 'pending'} timeout={500}>
              <Box>
                <CircularProgress size={60} sx={{ color: '#0ea5e9', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#1662afff', mb: 1 }}>
                  Verifying...
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Please wait while we verify your account
                </Typography>
              </Box>
            </Fade>
          ) : verificationStatus === 'verified' ? (
            <Fade in={verificationStatus === 'verified'} timeout={500}>
              <Box>
                <CheckCircleOutlinedIcon sx={{ fontSize: 60, color: '#10b981', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#166dc5ff', mb: 1 }}>
                  Verified! 🎉
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Your account has been successfully verified
                </Typography>
              </Box>
            </Fade>
          ) : (
            <Fade in={verificationStatus === 'unverified'} timeout={500}>
              <Box>
                <Box sx={styles.accountVerifBox}>
                  <VerifiedUser sx={{ fontSize: 40, color: '#0ea5e9' }} />
                </Box>
                <Typography variant="h6" sx={{ color: '#2064a8ff', mb: 2 }}>
                  Account Verification
                </Typography>
                <Typography variant="body2" sx={{ color: '#1d58a9ff', mb: 3 }}>
                  Click the button below to verify your account. 
                  This will update your verification status to "verified".
                </Typography>
                
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleVerifySubmit}
                  sx={styles.verifyAccountBtn}
                >
                  Verify Account
                </Button>
              </Box>
            </Fade>
          )}
        </Box>
      </DialogContent>
      
      {verificationStatus === 'unverified' && (
        <DialogActions sx={{ padding: 3, paddingTop: 0 }}>
          <Button 
            onClick={handleCloseVerification}
            sx={{ color: '#94a3b8' }}
          >
            Cancel
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );

  // Success notification
  const successNotification = (
    <Snackbar
      open={showSuccess}
      autoHideDuration={3000}
      onClose={() => setShowSuccess(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={Fade}
    >
      <Alert 
        onClose={() => setShowSuccess(false)} 
        severity="success"
        sx={{ backgroundColor: '#10b981', color: 'white' }}
        icon={<CheckCircleOutlinedIcon fontSize="inherit" />}
      >
        Account verified successfully!
      </Alert>
    </Snackbar>
  );

  return (
    <Box sx={styles.rootContainer}>
      <CssBaseline />
      
      {/* App Bar for Mobile */}
      {isMobile && (
        <AppBar 
          position="fixed" 
          sx={styles.mobileAppBar}
        >
          <Box sx={styles.mobileAppBarContent}>
            <IconButton
              sx={{ color: 'white', marginRight: 2 }}
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ color: '#cbb615ff' }}>
              Maior Cristian
            </Typography>
          </Box>
        </AppBar>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': styles.drawerPaper,
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          ...styles.mainContent,
          marginTop: isMobile ? '56px' : 0,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Header */}
            <Grid item xs={12}>
              <Box sx={styles.headerContainer}>
                <Typography variant="h5" sx={styles.headerTitle}>
                  ✈️ Aviation Profile Dashboard
                </Typography>
                <Chip
                  icon={<Flight sx={styles.pilotIcon} />}
                  label="Active User"
                  sx={styles.pilotChip}
                  variant="outlined"
                />
              </Box>
            </Grid>

            {/* My active funds */}
            <Grid item xs={12} md={6}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Flight Funds
                  </Typography>
                  <Stack spacing={2}>
                    {fundItems.map((item, index) => (
                      <FundCard
                        key={item.title}
                        title={item.title}
                        amount={item.amount}
                        color={index === 0 ? 'primary' : 'secondary'}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={styles.card}>
                    <FundsProgressCircle />
                </Card>
            </Grid>

            {/* Share to Facebook & Upload documents */}
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Card sx={styles.card}>
                  <CardContent>
                    <Typography variant="h6" sx={styles.cardTitle}>
                      Share Flight Experience
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<Facebook />}
                      fullWidth
                      sx={{ 
                        ...styles.primaryButton,
                        marginBottom: 2 
                      }}
                    >
                      Share on Facebook
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={< InstagramOutlined />}
                      fullWidth
                      sx={{ 
                        ...styles.instagramButton,
                        marginBottom: 2 
                      }}
                    >
                      Share on Instagram
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<TikTokOutlined />}
                      fullWidth
                      sx={{ 
                        ...styles.tiktokButton,
                        marginBottom: 2 
                      }}
                    >
                      Share on TikTok
                    </Button>
                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                      Share your aviation experiences and flight logs
                    </Typography>
                  </CardContent>
                </Card>

                
              </Stack>
            </Grid>

            {/* General settings */}
            <Grid item xs={12} md={6}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Aviation Settings
                  </Typography>
                  <List disablePadding>
                    {settingItems.map((item) => (
                      <ListItem key={item.text} disablePadding sx={{ marginBottom: 0.5 }}>
                        <ListItemButton sx={styles.listItemButton}>
                          <ListItemIcon sx={styles.navListItemIcon}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.text === 'Support requests' 
                              ? 'Flight Support' 
                              : item.text === 'Referral program' 
                              ? 'Pilot Referral'
                              : 'Flight Documents'}
                            primaryTypographyProps={{ color: '#f1f5f9' }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={styles.card}>
                  <CardContent>
                    <Typography variant="h6" sx={styles.cardTitle}>
                      Flight Documents
                    </Typography>
                    <UploadButton
                      label="Upload Documents"
                      allowMultiple
                      onFileSelect={handleSelectedFiles}
                      styles={{...styles.outlinedButton, marginBottom: 1}}
                    />
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      Latest upload: Flight log • Dec 01 2025
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>

            {/* Additional details */}
            <Grid item xs={12} md={6}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography variant="h6" sx={styles.cardTitle}>
                    Flight Management
                  </Typography>
                  <Stack spacing={1}>
                    {actionItems.map((item) => (
                      <Button
                        key={item.text}
                        startIcon={item.icon}
                        variant="outlined"
                        fullWidth
                        sx={{ 
                          ...styles.outlinedButton,
                          justifyContent: 'flex-start',
                        }}
                      >
                        {item.text === 'Add funds' ? 'Book Flight' : 'Create Flight Plan'}
                      </Button>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Main content area for flight data, bookings, etc. */}
            <Grid item xs={12}>
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5" sx={styles.footerTitle}>
                  Premium Aviation Features
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { icon: <EventSeatIcon sx={{ fontSize: 30, color: '#a7e90eff' }} />, title: "Premium Comfort", description: "Experience unparalleled comfort with our spacious seating and premium amenities." },
                    { icon: <ShieldIcon sx={{ fontSize: 30, color: '#a7e90eff' }} />, title: "Top Safety", description: "Your safety is our priority with the highest international safety standards." },
                    { icon: <HeadsetMicIcon sx={{ fontSize: 30, color: '#a7e90eff' }} />, title: "24/7 Support", description: "Round-the-clock customer service to assist you throughout your journey." },
                    { icon: <VerifiedUser sx={{ fontSize: 30, color: '#a7e90eff' }} />, title: "Privacy First", description: "We protect your data with enterprise-grade security and privacy measures." },
                  ].map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card sx={styles.featureCard}>
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: 3,
                          paddingBottom: 2,
                        }}>
                          <Box sx={styles.featureIconBox}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pop Up Items are left here at the beginning as "static" functions*/}
      {verificationDialog}
      {successNotification}
    </Box>
  );
}

// // Main export
export default function ProfileManLayout({ children }: PropsWithChildren) {
  return <ProfileManLayoutContent children={children} />;
}