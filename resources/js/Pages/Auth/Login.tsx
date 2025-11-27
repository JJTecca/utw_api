import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { TextField, Button, Checkbox, FormControlLabel, CircularProgress, Typography, Box } from '@mui/material';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('login'), {
            onSuccess: () => {
                window.location.href = route('dashboard'); // redirect on success
            },
            onError: (errors) => {
                console.log('Login failed:', errors);
            },
    });
};


    return (
        <GuestLayout>
            <Head title="Log in" />

            <Box sx={{transform: 'scale(0.85)', mx: 'auto', mt: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Welcome Back
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                        size="small" 
                        sx={{ mb: 2 }} // Add bottom margin
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        required
                        size="small" 
                        sx={{ mb: 2 }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                size="small" 
                            />
                        }
                        label="Remember me"
                        sx={{ mb: 2, color: 'text.secondary' }} 
                    />

                    {/* LOG IN Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, py: 1, fontWeight: 'bold' }} 
                        disabled={processing}
                    >
                        {processing ? <CircularProgress size={24} /> : 'LOG IN'}
                    </Button>

                    {/* "New to the Crew?" and REGISTER Button */}
                    <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
                        New to the Crew?
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Link href={route('register')}>
                            <Button
                                variant="outlined" 
                                fullWidth
                                sx={{ py: 1, fontWeight: 'bold' }} 
                            >
                                REGISTER
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Link href={route('password.request')} style={{ textDecoration: 'none', color: 'primary.main' }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Forgot your password?
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </GuestLayout>
    );
}