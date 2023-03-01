//import { useSelector } from 'react-redux';
//import { selectRepById } from './repsSlice';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
//import Button from '@mui/material/Button';

import { ComposeButton } from '../letters/ComposeButton';

export function RepCard({ rep }) {
  return (
    <Card sx={{ display: 'flex', width: 'inherit', maxWidth: 'auto' }}>
      <CardMedia
        component="img"
        sx={{ height: 130, width: 100, m:1, borderRadius:1 }}
        image={rep.photoUrl}
        title={rep.name}
      />
      <CardContent
        sx={{ py: 0, display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            {rep.officeName}
          </Typography>
          <CardActions sx={{ py: 0 }}>
            <ComposeButton sx={{ py: 1 }} rep={rep} />
          </CardActions>
        </Box>
        <Typography fontWeight={'bold'} color="text.secondary">
          {rep.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          website:{' '}
          {rep.urls ? <Link href={rep.urls[0]}>{rep.urls[0]}</Link> : 'n/a'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          email:{' '}
          {rep.emails ? (
            <Link variant="body2" component="a" href={`mailto:${rep.emails[0]}`} target="_blank" rel="noopener">
              {rep.emails[0]}
            </Link>
          ) : (
            'n/a'
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phone:{' '}
          {rep.phones ? (
            <Link variant="body2" component="a" href={`tel:${rep.phones[0]}`}>
              {rep.phones[0]}
            </Link>
          ) : (
            'n/a'
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
