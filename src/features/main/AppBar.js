import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import 'typeface-anton';

import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';
import { Actions } from './Actions';
import { About } from './About';

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

  /* ------------- POPPER STATE ------------ */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openActions, setOpenActions] = React.useState(false);

  const handleAboutPopperClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenAbout(!openAbout);
  };
  const handleActionsPopperClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenActions(!openActions);
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
          <Button color="inherit" type="button" >Statistics </Button>
          <Button color="inherit" type="button" onClick={handleActionsPopperClick}>
            Actions{' '}
          </Button>
          <Popper id="actions" sx={{ width:'50%' }} open={openActions} anchorEl={anchorEl} placement="bottom-end" >
            <Actions />
          </Popper>
          <Button color="inherit" type="button" >Resources </Button>
          <Button color="inherit" type="button" onClick={handleAboutPopperClick}>
            About{' '}
          </Button>
          <Popper id="about" sx={{ width:'50%' }} open={openAbout} anchorEl={anchorEl} placement="bottom-end" >
            <About />
          </Popper>
          <Button color="inherit" onClick={handleClickOpenSignIn}>
            Sign-In{' '}
          </Button>
          <SignIn open={openSignIn} handleClose={handleClose} />
          <Button color="inherit" onClick={handleClickOpenSignUp}>
            Sign-Up
          </Button>
          <SignUp open={openSignUp} handleClose={handleClose} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
