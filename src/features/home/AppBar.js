import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';

export default function ButtonAppBar() {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleClickOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleClose = () => {
    setOpenSignIn(false);
    setOpenSignUp(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            GunSense
          </Typography>
          <Button color="inherit" onClick={handleClickOpenSignIn}>
            Sign-In
          </Button>
          <SignIn open={openSignIn} handleClose={handleClose} />
          <Button color="inherit" onClick={handleClickOpenSignUp}>
            Sign-Up
          </Button>
          <SignUp open={openSignUp} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
