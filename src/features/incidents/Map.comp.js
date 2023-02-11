import Box from '@mui/material/Box';
import MOCK_MAP from '../../mockData/MOCK_MAP.png'

export function Map() {
  return(
    <Box component='img' src={MOCK_MAP} sx={{ m:2, p:2, border: "1px solid", width: "100%", objectFit: "cover", }}></Box>
  )
}