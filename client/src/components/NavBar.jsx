import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu'
import { MenuItem } from '@mui/material';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react'




function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const token = localStorage.getItem('token')
const isLoggedIn = token ? true : false 
const handleLogout = () => {
  localStorage.removeItem('token')
  window.location.reload()
}


  return (
    // <div>
    //   <nav>
    //       <ul>
    //         <li><Link to="/">Home</Link></li>
    //         { isLoggedIn ? (
    //           <>
    //           <li><Link to="/activities">My Activities</Link></li>
    //           <li><button href="#" onClick={() => handleLogout()}>Log Out</button></li>
    //          </>
    //         ) : (
    //           <>
    //             <li><Link to="/register">Register</Link></li>
    //             <li><Link to="/login">Login</Link></li>
    //           </>
    //         )}
    //       </ul>
    //     </nav>
    // </div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/activities'>Activities</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/quiz'>Quiz</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/register'>Register</MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
