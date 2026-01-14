import React from "react";
import { Typography } from "@mui/material";
import { DialogContent } from '@mui/material';
import { styles } from '../InfoModal/styles';

export const BusinessClassText = () => {
    return (
        <DialogContent sx={{ padding: 3, color: '#cbd5e1' }}>
            <Typography>
                <ul>
                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6>"Comfortable, efficient, and classy." — Marcus Hale</h6>
                        <p>
                            The seat was spacious, the food was great, and the service was consistently attentive. 
                            Perfect balance between comfort and productivity.
                        </p>
                    </li>

                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6> "A great upgrade for long flights." — Priya Deshmukh</h6>
                        <p>
                            The lie‑flat seat made a huge difference. I slept for six hours straight and woke up feeling refreshed. 
                            The entertainment system had plenty of options too.
                        </p>
                    </li>

                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6>"Professional service with a premium feel." — Daniel Kovács</h6>
                        <p>
                            Everything ran smoothly — boarding, meals, and even the Wi‑Fi. It felt like a premium experience without being over the top.
                        </p>
                    </li>

                </ul>
            </Typography>
        </DialogContent>
    );
}