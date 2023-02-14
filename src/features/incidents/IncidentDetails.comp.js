import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
//import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export function IncidentDetails({ open, handleClose, incident }) {
  return (
    <Dialog open={open} onClose={handleClose} fullwidth='true' maxWidth={'lg'}>
      <DialogTitle sx={{ display:'flex', justifyContent:'space-between' }}>
        <Typography component='h3' variant='h4' sx={{ flexGrow: 1, textAlign:'center' }}>Incident Details</Typography>
        <IconButton onClick={handleClose} aria-label="cancel">
          <CancelOutlinedIcon />
        </IconButton>
      </DialogTitle>
      <Container maxWidth="xlg">
        <Box sx={{ px: 4 }}>
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
          <Typography noWrap >Sources: {incident.sources}</Typography>
        </Box>
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
