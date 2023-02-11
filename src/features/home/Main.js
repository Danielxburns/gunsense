import * as React from 'react';
import ButtonAppBar from './AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IncidentsList } from '../incidents/IncidentsList.comp';
import { Map } from '../incidents/Map.comp';

export default function Main() {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="xlg">
        <Box
          sx={
            {
              flexGrow: 1 
            }
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <IncidentsList />
            </Grid>
            <Grid item xs={9}>
              <Map />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
