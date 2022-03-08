import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logOutUser } from "../../redux/actions/actions";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import './navBar.css'


function NavBar() {


  const dispatch = useDispatch()
  // redux hook useSelector, sharing weather or not a user is logged in
  // takes selector function as argument
  const {user, isChecked} = useSelector(state => state.user)

  // state for opening and closing dropdown menus 
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClose = () => {
    setAnchor(null);
  };

  // determining if the user is logged in 
  const isLoggedIn = isChecked && user ? true : false;

  const handleLogout = () => {
    // tells redux to remove token from local storage
    dispatch(logOutUser())
    navigate("/");
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
        <Toolbar>
          <IconButton
            id="demo-positioned-button"
            // if true look to menu-dropdown 
            aria-controls={open ? "menu-dropdown" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Menu
          </IconButton>
          <Menu
            id="menu-dropdown"
            aria-labelledby="dropdown-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/quiz">
              Quiz
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/register">
              Register
            </MenuItem>
            
          </Menu>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {/* is a user logged in? */}
          { isLoggedIn ? (
            // if true
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchor)}
                onClose={handleProfileClose}
              >
                {/* display user name in dropdown */}
                <MenuItem>{user.user_name}</MenuItem>
                <MenuItem onClick={handleProfileClose} component={Link} to="/activities">
                  My Activities
                </MenuItem>
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            // if false
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
