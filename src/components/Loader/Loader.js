import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const LinearIndeterminate = () => {
  return (
    <Box sx={{ width: '48ch', m: '0 auto' }}>
      <LinearProgress />
    </Box>
  );
};
