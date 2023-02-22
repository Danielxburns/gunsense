import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export function Letter({ open, handleClose, letter }) {
  return (
    <Dialog open={open} onClose={handleClose} fullwidth="true" maxWidth={'lg'}>
      <DialogActions>
        <IconButton onClick={handleClose} aria-label="close">
          <CancelOutlinedIcon />
        </IconButton>
      </DialogActions>
      <Container maxWidth="xlg">
        <CssBaseline />
        <DialogTitle variant="h5" sx={{ textAlign: 'center' }}>
          <div>
            Letter to {letter.to.title} {letter.to.name}
          </div>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ my: 3, px: 4 }}>
            <Typography>From: {letter.username}</Typography>
            <Typography>{letter.sentOn}</Typography>
            <Typography>{letter.body}</Typography>
          </Box>
        </DialogContent>
      </Container>
    </Dialog>
  );
}
