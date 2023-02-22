import { LetterButton } from './LetterButton';
import { TimeAgo } from './TimeAgo';

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function LetterInfoCard({ letter }) {
  return (
    <Card sx={{ display: 'flex', flex: 1 }}>
      <Avatar
        alt={letter.to.name}
        src={letter.to.photoUrl}
        sx={{ width: 56, height: 56 }}
        variant="rounded"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 2 }}>
        <Typography>{letter.to.name}</Typography>
        <Typography>{letter.to.title} </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          flex: 1,
          px: 2,
        }}
      >
        <TimeAgo timestamp={letter.sentOn}/>
        <Typography sx={{ textAlign: 'right' }}>
          {letter.username} <LetterButton letter={letter} />
        </Typography>
      </Box>
    </Card>
  );
}
