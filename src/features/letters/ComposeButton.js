import { useState } from 'react';
import Button from '@mui/material/Button';
//import Slide from '@mui/material/Slide';

import { NewLetter } from './NewLetter';


export function ComposeButton({ rep }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        color="warning"
        open={open}
        onClick={handleClickOpen}
      >
        Write Letter
      </Button>
      {open && <NewLetter open={open} handleClose={handleClose} rep={rep}/>}
    </>
  );
}
