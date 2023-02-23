import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function About() {
  return (
    <Box sx={{ border: 1, borderRadius: 2, p: 4, bgcolor: 'background.paper' }}>
      <Typography>This application was started as an entry for DeveloperWeek 2023 Hackathon.</Typography>
      <Typography>Here's my elevator pitch:</Typography>
      <Typography>
        Have you or anyone you’ve loved ever been affected by gun violence? Do
        you want to do something about it? Well, you CAN with GunSense.
      </Typography>
      <Typography>
        GunSense delivers up-to-date information about the gun violence
        happening in our communities and provides a platform for you to connect
        to the government officials who can affect the changes that you want to
        see.
      </Typography>
      <Typography>
        By providing quality information on an actionable platform GunSense
        allows for an aware and informed citizenry to engage with and empower
        leaders with their ideas and concerns. Which, in time, will lead to
        better laws, better law enforcement, less gun violence, and a safer
        healthier society for all.
      </Typography>
    </Box>
  );
}
