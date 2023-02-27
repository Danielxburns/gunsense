import {
  /* signInWithGooglePopup, */
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function SignIn({ open, handleClose, handleOpenSignUp }) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      /* handleClose(); */
    } catch (error) {
      if(error.code === 'auth/user-not-found') {
        alert('User not found. \nPlease sign up,\nor try a different account')
      } else if (error.code === 'auth/wrong-password') {
        alert('Wrong password. Try again.')
      }
      console.log("error code: ", error.code, "error message: ", error.message);
    }
  };

/*   const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      dispatch(getUserData(user))
    } catch (error) {
      console.log('error signing in with Google :>> ', error.message);
    }
  }; */

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogActions>
        <IconButton onClick={handleClose} aria-label="cancel">
          <CancelOutlinedIcon />
        </IconButton>
      </DialogActions>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <DialogTitle variant="h5">
            <div variant="h5">Sign in</div>
          </DialogTitle>
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button> */}
              <Grid container>
                <Grid item>
                  <Button variant="body2" onClick={handleOpenSignUp}>
                    Don't have an account? Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </Box>
      </Container>
    </Dialog>
  );
}
