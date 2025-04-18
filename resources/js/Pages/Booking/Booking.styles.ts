import { submitButtonStyles } from "../ProfileMenu/ProfileMenu.styles";

// styles/Booking.styles.ts
export const styles = {
    mapContainer: {
        position: 'absolute',
        top: '5%',
        left: '1%',
        height: '45%',
        width: '38%',
        backgroundColor: 'gray',
        borderRadius: '15px',
        mt: '1%'
    },

    whyContainer: {
        position: 'absolute',
        top: '56%',
        left: '1%',
        height: '42%',
        width: '38%',
        background: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },

    whyTitle: {
        position: 'absolute',
        top: '5%',
        left: '34%',
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#ffffff',
    },

    navButton: {
        backgroundColor: 'blue',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkblue',
        },
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
    },

    textBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '20%',
        top: '20%',
        width: '60%',
        height: '75%',
    },

    mainPanel: {
        position: 'absolute',
        top: '5%',
        left: '40%',
        height: '60%',
        width: '55%',
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: 3,
        overflowY: 'auto',
    },

    panelHeader: {
        backgroundColor: 'turquoise',
        borderRadius: '8px',
        padding: '12px 20px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    accordion: {
        mb: 3,
        border: '1px solid whitesmoke',
        borderRadius: '8px',
        backgroundColor: 'ghostwhite',
        '&:hover': {
            transform: 'translateY(-2px)',
            backgroundColor: 'white'
        },
    },

    cityBox: {
        textAlign: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    experienceBox: {
        textAlign: 'center',
        flex: 1,
        mx: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    experienceTag: {
        fontWeight: 'bold',
        color: 'dodgerblue',
        backgroundColor: 'aliceblue',
        borderRadius: '8px',
        px: 2,
        py: 1,
        display: 'inline-block',
        fontSize: '1.2rem',
        border: '1px solid lightblue'
    },

    iconStyles: {
        fontSize: '2rem',
        mb: 1
    },

    subtitleStyles: {
        color: 'gray',
        fontSize: '1.2rem',
        mb: 1,
        fontWeight: 'bold'
    },

    cityNameStyles: {
        fontWeight: 'bold',
        color: 'navy',
        fontSize: '1.4rem'
    },

    descriptionText: {
        mb:'3%',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },

    // New styles for TextBox component
    textBoxCard: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        borderRadius: '20px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },

    textBoxHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        backgroundColor: 'turquoise',
        borderRadius: '12px',
        padding: '20px',
    },

    textBoxContent: {
        padding: '20px',
        borderRadius: '15px',
    },

    textBoxTitle: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'black',
        textTransform: 'uppercase',
    },

    textBoxDescription: {
        fontSize: '1.25rem',
        padding: '10px',
    },

    textBoxActions: {
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '10px',
    },

    submitButtonStyles : {
        position:'absolute',
        top:'75%',
        right:'2%',
        width:'35%',
        height:'15%',
        backgroundColor:'blueviolet'
    }
};