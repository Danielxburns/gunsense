import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { amber } from '@mui/material/colors';
import { RepCard } from '../reps/RepCard'

export function LettersList() {
  return (
    <Box sx={{ border: '1px solid', borderRadius: 2, }}>
      <Box sx={{ backgroundColor: amber[400], textAlign: 'center', borderBottom: '1px solid'}}>
        <Typography variant='h4'>Letters List</Typography>
      </Box>
      <Box sx={{ p:2 }}>
      </Box>
    </Box>
  );
}
