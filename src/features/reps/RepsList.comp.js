import { useSelector /* useDispatch  */ } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectAllReps /* fetchReps */ } from './repsSlice';

import { RepCard } from './RepCard';

import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

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
    <Dialog open={open} onClose={handleClose} fullwidth="true" maxWidth="md">
      <CssBaseline />
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          component="h3"
          variant="h4"
          sx={{ flexGrow: 1, textAlign: 'center' }}
        >
          Representatives List
        </Typography>
        <IconButton onClick={handleClose} aria-label="cancel">
          <CancelOutlinedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{reps}</DialogContent>
    </Dialog>
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
