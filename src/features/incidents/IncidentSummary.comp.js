import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { IncidentButton } from './IncidentButtton';
import { RepsButton } from '../reps/RepsButton';

export function IncidentSummary({ incident }) {
  const { id, date, city, state, address, killed, injured } = incident;
  return (
    <Box sx={{ width: 'inherit' }}>
      <Paper /* variant="outlined"  */ elevation={2} sx={{  p:2, }}>

        <Box sx={{ display:'flex', justifyContent: 'space-between'}}>
          <Typography>{date}</Typography>
          <IncidentButton incidentId={id.$oid} />
        </Box>
        <Typography>
          {city}, {state}
        </Typography>
        <Typography>{address}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            Killed: {killed} Injured: {injured}
          </Typography>
          <RepsButton />
        </Box>
      </Paper>
    </Box>
  );
}
