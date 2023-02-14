import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export function IncidentDetails({ open, handleClose, incident }) {
  return (
    <Dialog open={open} onClose={handleClose} fullwidth="true" maxWidth={'lg'}>
      <CssBaseline />
      <DialogActions>
        <IconButton onClick={handleClose} aria-label="cancel">
          <CancelOutlinedIcon />
        </IconButton>
      </DialogActions>
      <Container maxWidth="xlg">
        <DialogTitle>
          <Typography
            component="h1"
            variant="h5"
            sx={{ textAlign: 'center' }}
          >
            Incident Details
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 3, px: 4 }}>
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
            <Typography noWrap>Sources: {incident.sources}</Typography>
          </Box>
        </DialogContent>
      </Container>
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
