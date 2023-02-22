import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllLetters } from './lettersSlice';

import { LetterInfoCard } from './LetterInfoCard'

import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { amber } from '@mui/material/colors';

export function LettersList() {
  const lettersStatus = useSelector((state) => state.letters.status);
  const [lettersInfo, setLettersInfo] = useState(<Box />);

  useEffect(() => {
    if (lettersStatus === 'fetching all letters') {
      setLettersInfo(<Box sx={{ p:2, display: 'flex', justifyContent: 'center' }}  >
        <CircularProgress />
      </Box>);
    } else if (lettersStatus === 'succeeded') {
      setLettersInfo(<LettersInfoList />);
    } else if (lettersStatus === 'failed') {
      setLettersInfo(<Typography>failed to load letters</Typography>);
    }
  }, [lettersStatus]);

  return (
    <Box sx={{ border: '1px solid', borderRadius: 2, }}>
      <Box sx={{ backgroundColor: amber[400], textAlign: 'center', borderBottom: '1px solid'}}>
        <Typography variant='h5'>Letters List</Typography>
      </Box>
      <Box>
      {lettersInfo}
      </Box>
    </Box>
  );
}

function LettersInfoList() {
  const letters = useSelector(selectAllLetters);
  return (
    <List>
      {letters.map((letter, index) => (
        <ListItem key={index} divider={true}>
          <LetterInfoCard letter={letter} />
        </ListItem>
      ))}
    </List>
  );
}


