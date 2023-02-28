//import { useSelector } from 'react-redux';
//import { selectRepById } from './repsSlice';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { ComposeButton } from '../letters/ComposeButton';

export function RepCard({ rep }) {
  
  return (
    <Card sx={{ display: 'flex', width: 'inherit', maxWidth: 'auto' }}>
      <CardMedia
        component="img"
        sx={{ height: 100, width: 100 }}
        image={rep.photoUrl || 'no photo available'} 
        title={rep.name}
      />
      <CardContent sx={{ py:0, display: 'flex', flexDirection: 'column', flex: 1}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography /* gutterBottom */ variant="h6" component="div">
            {rep.officeName}
          </Typography>
          <CardActions sx={{ py: 0 }}>
          <ComposeButton sx={{ py:1 }} rep={rep}/>
          </CardActions>
          </Box>
          <Typography fontWeight={'bold'} color="text.secondary">
            {rep.name}
          </Typography>
        <Typography variant="body2" color="text.secondary"  noWrap >website: {rep.urls ? <Link href={rep.urls[0]} >{rep.urls[0]}</Link> : 'n/a'}</Typography>
        <Typography variant="body2" color="text.secondary">
          email: {rep.emails ? rep.emails[0] : "n/a"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phone: {rep.phones ? rep.phones[0] : "n/a"}
        </Typography>

      </CardContent>
    </Card>
  );
}
