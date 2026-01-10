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
  TextField,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
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
  Add as AddIcon,
  TrendingUp,
  AccountBalance,
  Payment,
  CreditCard,
  AttachMoney,
  ArrowUpward,
  History,
  AccountBalanceOutlined,
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
import {investmentOpportunities, quickDepositOptions, currencySymbols, supportedCurrencies, currencyNames} from './constants';
import { InfoModal } from '@/Components/InfoModal/MyModal';
import Modal from '@/Components/Modal';
import { DocumentsModal } from '@/Components/FlightDocuments/DocumentsModal';


/**************************************************************************
 *                          INTERFACES
 * 1. ProfileItemProps
 * 2. Wallet 
 * 3. TransactionHistory
 * 4. User
 * 5. ProfileManagementProps -> used to pass all the data into 1 interface
 **************************************************************************/
interface ProfileItemProps {
  icon: ReactNode;
  label: string;
  value?: string;
  children?: ReactNode;
  clickable?: boolean;
  onClick?: () => void;
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

interface TransactionHistory {
  id: number,
  description: string,
  amount: number,
  status: string
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    gender: string;
}

interface ProfileManagementProps {
    users: User;
    wallets: Wallet[];
    total_usd: number;
    base_currency: string;
    transaction_history: TransactionHistory[];
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

const handlePayment = async (wallet: Wallet, amount: number, currency: string) => {
    try {
        // Create form data or JSON payload
        const payload = {
            user_id: wallet.user_id,
            currency: currency,
            value: parseFloat(amount.toString()),
            converted_value: wallet.converted_value,
            converted_currency: wallet.converted_currency,
            exchange_rate: wallet.exchange_rate
        };

        // Using fetch with PATCH
        const response = await fetch('/profileMenu/payment-process', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                // Include CSRF token for Laravel
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
            },
            body: JSON.stringify(payload),
            credentials: 'include' // Important for cookies/sessions
        });
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }
        alert('Payment processed successfully!');
        
        // Optionally refresh wallet data or update UI
        window.location.reload();
        return response;

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        alert(`Payment failed: ${errorMessage}`);
        throw error;
    }
};

// Payment methods
const paymentMethods = [
  { id: 'credit_card', label: 'Credit Card', icon: <CreditCard /> },
  { id: 'bank_transfer', label: 'Bank Transfer', icon: <AccountBalance /> },
  { id: 'paypal', label: 'PayPal', icon: <Payment /> },
  { id: 'crypto', label: 'Crypto Wallet', icon: <TrendingUp /> },
];

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

function FundsProgressCircle({wallets, users, total_usd, base_currency} : ProfileManagementProps ) {
  const availableFunds = total_usd;
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
            {availableFunds.toLocaleString()} {currencySymbols[base_currency] || base_currency}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            Required:
          </Typography>
          <Typography variant="body2" sx={{ color: '#f1f5f9', fontWeight: '500' }}>
            {insufficientFunds.toLocaleString()} {currencySymbols[base_currency] || base_currency}
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
              {remaining.toLocaleString()} {currencySymbols[base_currency] || base_currency}
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

// Investment Opportunity Card Component
function InvestmentOpportunityCard({ opportunity }: { opportunity: any }) {
  return (
    <Card sx={styles.investmentCard}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h6" sx={{ color: '#f1f5f9', fontWeight: 600 }}>
          {opportunity.name}
        </Typography>
        <Chip 
          label={opportunity.return} 
          size="small" 
          sx={{ 
            backgroundColor: opportunity.return.includes('+') ? '#10b98120' : '#ef444420',
            color: opportunity.return.includes('+') ? '#10b981' : '#ef4444',
            fontWeight: 600
          }}
        />
      </Box>
      <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>
        {opportunity.symbol} • {opportunity.category}
      </Typography>
      <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
        {opportunity.description}
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        size="small"
        sx={{ 
          mt: 2,
          borderColor: '#0ea5e9',
          color: '#0ea5e9',
          '&:hover': {
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(14, 165, 233, 0.1)'
          }
        }}
      >
        Invest Now
      </Button>
    </Card>
  );
}

function ProfileManLayoutContent({ children, users, wallets, total_usd, base_currency, transaction_history }: PropsWithChildren<ProfileManagementProps>) {
    const isMobile = useMediaQuery('(max-width: 899px)');
    const [verificationOpen, setVerificationOpen] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState("unverified");
    const [showSuccess, setShowSuccess] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [docsOpen, setDocsOpen] = useState(false);
    
    // Wallet funding states
    const [fundingOpen, setFundingOpen] = useState(false);
    const [fundingTab, setFundingTab] = useState(0);
    const [amount, setAmount] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState(base_currency || 'USD');
    const [selectedPayment, setSelectedPayment] = useState('credit_card');
    const [showFundingSuccess, setShowFundingSuccess] = useState(false);
    const [isFunding, setIsFunding] = useState(false);
    const [userWallets, setUserWallets] = useState<Wallet[]>(wallets);
    const [totalAmount, setTotalAmount] = useState(total_usd);

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

    // Wallet funding handlers
    const handleOpenFunding = () => {
        setFundingOpen(true);
        if (isMobile) {
            setMobileOpen(false); // Close mobile drawer when opening popup
        }
    };

    const handleOpenInfo = () => {
        setModalOpen(!modalOpen);
    };

    const handleOpenDocs = () => {
        setDocsOpen(!docsOpen);
    };

    const handleCloseFunding = () => {
        setFundingOpen(false);
        setAmount('');
        setIsFunding(false);
    };

    const handleFundSubmit = async () => {
      if (!amount || parseFloat(amount) <= 0) {
          alert('Please enter a valid amount');
          return;
      }
      
      setIsFunding(true);
      
      try {
          // Find the wallet matching the selected currency
          const targetWallet = wallets.find(wallet => wallet.currency === selectedCurrency);
          
          if (!targetWallet) {
              throw new Error(`No wallet found for currency: ${selectedCurrency}`);
          }

          //Quick Refresh using useState
          const result = await handlePayment(
            targetWallet,
            parseFloat(amount),
            selectedCurrency
          );

          // Calculate conversion rate for total USD update
          const conversionRate = targetWallet.exchange_rate || 1;
          const amountInUSD = parseFloat(amount) * conversionRate;

          // Update wallets with the new amount
          const updatedWallets = userWallets.map(wallet => 
            wallet.id === targetWallet.id 
              ? { 
                  ...wallet, 
                  value: wallet.value + parseFloat(amount)
                } 
              : wallet
          );

          // Calculate new total amount
          const newTotalAmount = updatedWallets.reduce((total, wallet) => {
            // Convert each wallet's value to USD for total calculation
            const walletValueInUSD = wallet.value * (wallet.exchange_rate || 1);
            return total + walletValueInUSD;
          }, 0);

          // Update both states
          setUserWallets(updatedWallets);
          setTotalAmount(newTotalAmount);
          
          setIsFunding(false);
          setShowFundingSuccess(true);
          setFundingOpen(false);
          setAmount('');
          
          console.log('Payment result:', result);
          
          // Hide success message after 3 seconds
          setTimeout(() => {
              setShowFundingSuccess(false);
          }, 3000);
          
      } catch (error) {
          console.error('Payment failed:', error);
          setIsFunding(false);
          
          // Show error to user
          alert(`Payment failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
  };

    const handleQuickDeposit = (quickAmount: number) => {
        setAmount(quickAmount.toString());
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setFundingTab(newValue);
    };

    const navigationItems = [
      { 
          text: 'MY FLIGHTS', 
          icon: <Analytics />,
          onClick: () => console.log('My Flights clicked')
      },
      { 
          text: 'WALLET', 
          icon: <AccountBalanceWallet />,
          onClick: handleOpenFunding
      },
      { 
          text: 'HELP', 
          icon: <Help />,
          onClick: () => console.log('Help clicked')
      },
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

    const actionItems = [
        { text: 'Add funds', icon: <AccountBalanceWallet />, onClick: handleOpenFunding },
        { text: 'Create Additionals', icon: <Assignment /> },
    ];

    const settingItems = [
        { text: 'Support requests', icon: <Help />, onClick: () => handleOpenInfo()},
        { text: 'Referral program', icon: <Share />, onClick: () => console.log('Referral clicked')},
        { text: 'Flight documents', icon: <Assignment />, onClick: () => handleOpenDocs()},
    ];

    const drawer = (
        <Box sx={styles.sidebarContainer}>
        <Box sx={styles.sidebarHeader}>
            {/* users?. means optional */}
            <Typography variant="h4" sx={styles.userName}>
                {users?.firstName} {users?.lastName}
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
            <ListItemButton 
              sx={styles.navListItemButton}
              onClick={item.onClick}
            >
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
          Account ID: <span style={{ color: '#f1f5f9' }}>{users?.id}</span>
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

  // Wallet Funding Dialog
  const walletFundingDialog = (
    <Dialog
      open={fundingOpen}
      onClose={handleCloseFunding}
      maxWidth="md"
      fullWidth
      TransitionComponent={Grow}
      transitionDuration={300}
      PaperProps={{
        sx: {
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          borderRadius: 3,
          border: '1px solid #334155',
          maxWidth: '800px',
          maxHeight: '90vh',
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
          ✈️ Fund Your Wallet
        </Typography>
        <IconButton onClick={handleCloseFunding} sx={{ color: '#94a3b8' }}>
          <AddIcon sx={{ transform: 'rotate(45deg)' }} />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ padding: 0 }}>
        <Tabs 
          value={fundingTab} 
          onChange={handleTabChange}
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
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
          <Tab label="Quick Deposit" icon={<AttachMoney />} iconPosition="start" />
          <Tab label="Investment Tools" icon={<TrendingUp />} iconPosition="start" />
          <Tab label="Payment History" icon={<History />} iconPosition="start" />
        </Tabs>
        
        {fundingTab === 0 && (
          <Box sx={{ padding: 3 }}>
            {/* Current Balance */}
            <Box sx={{ 
              backgroundColor: 'rgba(14, 165, 233, 0.1)', 
              borderRadius: 2, 
              padding: 2,
              marginBottom: 3,
              border: '1px solid rgba(14, 165, 233, 0.3)'
            }}>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                Current Wallet Balance
              </Typography>
              <Typography variant="h4" sx={{ color: '#0ea5e9', fontWeight: 700 }}>
                {currencySymbols[base_currency] || base_currency}{totalAmount.toLocaleString()}
              </Typography>
            </Box>
            
            {/* Quick Deposit Options */}
            <Typography variant="h6" sx={{ color: '#db170dff', mb: 2 }}>
              Additional information : transactions are in educational purposes, they do not involve real money
            </Typography>
            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
              Quick Deposit Amounts
            </Typography>
            <Grid container spacing={1} sx={{ mb: 3 }}>
              {quickDepositOptions.map((option) => (
                <Grid item xs={4} sm={2} key={option.amount}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => handleQuickDeposit(option.amount)}
                    sx={{
                      borderColor: amount === option.amount.toString() ? '#0ea5e9' : '#334155',
                      color: amount === option.amount.toString() ? '#0ea5e9' : '#94a3b8',
                      '&:hover': {
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.1)'
                      }
                    }}
                  >
                    {currencySymbols[base_currency] || '$'}{option.amount}
                  </Button>
                </Grid>
              ))}
            </Grid>
            
            {/* Custom Amount */}
            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
              Or Enter Custom Amount
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField
                fullWidth
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                InputProps={{
                  startAdornment: (
                    <Box sx={{ mr: 1, color: '#94a3b8' }}>
                      {currencySymbols[selectedCurrency] || selectedCurrency}
                    </Box>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#f1f5f9',
                    '& fieldset': {
                      borderColor: '#334155',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0ea5e9',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0ea5e9',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#94a3b8',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#0ea5e9',
                  },
                }}
              />
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel sx={{ color: '#94a3b8' }}>Currency</InputLabel>
                <Select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  label="Currency"
                  sx={{
                    color: '#f1f5f9',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#334155',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#0ea5e9',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#0ea5e9',
                    },
                  }}
                >
                  {supportedCurrencies.map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currencySymbols[currency] || currency} {currency} - {currencyNames[currency] || currency}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            {/* Payment Method */}
            <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
              Payment Method
            </Typography>
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={selectedPayment}
                onChange={(e) => setSelectedPayment(e.target.value)}
              >
                <Grid container spacing={2}>
                  {paymentMethods.map((method) => (
                    <Grid item xs={6} key={method.id}>
                      <Paper
                        sx={{
                          padding: 2,
                          backgroundColor: selectedPayment === method.id ? 'rgba(14, 165, 233, 0.1)' : '#1e293b',
                          border: `1px solid ${selectedPayment === method.id ? '#0ea5e9' : '#334155'}`,
                          borderRadius: 2,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#0ea5e9',
                          }
                        }}
                        onClick={() => setSelectedPayment(method.id)}
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
            
            {/* Currency Market Info */}
            <Box sx={{ 
              mt: 3, 
              p: 2, 
              backgroundColor: 'rgba(20, 184, 166, 0.1)', 
              borderRadius: 2,
              border: '1px solid rgba(20, 184, 166, 0.3)'
            }}>
              <Typography variant="subtitle2" sx={{ color: '#14b8a6', mb: 1 }}>
                💱 Currency Market (USD Base)
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    USD/EUR
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#f1f5f9' }}>
                    0.92
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    USD/GBP
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#f1f5f9' }}>
                    0.78
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    USD/RON
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#f1f5f9' }}>
                    4.60
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    USD/JPY
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#f1f5f9' }}>
                    145.00
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
        
        {fundingTab === 1 && (
          <Box sx={{ padding: 3 }}>
            <Typography variant="h5" sx={{ color: '#f1f5f9', mb: 3 }}>
              Investment Opportunities
            </Typography>
            
            {/* Investment Grid */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {investmentOpportunities.map((opportunity) => (
                <Grid item xs={12} sm={6} key={opportunity.id}>
                  <InvestmentOpportunityCard opportunity={opportunity} />
                </Grid>
              ))}
            </Grid>
            
            {/* Investment Chart Placeholder */}
            <Box sx={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.5)', 
              borderRadius: 2, 
              padding: 3,
              border: '1px solid #334155'
            }}>
              <Typography variant="h6" sx={{ color: '#f1f5f9', mb: 2 }}>
                Return on Investment
              </Typography>
              <Box sx={{ 
                height: 200, 
                backgroundColor: 'rgba(15, 23, 42, 0.5)', 
                borderRadius: 1,
                display: 'flex',
                alignItems: 'flex-end',
                gap: 1,
                padding: 2
              }}>
                {[30, 45, 60, 75, 80, 95].map((height, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      flex: 1,
                      height: `${height}%`,
                      backgroundColor: '#0ea5e9',
                      borderRadius: '4px 4px 0 0',
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        position: 'absolute',
                        bottom: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: '#94a3b8',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ color: '#94a3b8', mt: 3, textAlign: 'center' }}>
              Past performance does not guarantee future results. Invest wisely.
            </Typography>
          </Box>
        )}
        
      {fundingTab === 2 && (
        <Box sx={{ padding: 3 }}>
          <Typography variant="h5" sx={{ color: '#f1f5f9', mb: 3 }}>
            Payment History
          </Typography>

          <Box sx={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', 
            borderRadius: 2, 
            padding: 2,
            border: '1px solid #334155'
          }}>
            {transaction_history && transaction_history.length > 0 ? (
              <Box>
                {transaction_history.map((transaction: TransactionHistory) => {
                  // Determine if it's a positive or negative amount
                  const isPositive = transaction.amount >= 0;
                  const amountDisplay = `${isPositive ? '+' : '-'}${currencySymbols[base_currency] || '$'}${Math.abs(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                  
                  return (
                    <Box key={transaction.id} sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: 1.5,
                      borderBottom: '1px solid #334155',
                      '&:last-child': { borderBottom: 'none' }
                    }}>
                      <Box>
                        <Typography variant="body1" sx={{ color: '#f1f5f9' }}>
                          {transaction.description}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body1" sx={{ 
                          color: isPositive ? '#10b981' : '#ef4444',
                          fontWeight: 600
                        }}>
                          {amountDisplay}
                        </Typography>
                        <Chip 
                          label={transaction.status} 
                          size="small" 
                          sx={{ 
                            backgroundColor: transaction.status === 'Approved' || transaction.status === 'Completed' 
                              ? '#10b98120' 
                              : transaction.status === 'Pending' 
                              ? '#f59e0b20' 
                              : '#ef444420',
                            color: transaction.status === 'Approved' || transaction.status === 'Completed'
                              ? '#10b981'
                              : transaction.status === 'Pending'
                              ? '#f59e0b'
                              : '#ef4444',
                            height: 20,
                            fontSize: '0.7rem'
                          }}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <Box sx={{ 
                textAlign: 'center', 
                padding: 3,
                color: '#94a3b8'
              }}>
                <History sx={{ fontSize: 40, opacity: 0.5, mb: 1 }} />
                <Typography>No transaction history available</Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}  
      
      </DialogContent>
      
      {fundingTab === 0 && (
        <DialogActions sx={{ padding: 3, borderTop: '1px solid #334155' }}>
          <Button 
            onClick={handleCloseFunding}
            sx={{ color: '#94a3b8' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleFundSubmit}
            disabled={!amount || parseFloat(amount) <= 0 || isFunding}
            startIcon={isFunding ? <CircularProgress size={20} /> : <ArrowUpward />}
            sx={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
              color: 'white',
              '&:disabled': {
                background: '#334155',
                color: '#64748b'
              }
            }}
          >
            {isFunding ? 'Processing...' : `Deposit ${currencySymbols[selectedCurrency] || selectedCurrency}${amount || '0'}`}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );

  // Success notifications
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

  const fundingSuccessNotification = (
    <Snackbar
      open={showFundingSuccess}
      autoHideDuration={3000}
      onClose={() => setShowFundingSuccess(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={Fade}
    >
      <Alert 
        onClose={() => setShowFundingSuccess(false)} 
        severity="success"
        sx={{ backgroundColor: '#0ea5e9', color: 'white' }}
        icon={<AccountBalanceWallet fontSize="inherit" />}
      >
        Successfully deposited {currencySymbols[selectedCurrency] || selectedCurrency}{amount} to your wallet!
      </Alert>
    </Snackbar>
  );

  const goFB=() => {
    window.open("https://www.facebook.com/share/17kdweS1hD/", "_blank");
  }

  const goIG=() => {
    window.open("https://www.instagram.com/utw2026?igsh=Y3o5emJ6bXQ5ODRk", "_blank");
  }

  const goTT=() => {
    window.open("https://www.tiktok.com/@utw042?is_from_webapp=1&sender_device=pc", "_blank");
  }
  

  return (
    
    <Box sx={styles.rootContainer}>
      <CssBaseline />
      {modalOpen && <InfoModal onClose={()=>setModalOpen(false)}/>}
      {docsOpen && <DocumentsModal onClose={()=>setDocsOpen(false)}/>}
      
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
              {users?.firstName} {users?.lastName}
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
                    {userWallets.map((wallet, index) => (
                      <FundCard
                        key={wallet.id}
                        title={`${wallet.currency} Wallet`}
                        amount={`${wallet.value.toFixed(2)} ${currencySymbols[wallet.currency] || wallet.currency}`}
                        color={index === 0 ? 'primary' : 'secondary'}
                      />
                    ))}
                    
                    {/* Total Available */}
                    {wallets.length > 0 && (
                      <FundCard
                        title="Total Available"
                        amount={`${total_usd.toLocaleString()} ${currencySymbols[base_currency] || base_currency}`}
                        color="primary"
                      />
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={styles.card}>
                    <FundsProgressCircle wallets={userWallets} users={users} total_usd={total_usd} base_currency={base_currency} transaction_history={transaction_history} />
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
                      onClick={goFB}
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
                      onClick={goIG}
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
                      onClick={goTT}
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
                        <ListItemButton sx={styles.listItemButton}
                          onClick={item.onClick}>
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
                        onClick={item.onClick}
                      >
                        {item.text === 'Add funds' ? 'Fund Wallet' : 'Create Flight Plan'}
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

      {/* Pop Up Items */}
      {verificationDialog}
      {walletFundingDialog}
      {successNotification}
      {fundingSuccessNotification}
    </Box>
  );
}

// Main export
export default function ProfileManLayout({ children, users, wallets, total_usd, base_currency, transaction_history }: PropsWithChildren<ProfileManagementProps>) {
  return (
    <ProfileManLayoutContent users={users} wallets={wallets} total_usd={total_usd} base_currency={base_currency} transaction_history={transaction_history}>
      {children}
    </ProfileManLayoutContent>
  );
}