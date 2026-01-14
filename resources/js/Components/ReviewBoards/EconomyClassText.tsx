import React from "react";
import { Typography } from "@mui/material";
import { DialogContent } from '@mui/material';
import { styles } from '../InfoModal/styles';

export const EconomyClassText = () => {
    return (
        <DialogContent sx={{ padding: 3, color: '#cbd5e1' }}>
            <Typography>
                <ul>
                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6>"Surprisingly comfortable for the price." — Laura Kim</h6>
                        <p>
                            Legroom was decent, the seats were supportive, and the cabin crew stayed friendly throughout the flight. 
                            Great value overall.
                        </p>
                    </li>

                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6> "Clean, organized, and efficient." — Matei Ionescu</h6>
                        <p>
                            Boarding was quick, the cabin was spotless, and the staff handled everything with a smile. 
                            The flight felt smooth from start to finish.
                        </p>
                    </li>

                    <li style={{paddingBottom: '10px',paddingTop: '10px',}}>
                        <h6> "Good experience for a long-haul flight." — Hannah O’Reilly</h6>
                        <p>
                            The entertainment selection kept me busy, and the meals were better than expected. 
                            I’d definitely fly Economy with this airline again.
                        </p>
                    </li>

                </ul>
            </Typography>
        </DialogContent>
    );
}