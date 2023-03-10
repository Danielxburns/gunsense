import { useSelector /* useDispatch  */ } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectAllReps /* fetchReps */ } from './repsSlice';

import { RepCard } from './RepCard';

//import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export function RepsList({ open, handleClose, address }) {
  /* const dispatch = useDisatch(); */
  const [reps, setReps] = useState(<Box />);
  const repsStatus = useSelector((state) => state.reps.status);

  useEffect(() => {
    if (repsStatus === 'fetching reps') {
      setReps(
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    } else if (repsStatus === 'succeeded') {
      setReps(<ListOfReps />);
    } else if (repsStatus === 'failed') {
      setReps(<Typography>failed to load representatives</Typography>);
    }
  }, [repsStatus]);

  return (
    <Container maxWidth="lg">
      <Dialog
        open={open}
        onClose={handleClose}
        fullwidth="true"
        maxWidth="md"
        scroll="paper"
      >
        <DialogActions sx={{ position: 'absolute', top: 0, right: 0 }}>
          <IconButton onClick={handleClose} aria-label="close">
            <CancelOutlinedIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle
          variant="h5"
          sx={{ textAlign: 'center' }}
          divider={true}
        >
          <div>Representatives List</div>
        </DialogTitle>
        <DialogContent dividers={true}>
          <Box /* sx={{ mt: 3 }} */>
            {reps}
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

function ListOfReps() {
  const reps = useSelector(selectAllReps);
  return (
    <List>
      {reps.map((rep, index) => (
        <ListItem key={index} divider={true}>
          <RepCard rep={rep} />
        </ListItem>
      ))}
    </List>
  );
}
