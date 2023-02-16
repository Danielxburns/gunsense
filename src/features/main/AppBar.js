import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';
import 'typeface-anton';
import Container from '@mui/material/Container';

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
    <AppBar position="static">
      <Container maxWidth="xlg">
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            sx={{ flexGrow: 1, fontFamily: 'anton' }}
          >
            GunSense
          </Typography>
          <Button color="inherit">Statistics </Button>
          <Button color="inherit">Actions </Button>
          <Button color="inherit">Resources </Button>
          <Button color="inherit">About </Button>
          <Button color="inherit" onClick={handleClickOpenSignIn}>Sign-In </Button>
          <SignIn open={openSignIn} handleClose={handleClose} />
          <Button color="inherit" onClick={handleClickOpenSignUp}>Sign-Up
          </Button>
          <SignUp open={openSignUp} handleClose={handleClose} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
