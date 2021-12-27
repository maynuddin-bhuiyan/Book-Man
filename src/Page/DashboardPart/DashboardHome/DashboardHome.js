import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NewStudent from '../NewStudent/NewStudent';

const DashboardHome = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
        <NewStudent></NewStudent>
        </Grid>
      
        
      </Grid>
    </Box>
    );
};

export default DashboardHome;