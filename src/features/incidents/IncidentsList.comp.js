import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllIncidents } from './incidentsSlice';

import { IncidentSummary } from './IncidentSummary.comp';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { deepOrange } from '@mui/material/colors';

export function IncidentsList() {
  const incidentsStatus = useSelector((state) => state.incidents.status);
  const [summaries, setSummaries] = useState(<Box />);

  useEffect(() => {
    if (incidentsStatus === 'fetching all incidents') {
      setSummaries(
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      );
    } else if (incidentsStatus === 'succeeded') {
      setSummaries(<SummariesList />);
    } else if (incidentsStatus === 'failed') {
      setSummaries(<Typography>failed to load incidents</Typography>);
    }
  }, [incidentsStatus]);

  return (
    <Box
      sx={{
        border: '1px solid',
        borderRadius: 2,
        pX: 1,
        marginTop: 2,
        height: '91vh',
        overflow: 'hidden',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          borderBottom: '1px solid',
          backgroundColor: deepOrange[400],
        }}
        variant="h5"
      >
        Incidents List
      </Typography>
      {summaries}
    </Box>
  );
}

function SummariesList() {
  const incidents = useSelector(selectAllIncidents);
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemSize={12}
          itemCount={5}
          overscanCount={2}
        >
          {getSummaries}
        </List>
      )}
    </AutoSizer>
  );

  function getSummaries() {
    return incidents.map((incident, index) => (
      <ListItem key={index} divider={true}>
        <IncidentSummary incident={incident} />
      </ListItem>
    ));
  }
}
