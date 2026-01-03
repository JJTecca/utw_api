import React, { PropsWithChildren } from 'react';
import { DialogTitle, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DialogContent } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { AttachMoney, TrendingUp, History } from '@mui/icons-material';
import ReactDOM from 'react-dom';
import { styles } from './styles'; 


type InfoModalProps = {
    onClose?: () => void;
}

export const InfoModal =({onClose}:InfoModalProps)=> { 
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
                        Info on your flight options
                        </Typography>
                        <IconButton  sx={{ color: '#94a3b8' }} onClick={onClose}>
                            <AddIcon sx={{ transform: 'rotate(45deg)' }}/>
                            
                        </IconButton>
                </DialogTitle>

                <DialogContent sx={{ padding: 3, color: '#cbd5e1' }}>
                    <Tabs 
                        value={tab}
                        onChange={(e, newValue) => setTab(newValue)}
                        sx={{ 
                            borderBottom: 1, 
                            borderColor: 'divider',
                            '& .MuiTab-root': {
                            color: '#94a3b8',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 500,
                            },
                            '& .Mui-selected': {
                            color: '#0ea5e9',
                            },
                            '& .MuiTabs-indicator': {
                            backgroundColor: '#0ea5e9',
                            }
                        }}
                    >
                        <Tab label="First class"  iconPosition="start" />
                        <Tab label="Business class"  iconPosition="start" />
                        <Tab label="Economy class"  iconPosition="start" />
                    </Tabs>
                    {tab === 0 && (
                        <div>
                            <h1>First class</h1>
                            <p>
                                Experience the pinnacle of luxury and comfort with our First Class option. 
                                Enjoy spacious seating, gourmet dining, and personalized service that caters to your every need. 
                                Relax in a private suite, stay connected with in-flight Wi-Fi, 
                                and arrive refreshed and ready for your journey.
                            </p>
                        </div>
                    )}
                    {tab === 1 && (
                        <div>
                            <h1>Business class</h1>
                            <p>
                                Elevate your travel experience with our Business Class option.
                                Enjoy enhanced comfort with spacious seating, premium dining options, 
                                and access to exclusive lounges. Stay productive with ample workspace and
                                in-flight connectivity, ensuring you arrive at your destination ready to take on the day.
                            </p>
                        </div>
                    )}
                    {tab === 2 && (
                        <div>
                            <h1>Economy class</h1>
                            <p>
                                Travel affordably without compromising on comfort with our Economy Class option.
                                Enjoy a comfortable seat, a variety of meal options, and attentive service throughout your flight.
                                Stay entertained with our in-flight entertainment system and arrive at your destination refreshed.
                            </p>
                        </div>
                    )}

                </DialogContent>
            </div>
        </div>,
        document.body
    );
}