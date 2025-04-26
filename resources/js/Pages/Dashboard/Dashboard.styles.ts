export const styles = {
  appBar: {
    backgroundColor: 'powderblue',
    minHeight: '10vh',
    paddingTop: '0.5%',
    '@media (max-width: 800px)': {
      minHeight: '8vh',
      paddingTop: '2%',
    },
  },
  toolbar: {
    minHeight: '100px',
    px: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 800px)': {
      flexDirection: 'column', 
      alignItems: 'center',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      justifyContent: 'center', 
    },
  },
  logoButton: {
    mr: 2,
    fontWeight: 'bold',
    color: 'black',
    '@media (max-width: 800px)': {
      fontSize: '2rem', 
    },
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: 'black',
    paddingTop: '5px',
    '@media (max-width: 800px)': {
      fontSize: '1.8rem',
    },
  },
  navButton: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'black',
    mx: 2,
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px',
    '@media (max-width: 800px)': {
      fontSize: '1.2rem',
      marginBottom: '8px', 
    },
  },
  accountButton: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    color: 'black',
    mx: 2,
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px',
    '@media (max-width: 800px)': {
      fontSize: '1.2em',
    },
  },
  flightSearchBox: {
    position: 'absolute',
    top: '35%',
    left: '25%',
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
    paddingBottom: '16px',
    '@media (max-width: 800px)': {
      width: '80%',
      top: '35%',
      left:'50%'
    },
  },
  experienceBox: {
    position: 'absolute',
    top: '35%',
    left: '26%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '15%',
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    '@media (max-width: 800px)': {
      width: '70%', 
      top: '35%',
      left:'50%'
    },
  },
  flightStatusBox: {
    position: 'absolute',
    top: '35%',
    left: '26%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '15%',
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    '@media (max-width: 800px)': {
      width: '80%',
      top: '35%',
      left:'50%'
    },
  },
  flightStatusButton: {
    backgroundColor: '#0077B6',
    color: 'white',
    '&:hover': { backgroundColor: '#005f8a' },
    textTransform: 'none',
    padding: '12px',
    height: '70%',
    '@media (max-width: 800px)': {
      width: '100%', 
    },
  },
  bookFlightButton: {
    position: 'absolute',
    top: '75%',
    left: '20%',
    '@media (max-width: 800px)': {
      left: '30%',  
      top: '90%',  
      padding: '5px 12px', 
    },
  },
  whyChooseSection: {
    backgroundColor: '#f5f5f5',
    py: 6,
    px: 4,
    '@media (max-width: 800px)': {
      py: 4, 
    },
  },
  sectionTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 4,
    '@media (max-width: 800px)': {
      fontSize: '1.8rem', 
    },
  },
  featureCard: {
    textAlign: 'center',
    padding: '20px',
    '@media (max-width: 800px)': {
      padding: '10px', 
    },
  },
  featureTitle: {
    fontWeight: 'bold',
    '@media (max-width: 800px)': {
      fontSize: '1.2rem', 
    },
  },
  searchTitle: {
    fontWeight: 'bold',
    mb: 2,
    mt: 4,
    '@media (max-width: 800px)': {
      fontSize: '1.2rem', 
    },
  },
  dateTitle: {
    fontWeight: 'bold',
    ml: 5,
    mr: 5,
    fontSize: '1.25rem',
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
  },

  prevButton: {
    position: 'absolute',
    left: '8%', 
    top: '70%', 
    borderRadius: '10px',
    background: 'red', 
    color: 'white',
    padding: '0.25%',
    '&:hover': {
      backgroundColor: 'orange',
    },
    '@media (max-width: 800px)': {
      left: '5%',  
      top: '80%',  
      padding: '5px 12px', 
    },
  },

  nextButton: {
    position: 'absolute',
    left: '38%', 
    top: '70%',  
    borderRadius: '10px',
    background: 'red', 
    color: 'white',
    padding: '0.25%',
    '&:hover': {
      backgroundColor: 'orange',
      color: 'white',
    },
    '@media (max-width: 800px)': {
      left: '75%',  
      top: '80%',   
      padding: '5px 12px',  
    },
  },
};
