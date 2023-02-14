//import { useSelector } from 'react-redux';
//import { selectRepById } from './repsSlice';

import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function RepCard({ rep }) {
  return (
    <Card sx={{ display: 'flex', width: 'inherit' }}>
      <CardMedia
        component="img"
        sx={{ height: 100, width: 100 }}
        image={rep.photoUrl}
        title={rep.name}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div">
          {rep.name}
        </Typography>
        <Typography fontWeight={'bold'} color="text.secondary">
          {rep.officeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          email: {rep.contact.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phone: {rep.contact.phone}
        </Typography>
{/*         <CardActions>
          <Button size="small">Write Me!</Button>
        </CardActions> */}
      </CardContent>
    </Card>
  );
}
