import React from "react";
import { Typography } from "@mui/material";
import { DialogTitle, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DialogContent } from '@mui/material';
import { styles } from '../InfoModal/styles';

export const FirstClassText = () => {
    return (
        <DialogContent sx={{ padding: 3, color: '#cbd5e1' }}>
            <Typography>
                <ul>
                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6>“A flawless experience from gate to landing.” — Elena Marlowe</h6>
                        <p>
                            The cabin felt like a private suite in the sky. The staff anticipated every need without being intrusive, 
                            and the meals tasted like something from a high‑end restaurant. I actually forgot I was on a plane.
                        </p>
                    </li>

                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6>“Worth every cent.” — Jonathan Pierce</h6>
                        <p>
                            From the moment I stepped onboard, everything felt premium — the champagne, the bedding, 
                            the silence. The lie‑flat bed was more comfortable than some hotel rooms I’ve stayed in.
                        </p>
                    </li>

                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6>“Luxury done right.” — Sofia Bennett</h6>
                        <p>
                            The attention to detail was incredible. Warm towels, 
                            personalized greetings, and a menu that felt curated just for me. 
                            I arrived rested and genuinely happy.
                        </p>
                    </li>
                
                </ul>
                
            </Typography>         
        </DialogContent>
    );
}