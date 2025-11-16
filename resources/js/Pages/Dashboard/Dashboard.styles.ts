// Dashboard.styles.ts
export const styles = {
  // AppBar Styles
  appBar: {
    backgroundColor: '#1e40af',
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    minHeight: '80px',
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
    fontSize: '2rem',
    color: 'white',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },

  // Navigation Styles
  navButton: {
    fontWeight: '600',
    fontSize: '1.5rem',
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
  },

  // Navigation Buttons
  navArrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#1e40af',
    borderRadius: '50px',
    padding: '12px 20px',
    minWidth: 'auto',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    zIndex: 10,
  },
  prevButton: {
    position: 'absolute',
    top:'72%',
    left: '20px',
  },
  nextButton: {
    position: 'absolute',
    top:'72%',
    left:'40%'
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
    width: '90%',
    maxWidth: '800px',
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
    fontSize: { xs: '2rem', md: '2.5rem' },
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
    background: 'rgba(255, 255, 255, 0.8)',
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
    fontSize: '1.1rem',
    color: '#1e40af',
    textAlign: 'center',
  },

  // City Selection
  citiesContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',
    mb: 4
  },
  cityInputContainer: {
    flex: 1,
  },
  inputLabel: {
    fontWeight: '600',
    color: '#1e40af',
    mb: 1,
    fontSize: '1.1rem',
  },
  citySelect: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },

  // Swap Button
  swapButton: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)',
    mb: 1,
  },

  // Dates and Passengers
  datesPassengersContainer: {
    display: 'flex',
    gap: '20px',
    mb: 4,
  },
  dateContainer: {
    flex: 1,
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
    top:'71%',
    left: '23%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    width: '90%',
    maxWidth: '600px',
  },
  bookButton: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
    width: '100%',
    transition: 'all 0.3s ease',
    height: '56px',
  },
  bookButtonText: {
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
    padding: '40px',
    width: '400px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  experienceTitle: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold',
    fontSize: '3rem',
    mb: 4,
  },
  experienceSelect: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    mb: 3,
  },

  // Flight Status Box
  flightStatusBox: {
    position: 'absolute', 
    left: '15%', 
    top:'15%',
    zIndex: 5,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    padding: '40px',
    width: '400px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  flightStatusTitle: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold',
    fontSize: '2rem',
    mb: 4,
  },
  flightStatusButton: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)',
    mb: 3,
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
    fontSize: { xs: '2.5rem', md: '3rem' },
  },

  // Feature Cards
  featureCard: {
    textAlign: 'center',
    padding: '30px 20px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  featureIcon: {
    fontSize: '3.5rem',
    color: '#1e40af',
    mb: 2,
  },
  featureTitle: {
    fontWeight: 'bold',
    color: '#1e40af',
    mb: 2,
    fontSize: '1.25rem',
  },
  featureDescription: {
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