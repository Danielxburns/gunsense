import * as React from 'react';
import ButtonAppBar from './AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IncidentsList } from '../incidents/IncidentsList.comp';
import { MapComp } from '../incidents/Map.comp';
import { User } from '../users/User.comp';
import { LettersList } from '../letters/LettersList.comp';

export default function Main() {
  return (
    <>
      <ButtonAppBar />
      <Container maxWidth="xlg">
        <Box
        /* sx={{
            flexGrow: 1,
          }} */
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <IncidentsList />
            </Grid>
            <Grid item xs={9}>
              <MapComp />
              <Grid
                container
                spacing={2}
                sx={{
                  flexGrow: 1,
                }}
              >
                <Grid item xs={9}>
                  <LettersList />
                </Grid>
                <Grid item xs={3}>
                  <User />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
