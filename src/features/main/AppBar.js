import { useState } from 'react';
import { useSelector } from 'react-redux';
import { signOutUser } from '../../utils/firebase.utils';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import 'typeface-anton';

import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';
import { Actions } from './Actions';
import { About } from './About';

export default function ButtonAppBar() {
  const currentUser = useSelector((state) => state.users.currentUser);

  /* ------- SIGN-IN/SIGN-UP DIALOGS ------- */
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

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

  const handleSignOut = async () => {
    await signOutUser()
  }

  /* ------------- APP BAR POPPER STATE ------------ */
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAbout, setOpenAbout] = useState(false);
  const [openActions, setOpenActions] = useState(false);

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
          <Button color="inherit" type="button">
            Statistics{' '}
          </Button>
          <Button
            color="inherit"
            type="button"
            onClick={handleActionsPopperClick}
          >
            Actions{' '}
          </Button>
          <Popper
            id="actions"
            sx={{ width: '50%' }}
            open={openActions}
            anchorEl={anchorEl}
            placement="bottom-end"
          >
            <Actions />
          </Popper>
          <Button color="inherit" type="button">
            Resources{' '}
          </Button>
          <Button
            color="inherit"
            type="button"
            onClick={handleAboutPopperClick}
          >
            About{' '}
          </Button>
          <Popper
            id="about"
            sx={{ width: '50%' }}
            open={openAbout}
            anchorEl={anchorEl}
            placement="bottom-end"
          >
            <About />
          </Popper>
          {currentUser? (
            <Box>
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </Box>
          ) : (
            <Box>
              <Button color="inherit" onClick={handleClickOpenSignIn}>
                Sign-In{' '}
              </Button>
              <SignIn
                open={openSignIn}
                handleClose={handleClose}
                handleOpenSignUp={handleClickOpenSignUp}
              />
              <Button color="inherit" onClick={handleClickOpenSignUp}>
                Sign-Up
              </Button>
              <SignUp
                open={openSignUp}
                handleClose={handleClose}
                handleOpenSignIn={handleClickOpenSignIn}
              />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
