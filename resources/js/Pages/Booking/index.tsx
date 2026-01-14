/*************************************************
 * @format Booking Screen 
 * @author Maior Cristian
 * ********************************************* */ 
/****************************************************************************************************
 * 1. Dynamically displays available bookings, allowing users to expand each for detailed information.
 * 2. Integrates an interactive promotional section ("Why with UTW?") that cycles through highlight cards.
 * 3. Handles flight booking submissions securely via PATCH requests to the backend API.
 * 4. Right side hero section with slideshow images from dashboard
 * 5. Checkout system with wallet integration and selection
 ****************************************************************************************************/
import BookingLayout from '@/Layouts/BookingLayout';
import { 
  Box, Typography, Rating, Accordion, AccordionSummary, AccordionDetails, 
  Button, CardContent, Card, CardActionArea, CardActions, 
  Grid, Paper, Chip, Select, MenuItem, InputLabel, FormControl,
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, RadioGroup, Radio, FormControlLabel,
  CircularProgress, Alert, Snackbar, Divider,
  Tabs, Tab, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { 
  AccessTime, Luggage, Send as SendIconMui, 
  Close as CloseIcon, AccountBalanceWallet, CreditCard,
  Payment, TrendingUp, EventSeat, Shield, HeadsetMic,
  CheckCircle, Error as ErrorIcon, ArrowDropDown, ArrowDropUp
} from '@mui/icons-material';
import { styles } from './Booking.styles';

interface BookingInterface {
    id: number;
    passenger_count: number;
    destination_city_name: string;
    arrival_city_name: string;
    experience_type: string;
    description: string;
    flight_number?: number;
    booking_date: string;
}

interface Wallet {
    id: number;
    user_id: number;
    currency: string;
    value: number;
    converted_value?: number;
    converted_currency?: string;
    exchange_rate?: number;
}

interface BookingInterfaceProps {
    bookings: BookingInterface[];
    full_price: number;
    user: any;
    wallets: Wallet[];
}

interface CheckoutFormData {
    selectedFlight: BookingInterface | null;
    paymentMethod: 'wallet' | 'bank_transfer';
    wallet_id: number | null;
    selectedWallet: Wallet | null;
    useWalletBalance: boolean;
    walletAmount: number;
    totalAmount: number;
    notes?: string;
}

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

const paymentMethods = [
    { id: 'wallet', label: 'Wallet Balance', icon: <AccountBalanceWallet /> },
    { id: 'bank_transfer', label: 'Bank Transfer', icon: <Payment /> },
];

export default function Booking({ bookings, full_price, user, wallets }: BookingInterfaceProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | false>(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [filteredBookings, setFilteredBookings] = useState<BookingInterface[]>(bookings);
    const [filters, setFilters] = useState({
        nonstop: false,
        checkedBaggage: false,
        hideLowCost: false,
        starAlliance: false,
        skyTeam: false,
        oneworld: false
    });
    const [selectedDeparture, setSelectedDeparture] = useState('');
    const [selectedArrival, setSelectedArrival] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const [showAllWallets, setShowAllWallets] = useState(false);
    
    // Checkout states
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState<BookingInterface | null>(null);
    const [checkoutTab, setCheckoutTab] = useState(0);
    const [checkoutForm, setCheckoutForm] = useState<CheckoutFormData>({
        selectedFlight: null,
        paymentMethod: 'wallet',
        wallet_id: null,
        selectedWallet: null,
        useWalletBalance: true,
        walletAmount: 0,
        totalAmount: 0,
        notes: ''
    });
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);
    const [bookingNotes, setBookingNotes] = useState('');

    // Calculate total wallet balance in USD
    const totalWalletBalanceUSD = wallets.reduce((total, wallet) => {
        return total + (wallet.converted_value || wallet.value);
    }, 0);

    // Find USD wallet if exists
    const usdWallet = wallets.find(w => w.currency === 'USD');

    // Slideshow effect for right side hero section
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Apply filters
        let result = [...bookings];
        
        if (selectedDeparture) {
            result = result.filter(b => b.destination_city_name === selectedDeparture);
        }
        
        if (selectedArrival) {
            result = result.filter(b => b.arrival_city_name === selectedArrival);
        }
        
        if (selectedExperience) {
            result = result.filter(b => b.experience_type === selectedExperience);
        }
        
        if (filters.nonstop) {
            // Assuming nonstop flights are First/Business class
            result = result.filter(b => b.experience_type !== 'Economy Class');
        }
        
        setFilteredBookings(result);
    }, [bookings, filters, selectedDeparture, selectedArrival, selectedExperience]);

    const handleAccordionChange = (index: number) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedIndex(isExpanded ? index : false);
        };

    const getPrice = (experienceType: string): number => {
        if (full_price && full_price > 0) {
            // Adjust price based on experience type
            switch(experienceType) {
                case 'First Class': return Math.round(full_price * 1.5); // 50% more than base
                case 'Business Class': return Math.round(full_price * 1.25); // 25% more than base
                case 'Economy Class': return Math.round(full_price * 0.8); // 20% less than base
                default: return full_price;
            }
        } else {
            // Fallback to mock prices
            switch(experienceType) {
                case 'First Class': return 1500;
                case 'Business Class': return 800;
                case 'Economy Class': return 300;
                default: return 500;
            }
        }
    };

    const getMockDuration = (from: string, to: string): number => {
        const routes: Record<string, number> = {
            'Dubai-Paris': 420,
            'Dubai-London': 420,
            'London-NewYork': 480,
            'Tokyo-Singapore': 360,
            'Sydney-LosAngeles': 840
        };
        const key = `${from}-${to}`.replace(/ /g, '');
        return routes[key] || 300;
    };

    const formatDuration = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const getMockAirline = (experienceType: string): string => {
        switch(experienceType) {
            case 'First Class': return 'UTW Premium Airways';
            case 'Business Class': return 'UTW Business Express';
            case 'Economy Class': return 'UTW Economy Fly';
            default: return 'UTW Airlines';
        }
    };

    const getStarsValue = (experienceTypeString: string): number => {
        switch(experienceTypeString) {
            case 'Economy Class':
                return 2;
            case 'Business Class':
                return 4;
            case 'First Class':
                return 5;
            default:
                return 3;
        }
    };

    const handleBooking = async (booking: BookingInterface) => {
        setSelectedFlight(booking);
        setCheckoutOpen(true);
        
        // Initialize checkout form with flight data
        const flightPrice = getPrice(booking.experience_type);
        
        // Auto-select the best wallet (USD first, then highest balance)
        let defaultWallet = usdWallet || wallets[0];
        if (!defaultWallet && wallets.length > 0) {
            defaultWallet = wallets.reduce((max, wallet) => 
                (wallet.converted_value || wallet.value) > (max.converted_value || max.value) ? wallet : max
            );
        }
        
        setCheckoutForm(prev => ({
            ...prev,
            selectedFlight: booking,
            totalAmount: flightPrice,
            walletAmount: defaultWallet?.value || 0,
            wallet_id: defaultWallet?.id || null,
            selectedWallet: defaultWallet || null,
            paymentMethod: defaultWallet ? 'wallet' : 'bank_transfer'
        }));
    };

    const handleCloseCheckout = () => {
        setCheckoutOpen(false);
        setSelectedFlight(null);
        setProcessingPayment(false);
        setPaymentError(null);
        setBookingNotes('');
        setShowAllWallets(false);
        setCheckoutForm({
            selectedFlight: null,
            paymentMethod: 'wallet',
            wallet_id: null,
            selectedWallet: null,
            useWalletBalance: true,
            walletAmount: 0,
            totalAmount: 0,
            notes: ''
        });
    };

    const handleCheckoutTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCheckoutTab(newValue);
    };

    const handlePaymentMethodChange = (method: 'wallet' | 'bank_transfer') => {
        setCheckoutForm(prev => ({ 
            ...prev, 
            paymentMethod: method,
            // Reset wallet selection if switching away from wallet
            ...(method !== 'wallet' && { wallet_id: null, selectedWallet: null })
        }));
    };

    const handleWalletSelect = (wallet: Wallet) => {
        setCheckoutForm(prev => ({
            ...prev,
            wallet_id: wallet.id,
            selectedWallet: wallet,
            walletAmount: wallet.value
        }));
    };

    const handleFormChange = (field: keyof CheckoutFormData, value: any) => {
        setCheckoutForm(prev => ({ ...prev, [field]: value }));
    };

    // Payment System
    const handleSubmitPayment = async () => {
    if (!selectedFlight) {
        setPaymentError('Please select a flight first');
        return;
    }

    if (checkoutForm.paymentMethod === 'wallet' && !checkoutForm.wallet_id) {
        setPaymentError('Please select a wallet to proceed with payment.');
        return;
    }

    const selectedWallet = checkoutForm.selectedWallet;
    
    if (checkoutForm.paymentMethod === 'wallet' && !selectedWallet) {
        setPaymentError('Selected wallet not found.');
        return;
    }

    const flightPrice = getPrice(selectedFlight.experience_type);
    
    setProcessingPayment(true);
    setPaymentError(null);

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        
        // Initial payment payload
        let payload: any = {
            booking_id: selectedFlight.id,  // Use the stored bookingId
            destination_city_name: selectedFlight.destination_city_name,
            arrival_city_name: selectedFlight.arrival_city_name,
            experience_type: selectedFlight.experience_type,
            price: flightPrice,
            payment_method: checkoutForm.paymentMethod,
            notes: bookingNotes || ''
        };

        if (checkoutForm.paymentMethod === 'wallet' && checkoutForm.wallet_id) {
            payload = {
                ...payload,
                wallet_id: checkoutForm.wallet_id,
                currency: selectedWallet?.currency || 'USD'
            };
        }

        console.log('Sending booking payment payload:', JSON.stringify(payload, null, 2));

        const response = await fetch('/dashboard/view-bookings/payment-process', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(payload),
            credentials: 'include'
        });

        const data = await response.json();
        console.log('Response from server:', data);

        if (!response.ok) {
            throw new Error(data.message || `Payment failed with status: ${response.status}`);
        }

        // If payment is successful, create transaction history
        try {
            if (csrfToken) {
                const transactionPayload = {
                    user_id: user.id,
                    description: `Booking payment for ${selectedFlight.destination_city_name} to ${selectedFlight.arrival_city_name}`,
                    amount: flightPrice,
                    status: 'Approved',
                    destination_name: `${selectedFlight.destination_city_name} → ${selectedFlight.arrival_city_name}`,
                    wallet_currency: selectedWallet?.currency || 'USD',
                    flight_class: selectedFlight.experience_type,
                    booking_id: selectedFlight.id
                };

                const transactionResponse = await fetch('/dashboard/worldtour/transaction-histories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify(transactionPayload),
                    credentials: 'include'
                });
            }
        } catch (transactionError) {
            console.error('Error creating transaction history:', transactionError);
        }

        setPaymentSuccess(true);
        
        setTimeout(() => {
            handleCloseCheckout();
            setPaymentSuccess(false);
            alert(`Successfully booked ${selectedFlight.experience_type} flight from ${selectedFlight.destination_city_name} to ${selectedFlight.arrival_city_name}`);
            window.location.reload();
        }, 2000);

    } catch (error: any) {
        console.error('Payment error:', error);
        setPaymentError(error.message || 'Payment failed. Please try again.');
    } finally {
        setProcessingPayment(false);
    }
};

    

    // Calculate wallet balance
    const totalWalletBalance = wallets.reduce((total, wallet) => total + (wallet.converted_value || wallet.value), 0);
    const selectedWallet = checkoutForm.selectedWallet;
    const walletBalance = selectedWallet?.value || 0;
    const flightPrice = selectedFlight ? getPrice(selectedFlight.experience_type) : 0;
    const walletBalanceUSD = selectedWallet?.converted_value || selectedWallet?.value || 0;
    const remainingBalance = walletBalanceUSD - flightPrice;

    // Sort wallets: USD first, then by converted value
    const sortedWallets = [...wallets].sort((a, b) => {
        if (a.currency === 'USD' && b.currency !== 'USD') return -1;
        if (a.currency !== 'USD' && b.currency === 'USD') return 1;
        return (b.converted_value || b.value) - (a.converted_value || a.value);
    });

    // Display limited or all wallets
    const displayedWallets = showAllWallets ? sortedWallets : sortedWallets.slice(0, 3);

    return (
        <BookingLayout>
            <Grid container spacing={3}>
                {/* Left Panel - Flight Results */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2, mb: 3 }}>
                        {/* Header with search info and sort */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    <CardTravelIcon sx={{ color: 'primary.main', fontSize: '2rem', mr: 2, verticalAlign: 'middle' }} />
                                    Available Flights - Educational Purposes Only, Virtual Money Involved
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {filteredBookings.length} flights found • Last updated: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </Typography>
                            </Box>
                        </Box>

                        {filteredBookings.length === 0 ? (
                            <Box sx={{ textAlign: 'center', py: 4 }}>
                                <Typography variant="h6" color="text.secondary">
                                    No flights found matching your criteria. Try different search options.
                                </Typography>
                            </Box>
                        ) : (
                            <Box>
                                {/* Departure Header */}
                                <Paper sx={{ p: 2, mb: 2, bgcolor: 'primary.light', color: 'white' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Departing from {selectedDeparture || 'Selected Cities'} to {selectedArrival || 'Selected Destinations'}
                                    </Typography>
                                </Paper>

                                {/* Flight Results */}
                                {filteredBookings.map((booking, index) => (
                                    <Paper key={booking.id} sx={{ p: 3, mb: 2, borderRadius: 2, boxShadow: 1 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            {/* Airline Info */}
                                            <Grid item xs={12} md={3}>
                                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                    {getMockAirline(booking.experience_type)}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Flight #{booking.flight_number || `UTW${1000 + booking.id}`}
                                                </Typography>
                                                <Chip 
                                                    label={booking.experience_type}
                                                    size="small"
                                                    color={
                                                        booking.experience_type === 'First Class' ? 'warning' :
                                                        booking.experience_type === 'Business Class' ? 'info' : 'default'
                                                    }
                                                    sx={{ mt: 1 }}
                                                />
                                            </Grid>

                                            {/* Departure */}
                                            <Grid item xs={6} md={2}>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                    20:40
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {booking.destination_city_name}
                                                </Typography>
                                            </Grid>

                                            {/* Duration */}
                                            <Grid item xs={12} md={2}>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {formatDuration(getMockDuration(booking.destination_city_name, booking.arrival_city_name))}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0.5 }}>
                                                        <Box sx={{ width: 20, height: 1, bgcolor: 'grey.300' }} />
                                                        <FlightTakeoffIcon sx={{ fontSize: 16, color: 'grey.500', mx: 1 }} />
                                                        <Box sx={{ width: 20, height: 1, bgcolor: 'grey.300' }} />
                                                    </Box>
                                                    <Typography variant="caption" color="text.secondary">
                                                        Direct
                                                    </Typography>
                                                </Box>
                                            </Grid>

                                            {/* Arrival */}
                                            <Grid item xs={6} md={2}>
                                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                                    05:30
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {booking.arrival_city_name}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    +1 day
                                                </Typography>
                                            </Grid>

                                            {/* Price and Action */}
                                            <Grid item xs={12} md={3}>
                                                <Box sx={{ textAlign: 'right' }}>
                                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                                        ${getPrice(booking.experience_type)}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Round-trip
                                                    </Typography>
                                                    {full_price && full_price > 0 && (
                                                        <Typography variant="caption" component="div" color="text.secondary" sx={{ mt: 0.5 }}>
                                                            Base price: ${full_price}
                                                        </Typography>
                                                    )}
                                                    <Button 
                                                        variant="contained" 
                                                        startIcon={<SendIconMui />} 
                                                        onClick={() => handleBooking(booking)}
                                                        sx={{ mt: 1 }}
                                                        size="small"
                                                    >
                                                        Select
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        {/* Additional Info */}
                                        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                            <Chip 
                                                icon={<Luggage />} 
                                                label="Checked baggage included" 
                                                size="small" 
                                                variant="outlined" 
                                            />
                                            <Chip 
                                                icon={<AccessTime />} 
                                                label="Flexible cancellation" 
                                                size="small" 
                                                variant="outlined" 
                                            />
                                            <Chip 
                                                label={`Booked by ${booking.passenger_count} passengers`} 
                                                size="small" 
                                                variant="outlined" 
                                                color="success"
                                            />
                                        </Box>

                                        {/* Details Accordion */}
                                        <Accordion 
                                            expanded={expandedIndex === index}
                                            onChange={handleAccordionChange(index)}
                                            sx={{ mt: 2, boxShadow: 'none' }}
                                        >
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography variant="body2" color="primary">
                                                    View flight details
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography variant="body1">
                                                    {booking.description}
                                                </Typography>
                                                <Box sx={{ mt: 2 }}>
                                                    <Rating 
                                                        readOnly 
                                                        value={getStarsValue(booking.experience_type)} 
                                                        precision={0.5} 
                                                        sx={{ color: '#1976d2' }} 
                                                    />
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Paper>
                                ))}
                            </Box>
                        )}
                    </Paper>
                </Grid>

                {/* Right Panel - Hero Section with Slideshow and Checkout */}
                <Grid item xs={12} md={5}>
                    {/* Hero Slideshow Box */}
                    <Paper sx={{ 
                        borderRadius: 2, 
                        boxShadow: 2, 
                        overflow: 'hidden',
                        height: '300px',
                        position: 'relative',
                        mb: 3
                    }}>
                        <Box
                            sx={{
                                height: '100%',
                                backgroundImage: `url(${heroImages[currentImage]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative',
                                transition: 'background-image 0.8s ease-in-out'
                            }}
                        >
                            {/* Overlay for better text visibility */}
                            <Box sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                p: 3
                            }}>
                                <Typography variant="h5" sx={{ 
                                    color: 'white', 
                                    fontWeight: 'bold',
                                    mb: 1,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    ✈️ UTW Airlines Experience
                                </Typography>
                                
                                <Typography variant="body2" sx={{ 
                                    color: 'rgba(255,255,255,0.9)',
                                    mb: 3,
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                }}>
                                    Premium travel experiences with world-class service
                                </Typography>

                                {/* Slideshow Navigation Dots */}
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    mb: 2
                                }}>
                                    {heroImages.map((_, index) => (
                                        <Box
                                            key={index}
                                            onClick={() => setCurrentImage(index)}
                                            sx={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                backgroundColor: index === currentImage ? '#ffffff' : 'rgba(255,255,255,0.3)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255,255,255,0.7)'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* Image Counter */}
                            <Box sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: '0.875rem'
                            }}>
                                {currentImage + 1} / {heroImages.length}
                            </Box>
                        </Box>
                    </Paper>

                    {/* Why Choose UTW Section */}
                    <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Why Choose UTW Airlines?
                        </Typography>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                    <EventSeat sx={{ color: 'primary.main', mr: 1.5, fontSize: 20 }} />
                                    <Typography variant="body2">
                                        <strong>Premium Comfort</strong>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                    <Shield sx={{ color: 'primary.main', mr: 1.5, fontSize: 20 }} />
                                    <Typography variant="body2">
                                        <strong>Top Safety</strong>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                    <HeadsetMic sx={{ color: 'primary.main', mr: 1.5, fontSize: 20 }} />
                                    <Typography variant="body2">
                                        <strong>24/7 Support</strong>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <VerifiedUserIcon sx={{ color: 'primary.main', mr: 1.5, fontSize: 20 }} />
                                    <Typography variant="body2">
                                        <strong>Privacy First</strong>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Wallet Summary Card */}
                    <Card sx={{ 
                        borderRadius: 2, 
                        boxShadow: 2,
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        border: '1px solid #334155',
                        marginTop: '5%'
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <AccountBalanceWallet sx={{ 
                                    fontSize: 30, 
                                    color: '#0ea5e9',
                                    mr: 1.5 
                                }} />
                                <Typography variant="h6" sx={{ color: '#f1f5f9', fontWeight: 600 }}>
                                    Your Wallet Balance
                                </Typography>
                                <Button href={route('profile')} sx={{marginLeft:'2%', borderRadius: '8px', background: '#5c9ddfff'}}>
                                    <Typography sx={{ color: '#000000ff', fontWeight: 600 }}>
                                        View My Profile
                                    </Typography>
                                </Button>
                            </Box>
                            
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" sx={{ color: '#94a3b8', mb: 0.5 }}>
                                    Total Available Balance
                                </Typography>
                                <Typography variant="h4" sx={{ color: '#0ea5e9', fontWeight: 700 }}>
                                    ${totalWalletBalanceUSD.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                                    Converted to USD
                                </Typography>
                            </Box>
                            
                            <Divider sx={{ my: 2, borderColor: '#334155' }} />
                            
                            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1.5 }}>
                                Available Wallets ({wallets.length})
                            </Typography>
                            
                            <TableContainer component={Box}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#94a3b8', borderColor: '#334155' }}>Currency</TableCell>
                                            <TableCell align="right" sx={{ color: '#94a3b8', borderColor: '#334155' }}>Balance</TableCell>
                                            <TableCell align="right" sx={{ color: '#94a3b8', borderColor: '#334155' }}>USD Value</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {displayedWallets.map((wallet) => (
                                            <TableRow 
                                                key={wallet.id}
                                                hover
                                                sx={{ 
                                                    cursor: 'pointer',
                                                    backgroundColor: checkoutForm.wallet_id === wallet.id ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(148, 163, 184, 0.1)'
                                                    }
                                                }}
                                                onClick={() => handleWalletSelect(wallet)}
                                            >
                                                <TableCell sx={{ color: '#f1f5f9', borderColor: '#334155' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Chip 
                                                            label={wallet.currency}
                                                            size="small"
                                                            sx={{ 
                                                                backgroundColor: wallet.currency === 'USD' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(148, 163, 184, 0.1)',
                                                                color: wallet.currency === 'USD' ? '#0ea5e9' : '#94a3b8',
                                                                mr: 1
                                                            }}
                                                        />
                                                        {wallet.currency === 'USD' && (
                                                            <Typography variant="caption" sx={{ color: '#10b981' }}>
                                                                Recommended
                                                            </Typography>
                                                        )}
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="right" sx={{ color: '#f1f5f9', borderColor: '#334155' }}>
                                                    {wallet.value.toLocaleString(undefined, { minimumFractionDigits: 2 })} {wallet.currency}
                                                </TableCell>
                                                <TableCell align="right" sx={{ color: '#f1f5f9', borderColor: '#334155' }}>
                                                    ${(wallet.converted_value || wallet.value).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            
                            {wallets.length > 3 && (
                                <Button
                                    fullWidth
                                    onClick={() => setShowAllWallets(!showAllWallets)}
                                    endIcon={showAllWallets ? <ArrowDropUp /> : <ArrowDropDown />}
                                    sx={{ 
                                        mt: 2,
                                        color: '#94a3b8',
                                        '&:hover': {
                                            backgroundColor: 'rgba(148, 163, 184, 0.1)'
                                        }
                                    }}
                                >
                                    {showAllWallets ? 'Show Less' : `Show All ${wallets.length} Wallets`}
                                </Button>
                            )}
                            
                            {checkoutForm.selectedWallet && (
                                <Box sx={{ 
                                    mt: 2, 
                                    p: 2, 
                                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                                    borderRadius: 1,
                                    border: '1px solid #0ea5e9'
                                }}>
                                    <Typography variant="body2" sx={{ color: '#94a3b8', mb: 0.5 }}>
                                        Selected for Payment:
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#0ea5e9', fontWeight: 600 }}>
                                        {checkoutForm.selectedWallet.value.toLocaleString(undefined, { minimumFractionDigits: 2 })} {checkoutForm.selectedWallet.currency}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                                        (${(checkoutForm.selectedWallet.converted_value || checkoutForm.selectedWallet.value).toLocaleString(undefined, { minimumFractionDigits: 2 })} USD)
                                    </Typography>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Checkout Dialog */}
            <Dialog
                open={checkoutOpen}
                onClose={handleCloseCheckout}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        backgroundColor: '#1e293b',
                        color: '#f1f5f9',
                        border: '1px solid #334155'
                    }
                }}
            >
                <DialogTitle sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderBottom: '1px solid #334155',
                    padding: 3
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#f1f5f9' }}>
                        ✈️ Flight Checkout
                    </Typography>
                    <IconButton onClick={handleCloseCheckout} sx={{ color: '#94a3b8' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                
                <DialogContent sx={{ padding: 3 }}>
                    {selectedFlight && (
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
                                Flight Details
                            </Typography>
                            <Paper sx={{ p: 2, backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                            From
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#f1f5f9', fontWeight: 500 }}>
                                            {selectedFlight.destination_city_name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                            To
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#f1f5f9', fontWeight: 500 }}>
                                            {selectedFlight.arrival_city_name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                            Class
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#f1f5f9', fontWeight: 500 }}>
                                            {selectedFlight.experience_type}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                            Price
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: '#0ea5e9', fontWeight: 700 }}>
                                            ${getPrice(selectedFlight.experience_type)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    )}

                    <Tabs 
                        value={checkoutTab} 
                        onChange={handleCheckoutTabChange}
                        sx={{ 
                            mb: 3,
                            '& .MuiTab-root': {
                                color: '#94a3b8',
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                            },
                            '& .Mui-selected': {
                                color: '#0ea5e9',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#0ea5e9',
                            }
                        }}
                    >
                        <Tab label="Payment Method" />
                        <Tab label="Wallet Selection" />
                        <Tab label="Confirmation" />
                    </Tabs>

                    {checkoutTab === 0 && (
                        <Box>
                            <Typography variant="h6" sx={{ color: '#db170dff', mb: 2 }}>
                                Additional information : transactions are in educational purposes, they do not involve real money
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
                                Select Payment Method
                            </Typography>
                            <FormControl component="fieldset" fullWidth>
                                <RadioGroup
                                    value={checkoutForm.paymentMethod}
                                    onChange={(e) => handlePaymentMethodChange(e.target.value as any)}
                                >
                                    <Grid container spacing={2}>
                                        {paymentMethods.map((method) => (
                                            <Grid item xs={6} key={method.id}>
                                                <Paper
                                                    sx={{
                                                        padding: 2,
                                                        backgroundColor: checkoutForm.paymentMethod === method.id ? 'rgba(14, 165, 233, 0.1)' : '#1e293b',
                                                        border: `1px solid ${checkoutForm.paymentMethod === method.id ? '#0ea5e9' : '#334155'}`,
                                                        borderRadius: 2,
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            borderColor: '#0ea5e9',
                                                        }
                                                    }}
                                                    onClick={() => handlePaymentMethodChange(method.id as any)}
                                                >
                                                    <FormControlLabel
                                                        value={method.id}
                                                        control={
                                                            <Radio 
                                                                sx={{ 
                                                                    color: '#334155',
                                                                    '&.Mui-checked': {
                                                                        color: '#0ea5e9',
                                                                    },
                                                                }}
                                                            />
                                                        }
                                                        label={
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                {method.icon}
                                                                <Typography sx={{ color: '#f1f5f9' }}>
                                                                    {method.label}
                                                                </Typography>
                                                            </Box>
                                                        }
                                                        sx={{ margin: 0 }}
                                                    />
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </RadioGroup>
                            </FormControl>

                            {checkoutForm.paymentMethod === 'wallet' && (
                                <Box sx={{ mt: 3 }}>
                                    <Alert severity="info" sx={{ mb: 2, backgroundColor: 'rgba(14, 165, 233, 0.1)', border: '1px solid #0ea5e9' }}>
                                        <Typography sx={{ color: '#0ea5e9' }}>
                                            USD wallets are recommended to avoid currency conversion fees. The system will automatically use the best available wallet(s).
                                        </Typography>
                                    </Alert>
                                </Box>
                            )}
                        </Box>
                    )}

                    {checkoutTab === 1 && checkoutForm.paymentMethod === 'wallet' && (
                        <Box>
                            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
                                Select Wallet for Payment
                            </Typography>
                            
                            {wallets.length === 0 ? (
                                <Alert severity="warning" sx={{ mb: 2, backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                                    <Typography sx={{ color: '#fbbf24' }}>
                                        No wallets found. Please add a wallet to your account first.
                                    </Typography>
                                </Alert>
                            ) : (
                                <>
                                    <Paper sx={{ p: 3, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 2, mb: 3 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Box>
                                                <Typography variant="body2" sx={{ color: '#db240fff' }}>
                                                    Total Available Balance
                                                </Typography>
                                                <Typography variant="h4" sx={{ color: '#0ea5e9', fontWeight: 700 }}>
                                                    ${totalWalletBalanceUSD.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                </Typography>
                                            </Box>
                                            <AccountBalanceWallet sx={{ fontSize: 40, color: '#0ea5e9' }} />
                                        </Box>
                                        
                                        <Divider sx={{ my: 2, borderColor: '#334155' }} />
                                        
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                                Flight Cost:
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#f1f5f9' }}>
                                                ${flightPrice}
                                            </Typography>
                                        </Box>
                                        
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                                Remaining Balance:
                                            </Typography>
                                            <Typography variant="body2" sx={{ 
                                                color: remainingBalance >= 0 ? '#10b981' : '#ef4444',
                                                fontWeight: 600
                                            }}>
                                                ${Math.abs(remainingBalance).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                {remainingBalance < 0 && ' (Insufficient)'}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                    
                                    <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
                                        Available Wallets
                                    </Typography>
                                    
                                    <Grid container spacing={2}>
                                        {sortedWallets.map((wallet) => (
                                            <Grid item xs={12} key={wallet.id}>
                                                <Paper
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: checkoutForm.wallet_id === wallet.id ? 'rgba(14, 165, 233, 0.1)' : '#1e293b',
                                                        border: `2px solid ${checkoutForm.wallet_id === wallet.id ? '#0ea5e9' : '#334155'}`,
                                                        borderRadius: 2,
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            borderColor: '#0ea5e9',
                                                            backgroundColor: 'rgba(14, 165, 233, 0.05)'
                                                        }
                                                    }}
                                                    onClick={() => handleWalletSelect(wallet)}
                                                >
                                                    <Grid container spacing={2} alignItems="center">
                                                        <Grid item xs={3}>
                                                            <Chip 
                                                                label={wallet.currency}
                                                                size="medium"
                                                                sx={{ 
                                                                    backgroundColor: wallet.currency === 'USD' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(148, 163, 184, 0.1)',
                                                                    color: wallet.currency === 'USD' ? '#0ea5e9' : '#94a3b8',
                                                                    fontWeight: 600
                                                                }}
                                                            />
                                                            {wallet.currency === 'USD' && (
                                                                <Typography variant="caption" sx={{ display: 'block', color: '#10b981', mt: 0.5 }}>
                                                                    Recommended
                                                                </Typography>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography variant="body1" sx={{ color: '#f1f5f9', fontWeight: 500 }}>
                                                                {wallet.value.toLocaleString(undefined, { minimumFractionDigits: 2 })} {wallet.currency}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography variant="body2" sx={{ color: '#94a3b8', textAlign: 'right' }}>
                                                                ${(wallet.converted_value || wallet.value).toLocaleString(undefined, { minimumFractionDigits: 2 })} USD
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    
                                    {checkoutForm.selectedWallet && remainingBalance < 0 && (
                                        <Alert severity="warning" sx={{ mt: 2, backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                                            <Typography sx={{ color: '#fbbf24' }}>
                                                Insufficient funds in selected wallet. The system will automatically combine multiple wallets if needed.
                                            </Typography>
                                        </Alert>
                                    )}
                                    
                                    <Alert severity="info" sx={{ mt: 3, backgroundColor: 'rgba(14, 165, 233, 0.1)', border: '1px solid #0ea5e9' }}>
                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                            <strong>Note:</strong> The system will automatically use the best combination of wallets if needed. 
                                            USD wallets are prioritized to avoid conversion fees.
                                        </Typography>
                                    </Alert>
                                </>
                            )}
                        </Box>
                    )}

                    {checkoutTab === 2 && (
                        <Box>
                            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
                                Order Summary
                            </Typography>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: 2 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body1" sx={{ color: '#f1f5f9', fontWeight: 600, mb: 1 }}>
                                        {selectedFlight?.destination_city_name} → {selectedFlight?.arrival_city_name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                        {selectedFlight?.experience_type}
                                    </Typography>
                                </Box>
                                
                                <Divider sx={{ my: 2, borderColor: '#334155' }} />
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                        Subtotal:
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#f1f5f9' }}>
                                        ${flightPrice}
                                    </Typography>
                                </Box>
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                        Tax & Fees:
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#f1f5f9' }}>
                                        ${(flightPrice * 0.1).toFixed(2)}
                                    </Typography>
                                </Box>
                                
                                <Divider sx={{ my: 2, borderColor: '#334155' }} />
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="h6" sx={{ color: '#f1f5f9', fontWeight: 700 }}>
                                        Total:
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#0ea5e9', fontWeight: 700 }}>
                                        ${(flightPrice * 1.1).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Paper>
                            
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>
                                    Additional Notes (Optional):
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value={bookingNotes}
                                    onChange={(e) => setBookingNotes(e.target.value)}
                                    placeholder="Add any special requests or notes for your booking..."
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: '#f1f5f9',
                                            '& fieldset': {
                                                borderColor: '#334155',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#0ea5e9',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#94a3b8',
                                        },
                                    }}
                                />
                            </Box>
                            
                            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <VerifiedUserIcon sx={{ color: '#10b981' }} />
                                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                    Your payment is secured with 256-bit SSL encryption
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </DialogContent>
                
                <DialogActions sx={{ padding: 3, borderTop: '1px solid #334155' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Box>
                            {checkoutTab > 0 && (
                                <Button 
                                    onClick={() => setCheckoutTab(prev => prev - 1)}
                                    sx={{ color: '#94a3b8' }}
                                >
                                    Back
                                </Button>
                            )}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button 
                                onClick={handleCloseCheckout}
                                sx={{ color: '#94a3b8' }}
                            >
                                Cancel
                            </Button>
                            {checkoutTab < 2 ? (
                                <Button
                                    variant="contained"
                                    onClick={() => setCheckoutTab(prev => prev + 1)}
                                    disabled={checkoutForm.paymentMethod === 'wallet' && checkoutTab === 1 && !checkoutForm.wallet_id}
                                    sx={{
                                        background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
                                        color: 'white',
                                        '&:disabled': {
                                            background: '#334155',
                                            color: '#64748b'
                                        }
                                    }}
                                >
                                    Continue
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={handleSubmitPayment}
                                    disabled={processingPayment || 
                                        (checkoutForm.paymentMethod === 'wallet' && wallets.length === 0)
                                    }
                                    startIcon={processingPayment ? <CircularProgress size={20} /> : <CheckCircle />}
                                    sx={{
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        color: 'white',
                                        '&:disabled': {
                                            background: '#334155',
                                            color: '#64748b'
                                        }
                                    }}
                                >
                                    {processingPayment ? 'Processing...' : 'Confirm & Pay'}
                                </Button>
                            )}
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>

            {/* Success/Error Notifications */}
            <Snackbar
                open={paymentSuccess}
                autoHideDuration={3000}
                onClose={() => setPaymentSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    severity="success"
                    icon={<CheckCircle />}
                    sx={{ backgroundColor: '#10b981', color: 'white' }}
                >
                    Payment successful! Your booking is confirmed.
                </Alert>
            </Snackbar>

            <Snackbar
                open={!!paymentError}
                autoHideDuration={5000}
                onClose={() => setPaymentError(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    severity="error"
                    icon={<ErrorIcon />}
                    sx={{ backgroundColor: '#ef4444', color: 'white' }}
                >
                    {paymentError}
                </Alert>
            </Snackbar>
        </BookingLayout>
    );
}