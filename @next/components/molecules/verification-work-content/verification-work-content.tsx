import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const VerificationWorkContent = ({
  heading = '',
  paragraph = '',
  image = '',
}: any) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="h3"
            sx={{
              color: 'primary.dark',
              lineHeight: '40px',
              py: 3,
            }}
          >
            {heading}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'primary.light',
              pb: 3,
              lineHeight: '28px',
            }}
          >
            {paragraph}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              justifyContent: { md: 'end', sm: 'center' },
              display: 'flex',
            }}
          >
            <Image src={image} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
