import Typography from '@mui/material/Typography';
import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <Typography sx={{ textAlign: 'right' }}>
      <i>{timeAgo}</i>
    </Typography>
  );
};
