import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          
         
         
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
            APP LOGO
          </Typography>
          <Button color="inherit">DASHBORAD</Button>
          <Button color="inherit">CREATE ADS</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}