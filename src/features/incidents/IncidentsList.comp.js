import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { selectAllIncidents } from './incidentsSlice';
import { IncidentSummary } from './IncidentSummary.comp';

function SummariesList() {
  const incidents = useSelector(selectAllIncidents);
  return (
    <FixedSizeList
      height={900}
      width={300}
      itemSize={100}
      itemCount={10}
      overscanCount={2}
    >
      {getSummaries}
    </FixedSizeList>
  );

  function getSummaries() {
    return incidents.map((incident, index) => (
      <ListItem key={index} divider={true}>
        <IncidentSummary incident={incident} />
      </ListItem>
    ));
  }
}

export function IncidentsList() {
  const incidentsStatus = useSelector((state) => state.incidents.status);

  const [summaries, setSummaries] = useState(<Box />);

  useEffect(() => {
    console.log('inside UseEffect - incidentsStatus :>> ', incidentsStatus);
    if (incidentsStatus === 'fetching all incidents') {
      setSummaries(<CircularProgress />);
    } else if (incidentsStatus === 'succeeded') {
      setSummaries(<SummariesList />);
    } else if (incidentsStatus === 'failed') {
      setSummaries(<Typography>failed to load incidents</Typography>);
    }
  }, [incidentsStatus]);

  return (
    <Box sx={{}}>
      <Typography>Incidents List</Typography>
      {summaries}
    </Box>
  );
}
