import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewLetter } from './lettersSlice'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}); 

export function NewLetter({ open, handleClose, rep }) {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.users.currentUser)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
 
    const dataObj = Object.fromEntries(data.entries());
    dispatch(postNewLetter(dataObj));
    handleClose();
  };

  return(
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
    <Container maxWidth='lg'>
    <DialogActions>
      <IconButton onClick={handleClose} aria-label="close">
        <CancelOutlinedIcon />
      </IconButton>
    </DialogActions>
      <CssBaseline />
      <DialogTitle variant="h5" sx={{ textAlign: 'center' }}>
        {rep && <div>
          Letter to {rep.title} {rep.name}
        </div>}
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}
        sx={{ my: 3, px: 4, display: 'flex', flexDirection: 'column' }}>
          <div>From: <TextField required variant="standard" size="small" name="sender" defaultValue={user ? user.email : 'user not logged in'} /></div>
          <div>To: <TextField required variant="standard" size="small" name="recipient" defaultValue={rep ? `${rep.name}` : 'none selected'} /></div>
          <div>Date: <TextField required variant="standard" size="small" name="date" defaultValue={new Date().toLocaleDateString()} /> </div>
          <TextField required multiline rows={5} sx={{ mt:3 }}
          name="body" label="Body" id="body" defaultValue={'Dear Government Official, \n'}></TextField>
          <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, maxWidth: 100 }}
        >
          Send
        </Button>
        </Box>
      </DialogContent>

    </Container>
  </Dialog>
  )
}