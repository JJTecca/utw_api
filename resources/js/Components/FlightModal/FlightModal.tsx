import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, CircularProgress, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

type FlightModalProps = {
    onClose: () => void;
    flightNumber: string;
    userId: number;
    open: boolean;
}

type FlightStatus = {
    success: boolean;
    message: string;
}

export const FlightModal = ({ onClose, flightNumber, userId, open }: FlightModalProps) => { 
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState<FlightStatus | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (open && flightNumber && userId) {
            checkFlightStatus();
        }
    }, [open, flightNumber, userId]);

    const checkFlightStatus = async () => {
        setLoading(true);
        setError(null);
        setStatus(null);

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            
            const response = await fetch('/dashboard/check-flight-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                },
                body: JSON.stringify({
                    userId: userId,
                    flightNumber: flightNumber
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                setStatus(data);
            } else {
                setError(data.message || 'Failed to check flight status');
            }
        } catch (err: any) {
            setError('Network error. Please try again.');
            console.error('Flight status check error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    backgroundColor: '#1e293b',
                    color: '#f1f5f9',
                    border: '1px solid #334155'
                }
            }}
        >
            <DialogTitle sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid #334155',
                padding: 2
            }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    ✈️ Flight Status
                </Typography>
                <IconButton onClick={onClose} sx={{ color: '#94a3b8', padding: 0.5 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ padding: 3, textAlign: 'center' }}>
                <Box sx={{ my: 2 }}>
                    <Typography variant="body1" sx={{ color: '#94a3b8', mb: 1 }}>
                        Checking flight number:
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#0ea5e9', fontWeight: 700, mb: 3 }}>
                        {flightNumber}
                    </Typography>
                </Box>

                {loading ? (
                    <Box sx={{ py: 4 }}>
                        <CircularProgress sx={{ color: '#0ea5e9', mb: 2 }} />
                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            Checking flight registration...
                        </Typography>
                    </Box>
                ) : error ? (
                    <Box sx={{ py: 3 }}>
                        <ErrorIcon sx={{ fontSize: 60, color: '#ef4444', mb: 2 }} />
                        <Typography variant="h6" sx={{ color: '#ef4444', mb: 1 }}>
                            Error
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {error}
                        </Typography>
                    </Box>
                ) : status ? (
                    <Box sx={{ py: 3 }}>
                        {status.success ? (
                            <>
                                <CheckCircleIcon sx={{ fontSize: 60, color: '#10b981', mb: 2 }} />
                                <Typography variant="h5" sx={{ color: '#10b981', fontWeight: 700, mb: 1 }}>
                                    ✅ IT'S REGISTERED
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                    Your flight is confirmed and registered in our system.
                                </Typography>
                            </>
                        ) : (
                            <>
                                <ErrorIcon sx={{ fontSize: 60, color: '#f59e0b', mb: 2 }} />
                                <Typography variant="h5" sx={{ color: '#f59e0b', fontWeight: 700, mb: 1 }}>
                                    ❌ NOT REGISTERED
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                    Flight number not found in your bookings.
                                </Typography>
                            </>
                        )}
                        {status.message && (
                            <Typography variant="caption" sx={{ color: '#64748b', mt: 2, display: 'block' }}>
                                {status.message}
                            </Typography>
                        )}
                    </Box>
                ) : null}
            </DialogContent>
        </Dialog>
    );
};