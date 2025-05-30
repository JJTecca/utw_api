import { SxProps } from "@mui/material";

export const mainBoxStyles: (activeIndex : number) => SxProps = (activeIndex) => ({
    position: 'fixed', //pozitia ramane fixa , sa vedem
    top: activeIndex === 3 ? '8%' : '5%',
    right: activeIndex === 3 ? '60%' : '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 2
});

export const secondaryBoxStyles: (activeIndex : number) => SxProps = (activeIndex) => ({
    position: 'fixed',
    top: activeIndex === 3 ? '20%' : '20%',
    right: activeIndex === 3 ? '45%' : '5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    maxWidth: '1000px',
    rowGap: 30,
    columnGap: 10,
});

export const NextButtonStyles: (activeIndex : number) => SxProps = (activeIndex) => ({
    position: 'fixed',
    top: activeIndex === 3 ? '40%' : '50%',
    right: activeIndex === 3 ? '45%' : '2%',
    height: '60px',
    width: '130px',
    borderRadius: '30px',
    backgroundColor: 'black',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});

export const PreviousButtonStyles: (activeIndex : number) => SxProps = (activeIndex) => ({
    position: 'fixed',
    top: activeIndex === 3 ? '40%' : '50%',
    right: activeIndex === 3 ? '90%' : '50%',
    height: '60px',
    width: '130px',
    borderRadius: '30px',
    backgroundColor: 'black',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        '&:hover': {
             backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
});