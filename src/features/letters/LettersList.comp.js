import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllLetters } from './lettersSlice';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { amber } from '@mui/material/colors';

import { LetterInfoCard } from './LetterInfoCard';

export function LettersList() {
  const lettersStatus = useSelector((state) => state.letters.status);
  const [lettersInfo, setLettersInfo] = useState(<Box />);

  useEffect(() => {
    if (lettersStatus === 'fetching all letters') {
      setLettersInfo(
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    } else if (lettersStatus === 'succeeded') {
      setLettersInfo(<LettersInfoList />);
    } else if (lettersStatus === 'failed') {
      setLettersInfo(<Typography>failed to load letters</Typography>);
    }
  }, [lettersStatus]);

  return (
    <Box
      sx={{
        border: '1px solid',
        borderRadius: 2,
        height: '25vh',
        overflow: 'hidden',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          borderBottom: '1px solid',
          backgroundColor: amber[400],
        }}
        variant="h5"
      >
        Letters List
      </Typography>
      {lettersInfo}
    </Box>
  );
}

function LettersInfoList() {
  const letters = useSelector(selectAllLetters);
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemSize={10}
          itemCount={5}
          overscanCount={2}
        >
          {getLetterInfoCards}
        </List>
      )}
    </AutoSizer>
  );

  function getLetterInfoCards() {
    return letters.map((letter, index) => (
      <ListItem key={index} divider={true}>
        <LetterInfoCard letter={letter} />
      </ListItem>
    ));
  }
}
