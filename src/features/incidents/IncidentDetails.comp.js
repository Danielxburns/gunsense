import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
//import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button'

export function IncidentDetails({ open, handleClose, incident }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Container maxWidth="xlg">
        <Box sx={{ p: 4 }}>
          <Typography>Date: {incident.date}</Typography>
          <Typography>Address: {incident.address}</Typography>
          <Typography>City: {incident.city}</Typography>
          <Typography>State: {incident.state}</Typography>
          <Typography>Notes: {incident.notes}</Typography>
          <Typography>Participants: </Typography>
          <Box sx={{ ml: 4, pt: 1 }}>
            {incident.participants.map((participant, index) => (
              <Participant participant={participant} key={index} />
            ))}
          </Box>
          <Typography>Sources: {incident.sources}</Typography>
        </Box>
      </Container>
      <DialogActions>
      <Button variant='outlined' onClick={handleClose}>Close</Button>
    </DialogActions>
    </Dialog>
  );
}

function Participant({ participant, index }) {
  return (
    <Box sx={{ pb: 2 }} key={index}>
      {Object.entries(participant).map(([key, value], idx) => (
        <Typography key={idx}>
          {key}: {value}
        </Typography>
      ))}
    </Box>
  );
}
