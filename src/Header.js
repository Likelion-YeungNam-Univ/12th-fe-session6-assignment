// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#FFFFFF' }}>
      <Toolbar>
        <IconButton edge="start" style={{ color: '#FF0000' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
          YouTube Premium
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
