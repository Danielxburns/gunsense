import Box from '@mui/material/Box';
import MOCK_MAP from '../../mockData/MOCK_MAP.png'

export function Map() {
  return(
    <Box component='img' src={MOCK_MAP} sx={{ p:2, mt:2, border: "1px solid", width: "100%", objectFit: "cover", height: '70vh'}}></Box>
  )
}