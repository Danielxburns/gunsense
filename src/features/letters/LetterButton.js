import { useState } from 'react';

import Button from '@mui/material/Button';

import { Letter } from './Letter';

export function LetterButton({letter}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        View Letter
      </Button>
      {open && <Letter
        open={open}
        handleClose={handleClose}
        letter={letter}
      />}
    </>
  );
}
