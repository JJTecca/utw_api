import { SxProps } from '@mui/material';

export const mainBoxStyles: SxProps = {
    position: 'absolute',
    width: '30%',
    height: '65%',
    left: '8%',
    top: '15%',
    mx: 'auto',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
};

export const headerBoxStyles: SxProps = {
    backgroundColor: 'turquoise',
    padding: '20px',
    mb: 5
};

export const countryListStyles: SxProps = {
    height: '75%',
    backgroundColor: 'white',
    borderRadius: 2,
    overflowY: 'auto',
    '&::-webkit-scrollbar': { 
        width: '20px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ccc',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f0f0f0',
    }
};

export const cardContainerStyles: SxProps = {
    position: 'absolute',
    top: '5%',
    left: '52%',
    width: '40%',
    height: '90%',
    backgroundColor: 'white',
    display: 'flex',
    padding: 6,
    gap: 9,
    flexWrap: 'wrap',
    overflowY: 'scroll'
};