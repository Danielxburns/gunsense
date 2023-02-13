import { useSelector } from 'react-redux';
import { selectIncidentById } from './incidentsSlice';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { IncidentDetails } from './IncidentDetails.comp';

export function IncidentButton({incidentId}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const incident = useSelector((state) =>
  selectIncidentById(state, incidentId)
  );

  return (
    <>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        Incident Details
      </Button>
      {open && <IncidentDetails
        open={open}
        handleClose={handleClose}
        incident={incident}
      />}
    </>
  );
}
