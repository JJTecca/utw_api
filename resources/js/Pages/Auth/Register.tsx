import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link, CircularProgress, FormGroup } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import { Head, useForm } from '@inertiajs/react';
import GuestLayoutRight from '@/Layouts/GuestLayoutRight';
import countries from 'world-countries';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '', 
        country: '', 
        gender: '',
        agreeToTerms: false as boolean, 
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => window.location.href = route('dashboard'), // asta e pentru ruta la /dashboard
        });
    };

    const handleGender = (gender : string) => {
        setData('gender',gender);
    }

    return (
        <GuestLayoutRight>
            <Head title="Register" />

            <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, textAlign: 'center' }}>
                <FlightIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" gutterBottom>
                    Join the Crew
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        label="First Name"
                        fullWidth
                        margin="normal"
                        value={data.firstName}
                        onChange={(e) => setData('firstName', e.target.value)}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        required
                    />

                    <TextField
                        label="Last Name"
                        fullWidth
                        margin="normal"
                        value={data.lastName}
                        onChange={(e) => setData('lastName', e.target.value)}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        required
                    />

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
                    />

                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        error={!!errors.password_confirmation}
                        helperText={errors.password_confirmation}
                        required
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel id="country-select-label">Country</InputLabel>
                        <Select
                            label="Country"
                            labelId="country-select-label"
                            type="country"
                            id="country-select"
                            value={data.country}
                            onChange={(e) => setData('country', e.target.value)}
                        >
                            {countries.map((country) => (
                                <MenuItem key={country.cca2} value={country.cca2}>
                                    {country.name.common} 
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h5" sx={{ mb: 2, fontSize:"1.5rem"}}> 
                            Gender
                        </Typography>
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        checked={data.gender === 'male'}
                                        onChange={() => handleGender('male')}
                                    />
                                }
                                label="Male"
                                sx={{ ml: 0 }} 
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={data.gender === 'female'}
                                        onChange={() => handleGender('female')}
                                    />
                                }
                                label="Female"
                                sx={{ ml: 0 }} 
                            />
                    </Box>

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="agreeToTerms"
                                checked={data.agreeToTerms}
                                onChange={(e) => setData('agreeToTerms', e.target.checked)}
                                required
                            />
                        }
                        label="I agree to the terms and conditions"
                        sx={{ mt: 2 }}
                    />

                    {/* Register Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        disabled={!data.agreeToTerms} // !0 = 1
                    >
                        {processing ? <CircularProgress size={24} /> : 'Register'}
                    </Button>

                    {/* Link to Login Page */}
                    <Typography variant="body2" sx={{ mt: 3 }}>
                        Already have an account?{' '}
                        <Link href={route('login')} sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            Log in
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </GuestLayoutRight>
    );
}