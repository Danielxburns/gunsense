import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReps } from '../reps/repsSlice';

import { RepsButton } from '../reps/RepsButton';
import { ComposeButton } from '../letters/ComposeButton';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {},
    },
  },
});

export function User() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => renderUsername, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const { street, city, state, zip } = currentUser;
      dispatch(fetchReps({ street, city, state, zip }));
    }
  }, [dispatch, currentUser]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: '1px solid',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '25vh',
        }}
      >
        <Box sx={{ borderBottom: '1px solid', textAlign: 'center' }}>
          <Typography variant="h5" sx={{ backgroundColor: cyan[300] }}>
            User Info
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: '1',
            overflow: 'auto',
            whiteSpace: 'pre'
          }}
        >
          {renderUsername(currentUser)}
          <RepsButton disabled={!currentUser} />
          <Button
            variant="contained"
            color="success"
            size="small"
            whiteSpace="pre"
            disabled={!currentUser}
          >
            Your Letters
          </Button>
          <ComposeButton disabled={!currentUser} />
        </Box>
      </Box>
    </ThemeProvider>
  );

  function renderUsername(user) {
    return (
      <Typography>
        {user ? `Welcome: ${user.displayName}!` : 'login required'}
      </Typography>
    );
  }
}
