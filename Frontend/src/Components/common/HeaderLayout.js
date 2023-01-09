import React from 'react';
import {AppBar, Avatar, Box, Button, Container, IconButton, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const HeaderLayout=()=>{

    return (

        <Box>
        <AppBar component="nav" >

            <Toolbar style={{backgroundColor:"#000000"}}>

                <CheckroomIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'White',
                        textDecoration: 'none',
                    }}
                >
                    RM Fashion
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Tabs aria-label="icon label tabs example">
                    <Tab  sx={{

                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'White',
                        textDecoration: 'none',
                    }} icon={<FavoriteBorderIcon />} label="Wishlist" />
                    <Tab sx={{

                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'White',
                        textDecoration: 'none',
                    }} icon={<LocationOnIcon />} label="Track Order" />
                    <Tab sx={{

                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'White',
                        textDecoration: 'none',
                    }} icon={<LoginIcon />} label="Signup/Login" />
                    <Tab  sx={{

                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'White',
                        textDecoration: 'none',
                    }} icon={<PersonOutlineIcon />} label="Profile" />
                </Tabs>
                </Box>
            </Toolbar>

        </AppBar>
    </Box>
      );

}

export default HeaderLayout;