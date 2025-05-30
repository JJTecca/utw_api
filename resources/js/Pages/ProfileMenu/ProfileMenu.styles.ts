import { SxProps } from '@mui/material';


// export const responsiveContainerStyles: SxProps = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   overflowY: 'auto',
//   maxHeight: '100vh',
//   padding: '20px',
//   gap: '20px',
//   justifyContent: 'center',
//   '@media (max-width:600px)': {
//     flexDirection: 'column',
//     flexWrap: 'nowrap',
//     alignItems: 'center',
//   },
// };

export const headerContainerStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '5%',
  left: '5%',
  mb:'2%',
  mt:'2%',
  '@media (max-width:600px)': {
    position: 'static',
    width: '90%',
    justifyContent: 'center',
    marginBottom: '20px',
  },
};


export const mainButtonStyles: SxProps = {
  fontSize: '2.25rem',
  padding: '16px',
  height: '10%',
  width: '150%',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '12px',
  mt:'3%',
  mb:'2%',
  '@media (max-width:600px)': {
    width: '90%',
    fontSize: '1.5rem',
    height: '80px',
  },
};


export const paymentMethodsStyles: SxProps = {
  fontSize: '2.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  height: '15%',
  width: '30%',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '12px',
  mt:'2%',
  mb:'2%',
  '@media (max-width:600px)': {
    width: '90%',
    fontSize: '1.5rem',
    height: '80px',
  },
};


export const statusStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.25rem',
  padding: '16px',
  height: '10%',
  width: '30%',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '12px',
  mt:'2%',
  mb:'2%',
  '@media (max-width:600px)': {
    width: '90%',
    fontSize: '1.5rem',
    height: '80px',
  },
};


export const reportBoxStyles: SxProps = {
  width: '630px',
  height: 'auto',
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.2)',
  mt:'2%',
  mb:'2%',
  color: 'white',
  '@media (max-width:600px)': {
    width: '90%',
  },
};


export const accordionStyles: SxProps = {
  mb: 1,
  background: '#111',
  borderRadius: '8px',
};


export const accordionTextStyles: SxProps = {
  color: 'white',
};


export const ratingBoxStyles: SxProps = {
  width: '770px',
  height: 'auto',
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '12px',
  color: 'white',
  mt:'2%',
  mb:'2%',
  '@media (max-width:600px)': {
    width: '90%',
  },
};

export const ratingItemStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  mb: 2,
};


export const ratingComponentStyles: SxProps = {
  color: 'white',
  '& .MuiRating-iconHover': { color: 'yellow' },
};


export const progressBoxStyles: SxProps = {
  width: '770px',
  height: 'auto',
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '12px',
  color: 'white',
  mt:'2%',
  mb:'2%',
  '@media (max-width:600px)': {
    width: '90%',
  },
};


export const progressItemStyles: SxProps = {
  mb: 2,
};


export const progressBarStyles: SxProps = {
  height: '10px',
  borderRadius: '5px',
  backgroundColor: 'green',
};

export const favoritePlaneStyles: SxProps = {
  width: '660px',
  height: '370px',
  backgroundColor: 'black',
  backgroundSize: 'cover',
  padding: '20px',
  borderRadius: '12px',
  color: 'white',
  backgroundImage: 'url(/Images/turkish-fav-plane.jpg)',
  mt:'2%',
  mb:'2%',
  '@media (max-width:600px)': {
    width: '90%',
    height: 'auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
};


export const weatherBoxStyles: SxProps = {
  width: '660px',
  height: '30%',
  backgroundColor: 'black',
  backgroundImage: 'url(/Images/clouds.gif)',
  backgroundSize: 'cover',
  padding: '20px',
  borderRadius: '12px',
  color: 'white',
  '@media (max-width:600px)': {
    width: '90%',
    height: 'auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
};

export const iconStyles: SxProps = {
  fontSize: '2rem',
  ml: 2,
  color: 'white',
};


export const statusIconStyles: SxProps = {
  fontSize: '2rem',
  ml: 2,
  color: '#4caf50',
};


export const submitButtonStyles: SxProps = {
  width: '35%',
  height: '15%',
  backgroundColor: 'blueviolet',
  '@media (max-width:600px)': {
    width: '90%',
    height: 'auto',
  },
};
