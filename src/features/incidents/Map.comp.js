import Box from '@mui/material/Box';
import MOCK_MAP from '../../mockData/MOCK_MAP.png';

export function MapComp() {
  return (
    <Box
      component="img"
      src={MOCK_MAP}
      sx={{
        p: 2,
        mt: 2,
        border: '1px solid',
        borderRadius: 2,
        width: '100%',
        objectFit: 'cover',
        height: '65vh',
      }}
    ></Box>
  );
}
