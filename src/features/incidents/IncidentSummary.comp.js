import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { IncidentDetailsButton } from './IncidentDetailsButtton';


export function IncidentSummary({incident}) {
  const { id, date, city, state, address, killed, injured } = incident
  return(
    <Box sx={{}}>
      <Paper /* variant="outlined"  */elevation={0}>
      <Typography>{date}</Typography>
      <Typography>{city}</Typography>
      <Typography>{state}</Typography>
      <Typography>{address}</Typography>
      <Typography>Killed: {killed}</Typography>
      <Typography>Injured: {injured}</Typography>
      <IncidentDetailsButton incidentId={id.$oid} />
      </Paper>
    </Box>
  )
}