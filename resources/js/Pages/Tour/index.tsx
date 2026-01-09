/*************************************************
 * @format Tour Screen 
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
 * 1. Displays the user header information fetched with backend data
 * 2. Shows featured destionations for the user to scroll down and get a view, also popular destinations
 * 3. Provides a booking system using his wallet details
 ****************************************************************************************************/
import React, { useState , PropsWithChildren } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Rating,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Alert,
  CircularProgress,
  Avatar,
  Grid,
  Divider,
} from '@mui/material';
import {
  Flight as FlightIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Explore as ExploreIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon,
  EmojiEvents as TrophyIcon,
  CreditCard as CreditCardIcon,
  AccountBalanceWallet as WalletIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { styles } from './Tour.styles';

/**************************************************************************
 *                          INTERFACES
 * 1. User
 * 2. BaseCurrency 
 * 3. Destination
 * 4. TourProps -> used to pass all the data into 1 interface
 **************************************************************************/

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  gender: string;
}

interface BaseCurrency {
  currency: string
}

interface Destination {
  id: number,
  title: string,
  subtitle?: string,
  description: string,
  image: string,
  rating: number,
  reviews: number,
  price: number,
  is_featured: boolean,
  category?: string
}

interface Wallet {
  id: number;
  user_id: number,
  currency: string,
  value: number,
  created_at?: string,
  updated_at?: string
}

interface BookingFormData {
  id: number;
  destination_title: string;
  price: number;
  selected_wallet_id: number | null;
  notes?: string;
}

interface TourProps {
  user : User;
  total_usd : number;
  base_currency : BaseCurrency;
  destinations : Destination[];
  wallets : Wallet[];
}

// Stats data : Hardcoded data
const stats = [
  { number: '50K+', label: 'Happy Travelers', icon: <GroupsIcon /> },
  { number: '150+', label: 'Destinations', icon: <ExploreIcon /> },
  { number: '4.9', label: 'Average Rating', icon: <StarIcon /> },
  { number: '10+', label: 'Awards Won', icon: <TrophyIcon /> },
];

/* Use Instead of Points the wallet money */
const userData = {
    name: 'John Traveler',
    points: 12500,
    status: 'Gold Member',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
};

export default function TravelHomepage({children, user, total_usd, base_currency, destinations, wallets} : PropsWithChildren<TourProps>) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingForm, setBookingForm] = useState<BookingFormData>({
    id: 0,
    destination_title: '',
    price: 0,
    selected_wallet_id: null,
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const handleOpenBookingModal = (destination: Destination) => {
    setSelectedDestination(destination);
    setBookingForm({
      id: destination.id,
      destination_title: destination.title,
      price: destination.price,
      selected_wallet_id: wallets.length > 0 ? wallets[0].id : null,
      notes: ''
    });
    setBookingModalOpen(true);
    setError(null);
    setBookingSuccess(false);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setSelectedDestination(null);
    setBookingForm({
      id: 0,
      destination_title: '',
      price: 0,
      selected_wallet_id: null,
      notes: ''
    });
    setError(null);
    setBookingSuccess(false);
  };

  const handleFormChange = (field: keyof BookingFormData, value: any) => {
    setBookingForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Update the handleBookingSubmit function with these changes:
  const handleBookingSubmit = async () => {
    if (!selectedDestination || !bookingForm.selected_wallet_id) {
      setError('Please select a wallet to proceed with payment.');
      return;
    }

    const selectedWallet = wallets.find(w => w.id === bookingForm.selected_wallet_id);
    if (!selectedWallet) {
      setError('Selected wallet not found.');
      return;
    }

    if (selectedWallet.value < selectedDestination.price) {
      setError(`Insufficient funds in selected wallet. You need $${selectedDestination.price - selectedWallet.value} more.`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // First, process the booking payment
      const bookingPayload = {
        destination_id: selectedDestination.id,
        wallet_id: selectedWallet.id,
        value: selectedDestination.price,
        currency: selectedWallet.currency,
        notes: bookingForm.notes || ''
      };

      console.log('Sending booking payload:', bookingPayload);

      const bookingResponse = await fetch('/dashboard/worldtour/booking-payment', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        body: JSON.stringify(bookingPayload),
        credentials: 'include'
      });

      const bookingData = await bookingResponse.json();

      if (!bookingResponse.ok) {
        throw new Error(bookingData.message || `Booking failed with status: ${bookingResponse.status}`);
      }

      // If booking is successful, create transaction history
      try {
        const csrfMeta = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null;
        
        if (!csrfMeta || !csrfMeta.content) {
          console.warn("CSRF token meta tag missing or empty");
          // Continue with booking success even if transaction history fails
        } else {
          const transactionPayload = {
            user_id: user.id,
            description: `Booking payment for ${selectedDestination.title}`,
            amount: selectedDestination.price,
            status: 'Approved',
            destination_name: selectedDestination.title,
            wallet_currency: selectedWallet.currency
          };

          console.log('Sending transaction payload:', transactionPayload);

          const transactionResponse = await fetch('/dashboard/worldtour/transaction-histories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-CSRF-TOKEN': csrfMeta.content
            },
            body: JSON.stringify(transactionPayload),
            credentials: 'include'
          });

          if (!transactionResponse.ok) {
            console.warn('Transaction history creation failed, but booking was successful');
          } else {
            const transactionData = await transactionResponse.json();
            console.log('Transaction history created:', transactionData);
          }
        }
      } catch (transactionError) {
        console.warn('Error creating transaction history:', transactionError);
      }

      //Booking successful
      setBookingSuccess(true);
      
      setTimeout(() => {
        handleCloseBookingModal();
        window.location.reload();
      }, 2000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Booking failed. Please try again.';
      setError(errorMessage);
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter destinations for featured and popular sections
  const featuredDestinations = destinations.filter(dest => dest.is_featured);
  
  // For popular destinations, you can use a different logic (e.g., based on rating, reviews, or other backend field)
  // For now, let's assume popular destinations are those with rating >= 4.7 and reviews > 1000
  // You might want to adjust this logic based on your actual backend data structure
  const popularDestinations = destinations.filter(dest => 
    dest.rating >= 4.7 && dest.reviews > 1000
  ).slice(0, 10); // Limit to 10 popular destinations

  const DestinationCard = ({ destination, wallet }: { destination: Destination, wallet: Wallet }) => (
    <Card sx={styles.destinationCardStyles}>
      <Box sx={styles.cardImageStyles}>
        <CardMedia
          component="img"
          height="250"
          image={destination.image}
          alt={destination.title}
          sx={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': { transform: 'scale(1.1)' }
          }}
        />
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(255, 255, 255, 0.9)',
            '&:hover': { background: 'white' },
          }}
          onClick={() => toggleFavorite(destination.id)}
        >
          {favorites.includes(destination.id) ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <Chip
          label={destination.category || 'Destination'}
          sx={{
            position: 'absolute',
            bottom: 15,
            left: 15,
            background: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 600,
          }}
        />
      </Box>
      <CardContent sx={styles.cardContentStyles}>
        <Box>
          <Typography sx={styles.cardSubtitleStyles}>
            <LocationIcon fontSize="small" sx={{ marginRight: 0.5 }} />
            {destination.subtitle || 'Beautiful Destination'}
          </Typography>
          <Typography sx={styles.cardTitleStyles}>{destination.title}</Typography>
          <Typography sx={styles.cardDescriptionStyles}>{destination.description}</Typography>
        </Box>
        <Box sx={styles.cardFooterStyles}>
          <Box sx={styles.ratingStyles}>
            <Rating value={destination.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              ({destination.reviews})
            </Typography>
          </Box>
          <Typography sx={styles.priceStyles}>${destination.price}</Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleOpenBookingModal(destination)}
          sx={{
            marginTop: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            }
          }}
        >
          <CreditCardIcon sx={{ mr: 1 }} />
          Book Now
        </Button>
      </CardContent>
    </Card>
  );

  const FeaturedDestinationCard = ({ destination }: { destination: Destination }) => (
    <Card sx={styles.featuredCardStyles}>
      <Box sx={{ height: '300px', position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image={destination.image}
          alt={destination.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            padding: '2rem',
            color: 'white',
          }}
        >
          <Chip
            label="Featured"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 600,
              marginBottom: 1,
            }}
          />
          <Typography variant="h4" fontWeight={700}>
            {destination.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
            {destination.subtitle || 'Exclusive Destination'}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ flex: 1, padding: '2rem' }}>
        <Typography sx={styles.cardDescriptionStyles}>{destination.description}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
          <Box sx={styles.ratingStyles}>
            <Rating value={destination.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {destination.rating}/5 ({destination.reviews} reviews)
            </Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<CreditCardIcon />}
            onClick={() => handleOpenBookingModal(destination)}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
              '&:hover': {
                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
              }
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  // Booking Modal Component
  const BookingModal = () => (
    <Dialog
      open={bookingModalOpen}
      onClose={handleCloseBookingModal}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #1a1f37 0%, #0f1329 100%)',
          color: 'white',
          borderRadius: '24px',
          overflow: 'hidden'
        }
      }}
    >
      {bookingSuccess ? (
        <>
          <DialogTitle sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: '#4ade80', mb: 2 }} />
            <Typography variant="h4" fontWeight={700}>
              Booking Successful!
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.8 }}>
              Your trip to {selectedDestination?.title} has been confirmed.
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <CircularProgress sx={{ color: '#4ade80' }} />
              <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
                Redirecting you back...
              </Typography>
            </Box>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 3 }}>
            <Typography variant="h4" fontWeight={700}>
              <FlightIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
              Book Your Adventure
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.8 }}>
              Complete your booking for {selectedDestination?.title}
            </Typography>
          </DialogTitle>

          <DialogContent sx={{ py: 4 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>
                {error}
              </Alert>
            )}

            {/* Destination Summary */}
            <Card sx={{ 
              background: 'rgba(21, 131, 194, 0.05)', 
              border: '1px solid rgba(25, 211, 133, 0.1)',
              mb: 4,
              borderRadius: '16px'
            }}>
              <CardContent>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Box sx={{ 
                      height: '150px', 
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={selectedDestination?.image} 
                        alt={selectedDestination?.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Typography variant="h5" fontWeight={700} sx={{color:'#30bc0cff' }}>
                      {selectedDestination?.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8, mb: 1, color:'#1dbaccff'  }}>
                      <LocationIcon fontSize="small" sx={{ mr: 0.5, color:'#1dbaccff'  }} />
                      {selectedDestination?.subtitle}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, color:'#1dbaccff' }}>
                      {selectedDestination?.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon sx={{ color: '#fbbf24', mr: 0.5 }} />
                        <Typography variant="body2" sx={{color:'#30bc0cff' }}>
                          {selectedDestination?.rating} ({selectedDestination?.reviews} reviews)
                        </Typography>
                      </Box>
                      <Chip 
                        label={selectedDestination?.category} 
                        size="small"
                        sx={{ background: 'rgba(102, 126, 234, 0.2)', color: '#667eea' }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Price Display */}
            <Box sx={{ 
              background: 'rgba(102, 126, 234, 0.1)', 
              borderRadius: '16px',
              p: 3,
              mb: 4,
              border: '1px solid rgba(102, 126, 234, 0.3)'
            }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Payment Details
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    Trip Price
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    All taxes and fees included
                  </Typography>
                </Box>
                <Typography variant="h3" fontWeight={700} color="#667eea">
                  ${selectedDestination?.price}
                </Typography>
              </Box>
            </Box>

            {/* Wallet Selection */}
            <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
              <WalletIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Select Payment Wallet
            </Typography>
            
            {wallets.length === 0 ? (
              <Alert severity="warning" sx={{ mb: 3, borderRadius: '12px' }}>
                No wallets available. Please add funds to your wallet first.
              </Alert>
            ) : (
              <FormControl fullWidth sx={{ mb: 4 }}>
                <RadioGroup
                  value={bookingForm.selected_wallet_id}
                  onChange={(e) => handleFormChange('selected_wallet_id', parseInt(e.target.value))}
                >
                  {wallets.map((wallet) => (
                    <Card 
                      key={wallet.id}
                      sx={{ 
                        mb: 2,
                        background: bookingForm.selected_wallet_id === wallet.id 
                          ? 'rgba(102, 126, 234, 0.2)' 
                          : 'rgba(255,255,255,0.05)',
                        border: bookingForm.selected_wallet_id === wallet.id 
                          ? '2px solid #667eea' 
                          : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.08)',
                          borderColor: 'rgba(102, 126, 234, 0.5)'
                        }
                      }}
                      onClick={() => handleFormChange('selected_wallet_id', wallet.id)}
                    >
                      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Radio 
                            value={wallet.id} 
                            checked={bookingForm.selected_wallet_id === wallet.id}
                            sx={{ mr: 2 }}
                          />
                          <Box>
                            <Typography variant="body1" fontWeight={600}>
                              {wallet.currency} Wallet
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                              Available: {wallet.value.toLocaleString()} {wallet.currency}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="h6" fontWeight={700}>
                            {wallet.value.toLocaleString()} {wallet.currency}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: wallet.value >= (selectedDestination?.price || 0) 
                                ? '#4ade80' 
                                : '#ef4444',
                              fontWeight: 600
                            }}
                          >
                            {wallet.value >= (selectedDestination?.price || 0) 
                              ? 'Sufficient funds' 
                              : `Need ${(selectedDestination?.price || 0) - wallet.value} more`}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </RadioGroup>
              </FormControl>
            )}

            {/* Additional Notes */}
            <TextField
              fullWidth
              label="Special Requests or Notes (Optional)"
              multiline
              rows={3}
              value={bookingForm.notes}
              onChange={(e) => handleFormChange('notes', e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(102, 126, 234, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#667eea',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255,255,255,0.7)',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                }
              }}
            />

            {/* Terms and Conditions */}
            <Box sx={{ 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px',
              p: 2,
              mb: 3
            }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                By proceeding with this booking, you agree to our Terms & Conditions and Privacy Policy. 
                Your payment will be securely processed through your selected wallet.
              </Typography>
            </Box>
          </DialogContent>

          <DialogActions sx={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            py: 3,
            px: 4
          }}>
            <Button
              onClick={handleCloseBookingModal}
              disabled={loading}
              sx={{
                color: 'rgba(255,255,255,0.8)',
                '&:hover': {
                  color: 'white',
                  background: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleBookingSubmit}
              disabled={loading || !bookingForm.selected_wallet_id || wallets.length === 0}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                px: 4,
                py: 1,
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                },
                '&:disabled': {
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.4)'
                }
              }}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCardIcon sx={{ mr: 1 }} />
                  Process Payment (${selectedDestination?.price})
                </>
              )}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  return (
    <Box sx={styles.containerStyles}>
      <BookingModal />

      {/* Hero Section */}
      <Box sx={styles.heroStyles}>
        <Typography sx={styles.heroTitleStyles}>
          Discover Your Next Adventure With Our Airlines Company
        </Typography>
        <Typography sx={styles.heroSubtitleStyles}>
          What we recommend for your : great journeys with beautiful places
        </Typography>
        <Button sx={styles.ctaButtonStyles}>
          Start Your Journey
          <ArrowForwardIcon />
        </Button>
      </Box>

      <Box sx={{
        maxWidth: '1400px',
        margin: '0 auto 2rem',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 20,
      }}>
      {/* Glassmorphism Card */}
        <Box sx={styles.profileCard}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left Side - User Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                {/* Avatar with Status Indicator */}
                <Box sx={{ position: 'relative' }}>
                <Box sx={styles.avatarBox}>
                    <img 
                    src={userData.avatar} 
                    alt={user.lastName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 20,
                    height: 20,
                    background: '#10b981',
                    borderRadius: '50%',
                    border: '3px solid #1e293b',
                }} />
                </Box>
                
                {/* User Details */}
                <Box>
                <Typography sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    fontSize: '1.4rem',
                    marginBottom: '0.25rem'
                }}>
                    Welcome, {user.lastName}!
                </Typography>
                <Typography sx={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem'
                }}>
                    Ready for your next adventure
                </Typography>
                
                {/* Level Badge */}
                <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1))',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      background: '#fbbf24',
                      borderRadius: '50%',
                    }} />
                    <Typography sx={{ 
                      color: '#fbbf24', 
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.5px'
                      }}>
                    {userData.status}
                    </Typography>
                </Box>
                </Box>
            </Box>
            
            {/* Right Side - Stats & Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {/* Points Display */}
                <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Box sx={styles.moneySpendingBox}>💵</Box>
                    <Typography sx={{ 
                    color: 'white', 
                    fontWeight: 700,
                    fontSize: '1.5rem'
                    }}>
                    {total_usd.toLocaleString()}
                    </Typography>
                </Box>
                <Typography sx={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '0.8rem',
                    marginTop: '0.25rem'
                }}>
                    Wallet Money
                </Typography>
                </Box>
            
                
                {/* Quick Stats */}
                <Box sx={{ display: 'flex', gap: '1.5rem' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ 
                    color: 'white', 
                    fontWeight: 700,
                    fontSize: '1.25rem'
                    }}>
                    {favorites.length}
                    </Typography>
                    <Typography sx={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '0.8rem'
                    }}>
                    Saved
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ 
                    color: 'white', 
                    fontWeight: 700,
                    fontSize: '1.25rem'
                    }}>
                    12
                    </Typography>
                    <Typography sx={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '0.8rem'
                    }}>
                    Trips
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ 
                    color: 'white', 
                    fontWeight: 700,
                    fontSize: '1.25rem'
                    }}>
                    5
                    </Typography>
                    <Typography sx={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '0.8rem'
                    }}>
                    Countries
                    </Typography>
                </Box>
                </Box>
                
                {/* Profile Button */}
                <Button
                  href={route('profile')}
                  variant="contained"
                  startIcon={<FlightIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: '16px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Profile
                </Button>
            </Box>
            </Box>
            
            {/* Progress Bar for Next Level */}
            <Box sx={{ marginTop: '1.5rem' }}>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.5rem' 
            }}>
            </Box>
            
            
          </Box>
        </Box>
        
        {/* Progress Bar for Next Level */}
        <Box sx={{ marginTop: '1.5rem' }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '0.5rem' 
          }}>
            <Typography sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '0.9rem' 
            }}>
              Wallet Spendings
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontWeight: 600,
              fontSize: '0.9rem' 
            }}>
              65%
            </Typography>
          </Box>
          <Box sx={{ 
            height: 6,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            <Box sx={{ 
                height: 6,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '3px',
                overflow: 'hidden',
            }}>
                <Box sx={{ 
                height: '100%',
                width: '65%',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                borderRadius: '3px',
                }} />
            </Box>
        </Box>
      </Box>
    </Box>

      {/* Featured Destinations */}
      <Container maxWidth="lg">
        <Typography sx={styles.sectionTitleStyles}>
          Featured Destinations
        </Typography>
        {featuredDestinations.length > 0 ? (
          <Box sx={styles.featuredGridStyles}>
            {featuredDestinations.map(destination => (
              <FeaturedDestinationCard key={destination.id} destination={destination} />
            ))}
          </Box>
        ) : (
          <Typography sx={{ color: 'white', textAlign: 'center', py: 4 }}>
            No featured destinations available at the moment.
          </Typography>
        )}

        {/* Stats Section */}
        <Box sx={styles.statsSectionStyles}>
          {stats.map((stat, index) => (
            <Box key={index} sx={styles.statItemStyles}>
              <Typography sx={styles.statNumberStyles}>{stat.number}</Typography>
              <Typography sx={styles.statLabelStyles}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Popular Destinations */}
        <Typography sx={styles.sectionTitleStyles}>
          Popular Destinations
        </Typography>
        {popularDestinations.length > 0 ? (
          <Box sx={styles.gridContainerStyles}>
            {popularDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} wallet={wallets[0]}/>
            ))}
          </Box>
        ) : (
          <Typography sx={{ color: 'white', textAlign: 'center', py: 4 }}>
            No popular destinations available at the moment.
          </Typography>
        )}

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', marginTop: '6rem' }}>
          <Typography variant="h3" fontWeight={700} color="white" gutterBottom>
            Ready for Your Next Adventure?
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.9)" sx={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join thousands of satisfied travelers who have discovered the world with us.
          </Typography>
          <Button
            sx={{
              ...styles.ctaButtonStyles,
              fontSize: '1.2rem',
              padding: '1.2rem 3rem',
            }}
          >
            Explore All Destinations
            <ExploreIcon />
          </Button>
        </Box>

      </Container>
    </Box>
  );
}