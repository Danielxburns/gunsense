import { useSelector } from 'react-redux';

import { RepsButton } from '../reps/RepsButton';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';

export function User() {
  const { user } = useSelector((state) => state.users.currentUser);

  return (
    <Box
      sx={{
        border: '1px solid',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ borderBottom: '1px solid', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ backgroundColor: cyan[300] }}>
          User Info
        </Typography>
      </Box>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography>{user ? `Username: ${user.username}` : 'login required'}</Typography>
        <Button variant="contained" color='success' size="small" /* disabled={!user} */>
          Your Letters
        </Button>
        <RepsButton /* disabled={!user} */ />
      </Box>
    </Box>
  );
}
