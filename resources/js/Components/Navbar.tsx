import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export const Navbar = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ justifyContent: "space-between" }}> 
        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <FlightTakeoffIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            UTW Airlines
          </Typography>
        </Box>

        <Box>
          <Button color="inherit">About</Button>
          <Button color="inherit">Settings</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;