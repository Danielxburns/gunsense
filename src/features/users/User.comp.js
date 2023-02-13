import Box from '@mui/material/Box';
import { RepsButton } from '../reps/RepsButton';
import Typography from '@mui/material/Typography';

export function User() {
  return (
    <Box sx={{ border: '1px solid', p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography>this is where the User features live</Typography>
      <RepsButton />
    </Box>
  );
}
