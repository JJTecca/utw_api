import React, { PropsWithChildren } from 'react';
import { DialogTitle, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DialogContent } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { AttachMoney, TrendingUp, History } from '@mui/icons-material';
import ReactDOM from 'react-dom';
import { styles } from './styles'; 
import { FirstClassText } from './FirstClassText';
import { BusinessClassText } from './BusinessClassText';
import { EconomyClassText } from './EconomyClassText';


type ReviewBoardsProps = {
    onClose?: () => void;
    classId?: number;
}

export function ReviewBoards({ onClose, classId }: ReviewBoardsProps) { 
    
    switch (classId) {
        case 1:
            {
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
                            Here are the most representative reviews for your selected class
                            </Typography>
                            <IconButton  sx={{ color: '#94a3b8' }} onClick={onClose}>
                                <AddIcon sx={{ transform: 'rotate(45deg)' }}/>
                            </IconButton>
                        </DialogTitle>
                        <FirstClassText />
                    </div>
                </div>,
                document.body
                );
            }
        case 2:
            {
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
                            Here are the most representative reviews for your selected class
                            </Typography>
                            <IconButton  sx={{ color: '#94a3b8' }} onClick={onClose}>
                                <AddIcon sx={{ transform: 'rotate(45deg)' }}/>
                            </IconButton>
                        </DialogTitle>
                        <BusinessClassText />
                    </div>
                </div>,
                document.body
                );
            }
            case 3:
                {
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
                                Here are the most representative reviews for your selected class
                                </Typography>
                                <IconButton  sx={{ color: '#94a3b8' }} onClick={onClose}>
                                    <AddIcon sx={{ transform: 'rotate(45deg)' }}/>
                                </IconButton>
                            </DialogTitle>
                            <EconomyClassText />
                        </div>
                    </div>,
                document.body
                );
            }
        }
    console.log("No matching classId found in ReviewBoards");
    return null;
}