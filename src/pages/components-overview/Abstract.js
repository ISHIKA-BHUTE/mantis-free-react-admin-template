// import { useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import AbstractTable from 'pages/dashboard/AbstractTable';

import MainCard from 'components/MainCard';


const Abstract = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={5}>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">ABSTRACT</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2, height: '100%' }} content={false}>
          <AbstractTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Abstract;
