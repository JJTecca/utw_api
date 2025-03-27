import { SxProps } from '@mui/material';

export const headerContainerStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '5%',
  left: '5%'
};

export const mainButtonStyles: SxProps = {
  fontSize: '2.25rem',
  padding: '16px',
  height: '100px',
  width: '600px',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '12px'
};

export const paymentMethodsStyles: SxProps = {
  fontSize: '2.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '5%',
  left: '35%',
  padding: '16px',
  height: '100px',
  width: '600px',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '12px'
};

export const statusStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '5%',
  left: '70%',
  fontSize: '2.25rem',
  padding: '16px',
  height: '100px',
  width: '600px',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '12px'
};

// Report Box Styles
export const reportBoxStyles: SxProps = {
  position: 'absolute',
  top: '20%',
  left: '5%',
  width: '630px',
  height: 'auto',
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.2)',
  color: 'white'
};

export const accordionStyles: SxProps = {
  mb: 1,
  background: '#111',
  borderRadius: '8px'
};

export const accordionTextStyles: SxProps = {
  color: 'white'
};

// Rating Box Styles
export const ratingBoxStyles: SxProps = {
  position: 'absolute',
  top: '20%',
  left: '35%',
  width: '770px',
  height: 'auto',
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '12px',
  color: 'white'
};

export const ratingItemStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  mb: 2
};

export const ratingComponentStyles: SxProps = {
  color: 'white',
  '& .MuiRating-iconHover': { color: 'yellow' }
};

// Progress Box Styles
export const progressBoxStyles: SxProps = {
  position: 'absolute',
  top: '55%',
  left: '35%',
  width: '770px',
  height: 'auto',
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '12px',
  color: 'white'
};

export const progressItemStyles: SxProps = {
  mb: 2
};

export const progressBarStyles: SxProps = {
  height: '10px',
  borderRadius: '5px',
  backgroundColor: 'green'
};

// Favorite Plane Box Styles
export const favoritePlaneStyles: SxProps = {
  position: 'absolute',
  top: '20%',
  left: '70%',
  width: '660px',
  height: '370px',
  backgroundColor: 'black',
  backgroundSize: 'cover',
  padding: '20px',
  borderRadius: '12px',
  color: 'white',
  backgroundImage: 'url(/Images/turkish-fav-plane.jpg)'
};

// Weather Box Styles
export const weatherBoxStyles: SxProps = {
  position: 'absolute',
  top: '60%',
  left: '70%',
  width: '660px',
  height: '30%',
  backgroundColor: 'black',
  backgroundImage: 'url(/Images/clouds.gif)',
  backgroundSize: 'cover',
  padding: '20px',
  borderRadius: '12px',
  color: 'white'
};

// Icon Styles
export const iconStyles: SxProps = {
  fontSize: '2rem',
  ml: 2,
  color: 'white'
};

export const statusIconStyles: SxProps = {
  fontSize: '2rem',
  ml: 2,
  color: '#4caf50'
};