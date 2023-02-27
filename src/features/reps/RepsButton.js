import { useState } from 'react';
import Button from '@mui/material/Button';
import { RepsList } from './RepsList.comp';

export function RepsButton(address) {
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
        color="secondary"
        size="small"
        whiteSpace="no-wrap"
        open={open}
        onClick={handleClickOpen}
      >
        View Reps
      </Button>
      {open && (
        <RepsList open={open} handleClose={handleClose} address={address} />
      )}
    </>
  );
}
