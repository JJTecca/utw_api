import { Height } from "@mui/icons-material";

// Dashboard.styles.ts
export const styles = {
  // AppBar Styles
  appBar: {
    backgroundColor: '#1e40af',
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    minHeight: '25%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  toolbar: {
    minHeight: '80px',
    px: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  logoButton: {
    color: 'white',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: 'white',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },

  // Navigation Styles
  navButton: {
    fontWeight: '600',
    fontSize: '1rem',
    color: 'white',
    mx: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    padding: '8px 16px',
    borderRadius: '8px',
  },
  accountButton: {
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '4px',
    borderRadius: '50%',
    minWidth: 'auto',
  },

  // Hero Section Styles
  heroSection: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '75vh',
    position: 'relative',
    transition: 'background-image 1s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // Navigation Buttons
  navArrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#1e40af',
    borderRadius: '40px',
    padding: '12px 20px',
    minWidth: 'auto',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    zIndex: 10,
  },
  prevButton: {
    position: 'absolute',
    top:'85%',
    left: '4%',
    padding: '8px 16px', //We can Leave it as px for now
    fontSize: '0.6rem', // Smaller text
    minWidth: 'auto', // Remove minimum width constraint
  },
  nextButton: {
    position: 'absolute',
    top:'85%',
    left:'35%',
    padding: '8px 16px',
    fontSize: '0.6rem', // Smaller text
    minWidth: 'auto', // Remove minimum width constraint
  },

  // Main Search Box
  flightSearchBox: {
    position: 'absolute', 
    left: '23%', 
    top:'5%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    padding: '40px',
    height:'75%',
    width: '33%',
    maxWidth: '100%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    margin: '0 auto',
  },
  searchTitle: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: { xs: '1.75rem', md: '1.25rem' },
    mb: 4,
  },

  // Trip Type Selector
  tripTypeContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    mb: 4,
  },
  tripTypeOption: {
    mb: 3,
    background: 'rgba(248, 67, 67, 0.8)',
    border: '2px solid transparent',
    borderRadius: '50px',
    padding: '12px 30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  tripTypeActive: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    border: '2px solid #1e40af',
    boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
  },
  tripTypeLabel: {
    fontWeight: 'bold',
    fontSize: '0.6rem',
    color: '#1e40af',
    textAlign: 'center',
  },

  // City Selection
  citiesContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '4%',
    height:'15%',
    mb: 4
  },
  cityInputContainer: {
    flex: 1,
  },
  inputLabel: {
    fontWeight: '600',
    color: '#1e40af',
    mb: 1,
    fontSize: '0.8rem',
  },
  citySelectText:{
    fontSize:'0.75rem',
    fontWeight: '600'
  },
  citySelect: {
    backgroundColor: "white",
    borderRadius: '7%',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },

  // Swap Button
  swapButton: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)',
    mb: 0, //Alligned with the Dest / Arr City
  },

  // Dates and Passengers
  datesPassengersContainer: {
    display: 'flex',
    gap: '3%',
    mb: 4,
  },
  dateContainer: {
    flex: 1,
    width:'7%'
  },
  passengerContainer: {
    flex: 1,
  },
  passengerSelect: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },

  // Book Flight Button
  bookFlightButton: {
    position: 'absolute',
    bottom: '40px',
    top:'80%',
    left: '23%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    width: '25%',
    maxWidth: '100%',
  },
  bookButton: {
    left:'15%',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: 'bold',
    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
    width: '70%',
    transition: 'all 0.3s ease',
    height: '56px',
  },
  bookButtonText: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: 'white',
  },

  // Experience Box
  experienceBox: {
    position: 'absolute', 
    left: '15%', 
    top:'5%',
    zIndex: 5,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    padding: '0.5%',
    width: '15%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  experienceTitle: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    mb: 4,
  },
  experienceSelect: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    mb: 2
  },

  // Flight Status Box
  flightStatusBox: {
    position: 'absolute', 
    left: '13%', 
    top:'50%',
    zIndex: 5,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    padding: '1%', // Reduced from 40px
    width: '20%', // Reduced from 400px
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    
  },
  experienceBookButton: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  flightStatusTitle: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    mb: 2,
  },
  flightStatusButton: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '12px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)',
    mb: 2,
  },
  flightStatusContent: {
    textAlign: 'left',
  },
  flightStatusField: {
    mb: 2,
  },
  dateDisplay: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
  },

  // Why Choose Section
  whyChooseSection: {
    backgroundColor: '#f8fafc',
    py: 8,
    px: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 6,
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: { xs: '1.5rem', md: '1.5rem' },
  },

  // Feature Cards
  featureCard: {
    textAlign: 'center',
    padding: '16px 12px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  featureIcon: {
    fontSize: '2.5rem',
    color: '#1e40af',
    mb: 1,
  },
  featureTitle: {
    fontWeight: 'bold',
    color: '#1e40af',
    mb: 1,
    fontSize: '1rem',
  },
  featureDescription: {
    fontSize: '0.8rem',
    color: '#64748b',
    lineHeight: 1.6,
  },

  // Common Styles
  placeholderText: {
    color: '#64748b',
    fontStyle: 'italic',
  },
  menuItem: {
    py: 1.5,
    fontSize: '1rem',
  },
};

export const animations = {
  // Simple fade in/out
  fade: {
    enter: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    enterActive: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 0.3s ease-out'
    },
    exit: {
      opacity: 0,
      transform: 'translateY(-20px)',
      transition: 'all 0.2s ease-in'
    }
  },
  
  // Slide animations
  slide: {
    enter: (direction: number) => ({
      transform: `translateX(${direction > 0 ? '50px' : '-50px'})`,
      opacity: 0
    }),
    enterActive: {
      transform: 'translateX(0)',
      opacity: 1,
      transition: 'all 0.4s ease-out'
    },
    exit: (direction: number) => ({
      transform: `translateX(${direction < 0 ? '50px' : '-50px'})`,
      opacity: 0,
      transition: 'all 0.3s ease-in'
    })
  },
  
  // Stagger children animation
  staggerContainer: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  staggerItem: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4
      }
    }
  }
};