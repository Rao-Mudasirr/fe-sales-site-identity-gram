import {
  realIdentityImage1,
  realIdentityImage2,
  realIdentityImage3,
} from '@images';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
const realIdentityShowcaseData = [
  {
    id: 0,
    image: realIdentityImage1,
  },
  {
    id: 1,
    image: realIdentityImage2,
  },
  {
    id: 2,
    image: realIdentityImage3,
  },
];
export const RealIdentityShowcase = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1020px)');
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {realIdentityShowcaseData.map((item: any) => (
          <Grid
            sx={{
              display: 'flex',
              mt: item.id === 0 ? { lg: '100px', xs: '0px' } : '100px',
              justifyContent: 'center',
            }}
            key={item.id}
            item
            xl={3.6}
            lg={4.6}
            xs={11}
          >
            <Box
              sx={{
                position: 'relative',
                width: { md: '532px' },
                border: '1px solid #645CAA',
                borderRadius: '50px',
                p: '11px',
              }}
            >
              <Box
                sx={{
                  p: '50px',
                  pb: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#EBECFE',
                  borderRadius: '50px',
                }}
              >
                <Image
                  style={{ width: isSmallScreen ? '250px' : '100%' }}
                  src={item.image}
                  alt={''}
                />
              </Box>
              <Box
                sx={{
                  boxShadow:
                    item.id === 1
                      ? '0px 65px 96px rgba(100, 92, 170, 0.09)'
                      : 'none',
                  position: 'absolute',
                  bottom: '-80px',
                  left: isSmallScreen ? '0%' : '6%',
                  width: isSmallScreen ? '100%' : '470px',
                  p: isSmallScreen ? '25px 10px' : '25px 40px',
                  textAlign: 'center',
                  backgroundColor: 'common.white',
                  background: '#FFFFFF',
                  border: '1px solid rgba(24, 25, 69, 0.1)',
                  borderRadius: '12px',
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    color: '#3C347E',
                    fontWeight: 600,
                    fontSize: '20px',
                  }}
                >
                  What is due diligence in finance?
                </Box>
                <Typography variant="h4" color="#6E7191" my="19px">
                  When carrying out due diligence, a financial institution must
                  determine whether they should).
                </Typography>
                <Box sx={{ cursor: 'pointer', borderRadius: '5px' }}>
                  <Typography
                    variant="h4"
                    color="#3C347E"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Learn More <EastRoundedIcon sx={{ ml: '10px' }} />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
