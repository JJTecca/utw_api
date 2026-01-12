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

export const FlightModal =({onClose}:DocumentsModalProps)=> { 
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
                        
                        <IconButton  sx={{ color: '#94a3b8' }} onClick={onClose}>
                            <AddIcon sx={{ transform: 'rotate(45deg)' }}/>
                            
                        </IconButton>
                </DialogTitle>

                <DialogContent sx={{ padding: 3, color: '#cbd5e1' }}>
                    <p>
                        This is your modal
                    </p>
                </DialogContent>
            </div>
        </div>,
        document.body
    );
}