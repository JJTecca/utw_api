import { SxProps } from "@mui/material";

export const mainBoxStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  padding: '24px',
  overflowY: 'auto',
  maxHeight: '100vh',
  '@media (max-width: 800px)': {
    padding: '16px',
    gap: 3,
  },
});

export const secondaryBoxStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  rowGap: 30,
  columnGap: 10,
  width: '100%',
  maxWidth: '1000px',
});
export const NextButtonStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  position: 'fixed',
  top: '10px',                   // fixed near the top, with some spacing
  right: '10px',                 // fixed near the right edge
  height: '50px',
  width: '120px',
  borderRadius: '25px',
  backgroundColor: 'black',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  '@media (max-width: 600px)': {
    width: '100px',
    height: '45px',
    top: '5px',
    right: '5px',
  },
});

export const PreviousButtonStyles: (activeIndex: number) => SxProps = (activeIndex) => ({
  position: 'fixed',
  top: '10px',                   // fixed near the top, same vertical position as Next button
  left: '10px',                  // fixed near the left edge
  height: '50px',
  width: '120px',
  borderRadius: '25px',
  backgroundColor: 'black',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  '@media (max-width: 600px)': {
    width: '100px',
    height: '45px',
    top: '5px',
    left: '5px',
  },
});

