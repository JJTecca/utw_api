import React, { PropsWithChildren } from 'react';
import { DialogTitle, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DialogContent } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { AttachMoney, TrendingUp, History } from '@mui/icons-material';
import ReactDOM from 'react-dom';
import { styles } from './styles'; 


type DocumentsModalProps = {
    onClose?: () => void;
}

export const DocumentsModal =({onClose}:DocumentsModalProps)=> { 
    const[tab, setTab] = React.useState(0);
    
    return ReactDOM.createPortal(
        <div style={styles.modalWrapper}>
            <div style={styles.modal}>
                <DialogTitle sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderBottom: '1px solid #334155',
                        padding: 3
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#f1f5f9' }}>
                        Doccuments youneed for your flight
                        </Typography>
                        <IconButton  sx={{ color: '#94a3b8' }} onClick={onClose}>
                            <AddIcon sx={{ transform: 'rotate(45deg)' }}/>
                            
                        </IconButton>
                </DialogTitle>

                <DialogContent sx={{ padding: 3, color: '#cbd5e1' }}>
                    <p>
                    Here you can find all the necessary documents required for your flight. Please ensure you have the following documents ready before your departure:
                    </p>
                    <ol>
                        <li style={styles.listItems}>Passport: A valid passport is required for international travel.</li>
                        <li style={styles.listItems}>Visa: Depending on your destination, you may need a visa to enter the country.</li>
                        <li style={styles.listItems}>Boarding Pass: You will need your boarding pass to board the aircraft.</li>
                        <li style={styles.listItems}>Identification: A government-issued ID may be required for domestic flights.</li>
                    </ol>
                    <p>
                    Please make sure to check the specific requirements for your destination as they may vary. Safe travels!
                    </p>
                </DialogContent>
            </div>
        </div>,
        document.body
    );
}