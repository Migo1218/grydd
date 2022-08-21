import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
// import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function BasicData() {
  const userData = useSelector((state) => state.login.user);

  return (
    <>
    <Box m="auto" sx={{width:4/5, }}>

      <Typography align="center" component="h2" variant="h6" color="primary" gutterBottom>¡Bienvenido!</Typography>
      <Typography align="center" component="p" variant="h4">
        {userData.nombres}
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ flex: 1 }}>
      {userData.rol}
      </Typography>
    </Box>
     
    </>
  );
}