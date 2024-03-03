import { compromisesImage } from '@images';
import { Typography, useMediaQuery } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

export const NocompromisesOrgan = ({
  width = '100%',
  image = { compromisesImage },
  title = 'No compromises',
  subTitle = 'Prevent fraud, build trust, and onboard more customers faster with Identity gram’s identity verification solution.',
  left,
  top,
}: any) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        mt: { lg: '80px', md: '80px', sm: '60px', xs: '40px' },
      }}
    >
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Box sx={{ position: 'relative', px: 6 }}>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.dark',
                textAlign: 'center',
                lineHeight: '46px',
              }}
            >
              {title}
            </Typography>
            <Image
              src={image}
              alt=""
              style={{
                width: width,
                position: 'absolute',
                left: left,
                top: top,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: 'primary.light',
                textAlign: 'center',
                py: 4,
                lineHeight: '32px',
              }}
            >
              {subTitle}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
