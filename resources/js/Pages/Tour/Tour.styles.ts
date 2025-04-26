import { SxProps } from '@mui/material';

export const mainBoxStyles: SxProps = {
    position: 'relative',
    width: '90%',  // Adjusted for smaller screen sizes
    height: 'auto',  // Allowing content to expand
    margin: '0 auto',  // Center the box
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    padding: '10px',
};

export const headerBoxStyles: SxProps = {
    backgroundColor: 'turquoise',
    padding: '15px',
    marginBottom: '20px',
    fontSize: '1.2rem',
};

export const countryListStyles: SxProps = {
    height: '60vh',  // Limit height for scrolling, adjusts with the screen size
    backgroundColor: 'white',
    borderRadius: 2,
    overflowY: 'auto',
    padding: '10px',
    '&::-webkit-scrollbar': { 
        width: '12px',  // Slightly smaller scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ccc',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f0f0f0',
    },
    '@media (max-width: 600px)': {
        height: '50vh', // Slightly smaller scrollable area on smaller screens
    },
};

export const attractionBoxStyles: SxProps = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: 2,
    overflowY: 'auto',
    maxHeight: '50vh',  // Make sure attractions are scrollable
    '&::-webkit-scrollbar': { 
        width: '12px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ccc',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f0f0f0',
    },
};

export const cardContainerStyles: SxProps = {
    position: 'relative',
    display: 'flex',
    padding: 6,
    gap: 9,
    flexWrap: 'wrap',
    marginTop: '10px',  // Space between country list and cards
    overflowY: 'scroll',
    '@media (max-width: 600px)': {
        flexDirection: 'column',  // Stack the cards vertically on mobile
        alignItems: 'center',  // Center the cards on small screens
    }
};
