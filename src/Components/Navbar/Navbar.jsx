import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Navbar/Navbar.css'
export default function Navbar() {
  return (
    <Box className='navbar'  sx={{ flexGrow: 1 }}>
      <AppBar position="static"   sx={{ backgroundColor: 'black', color: 'white' }} >
        <Toolbar>
     
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className='nav-logo' src="/nav-logo.png" alt="" />
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
