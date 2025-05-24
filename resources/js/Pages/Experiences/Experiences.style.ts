import { SxProps } from "@mui/material";

export const mainBoxStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflowY: 'auto',
  maxHeight: '100vh',
  padding: '24px',
  gap: 4,
  '@media (max-width: 800px)': {
    position: 'relative',
    padding: '16px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export const secondaryBoxStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  position: 'relative',
  top: activeIndex === 3 ? '20%' : '20%',
  right: activeIndex === 3 ? '45%' : '5%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: '500px',
  overflowY: 'auto',
  paddingBottom: '2rem',
  '@media (max-width: 800px)': {
    position: 'relative',
    top: '20%',
    right: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: '100%',
  },
});

export const NextButtonStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  position: 'absolute',
  alignSelf: 'flex-end',
  width: '140px',
  height: 'auto',
  minHeight: '50px',
  borderRadius: '25px',
  backgroundColor: 'black',
  right: '5%',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '20px',   
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  '@media (max-width: 800px)': {
    width: '140px',
    height: 'auto',
    minHeight: '50px',
    borderRadius: '25px',
    marginTop: '16px',
  },
});

export const PreviousButtonStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  position: 'absolute',
   
  alignSelf: 'flex-start', 
  width: '140px',
  height: 'auto',
  minHeight: '50px',
  borderRadius: '25px',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '20px',  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  '@media (max-width: 800px)': {
    width: '140px',
    height: 'auto',
    minHeight: '50px',
    borderRadius: '25px',
    marginTop: '16px',
  },
});