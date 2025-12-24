import { SxProps } from '@mui/material';

export const styles = {
  containerStyles: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '2rem 1rem',
    position: 'relative',
    overflow: 'hidden',
  },

  navStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 100,
  },

  logoStyles: {
    fontSize: '2rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  heroStyles: {
    textAlign: 'center',
    padding: '4rem 1rem',
    marginBottom: '4rem',
    position: 'relative',
    zIndex: 10,
  },

  heroTitleStyles: {
    fontSize: { xs: '2.5rem', md: '4rem' },
    fontWeight: 800,
    color: 'white',
    marginBottom: '1rem',
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
    lineHeight: 1.2,
  },

  heroSubtitleStyles: {
    fontSize: { xs: '1.2rem', md: '1.5rem' },
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    maxWidth: '800px',
    margin: '0 auto 2rem',
    fontWeight: 300,
    lineHeight: 1.6,
  },

  ctaButtonStyles: {
    background: 'white',
    color: '#667eea',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
      background: 'white',
    },
  },

  sectionTitleStyles: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
    marginBottom: '3rem',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '4px',
      background: 'linear-gradient(90deg, transparent, white, transparent)',
      borderRadius: '2px',
    },
  },

  gridContainerStyles: {
    display: 'grid',
    gridTemplateColumns: { 
      xs: '1fr', 
      sm: 'repeat(2, 1fr)', 
      md: 'repeat(3, 1fr)' 
    },
    gap: '2rem',
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },

  destinationCardStyles: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    },
  },

  cardImageStyles: {
    height: '250px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '100px',
      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    },
  },

  cardContentStyles: {
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cardTitleStyles: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#333',
    marginBottom: '0.5rem',
  },

  cardSubtitleStyles: {
    fontSize: '0.9rem',
    color: '#667eea',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
  },

  cardDescriptionStyles: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: 1.5,
    marginBottom: '1rem',
  },

  cardFooterStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
  },

  ratingStyles: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#ffc107',
    fontWeight: 600,
  },

  priceStyles: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#667eea',
  },

  featuredGridStyles: {
    display: 'grid',
    gridTemplateColumns: { 
      xs: '1fr', 
      md: 'repeat(2, 1fr)' 
    },
    gap: '2rem',
    marginTop: '4rem',
  },

  featuredCardStyles: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-10px) scale(1.01)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    },
  },

  statsSectionStyles: {
    background: 'rgba(85, 3, 3, 0.88)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '3rem 2rem',
    margin: '4rem auto',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap: '2rem',
    textAlign: 'center',
  },

  statItemStyles: {
    color: 'white',
  },

  statNumberStyles: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },

  statLabelStyles: {
    fontSize: '1rem',
    opacity: 0.9,
    fontWeight: 300,
  },

  footerStyles: {
    marginTop: '6rem',
    padding: '3rem 2rem',
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'white',
  },
};

export default styles;