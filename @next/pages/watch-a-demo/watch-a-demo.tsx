import React, { useState } from 'react';
import {
  smartCaptureSDK,
  talkToOurExperts,
  verifHome,
  videoThumbnail,
} from '@images';
import { DashboardLayout } from '@layouts';
import { HeroSectionorgan, HeroSectionVideo } from '@organisms';
import { Box, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material';
import {
  DescriptiveCTASection,
  RealIdentityShowcase,
  WatchDemoVideo,
} from '@molecules';
import Image from 'next/image';

export const WatchDemo = (): JSX.Element => {
  const src = 'https://www.youtube.com/embed/d15DP5zqnYE';

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [playVideo, setPlayVideo] = useState(true);
  return (
    <React.Fragment>
      <Box sx={{ mt: '26px' }}>
        <HeroSectionVideo heading1=""
          bigHeading1="See Identity Gram in action"
             src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          paragraph="How does the Real Identity Platform make identity verification simple? Experience our demo apps, watch our explainer video, or register now for our weekly live demo session to find out."
          check
          //imageVideo
        //  image={verifHome}
          />
      </Box>
      <Box my="36px">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box mb="100px">
              <Typography
                sx={{
                  fontSize: '36px',
                  color: 'primary.dark',
                  textAlign: 'center',
                }}
              >
                Explore more of the Real Identity platform
              </Typography>
            </Box>
            <Box>
              <RealIdentityShowcase />
            </Box>
          </Grid>
          <Grid sx={{ mt: { md: '230px', xs: '160px' } }} item xs={12}>
            <Grid
              container
              sx={{ display: 'flex', justifyContent: 'center' }}
              spacing={4}
            >
              <Grid
                sx={{ display: 'flex', alignItems: 'center' }}
                item
                md={5.3}
                xs={10}
              >
                <DescriptiveCTASection
                  btnText="App Demo"
                  description="Experience document and biometric verification through the eyes of a user. They’re designed to minimize friction and maximize conversion with features like blur, glare and face detection."
                  heading="Experience our Smart Capture SDK"
                />
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: { md: 'flex-end', xs: 'center' },
                }}
                item
                md={5.3}
                xs={10}
              >
                <Box>
                  <Image
                    style={{ width: isSmallScreen ? '300px' : '513px' }}
                    src={smartCaptureSDK}
                    alt={'SMART-CAPTURE-SDK'}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: { lg: '130px', md: '80px', sm: '50px', xs: '30px' },
              }}
              spacing={4}
            >
              <Grid
                sx={{ display: 'flex', justifyContent: 'flex-start' }}
                item
                lg={5.3}
                xs={10}
              >
               
                <Box
                  sx={{ width: '100%', height: '416px', position: 'relative' }}
                >
                   <WatchDemoVideo src="https://media.w3.org/2010/05/sintel/trailer.mp4" check/>
                  {/* {playVideo ? (
                    <Image
                      sizes="100vw"
                      fill
                      style={{
                        objectFit: 'contain',
                        cursor: 'pointer',
                        objectPosition: 'left',
                      }}
                      onClick={() => setPlayVideo(false)}
                      src={videoThumbnail}
                      alt={'SMART-CAPTURE-SDK'}
                    />
                  ) : (
                    <CardMedia
                      sx={{ width: '100%', height: '416px' }}
                      component="video"
                      autoPlay
                      controls
                      src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                    />
                  )} */}
                </Box>
              </Grid>
              <Grid
                sx={{ display: 'flex', alignItems: 'center' }}
                item
                lg={5.3}
                xs={10}
              >
                <DescriptiveCTASection
                  btnText="Watch Now"
                  description="The Real Identity Platform is an end-to-end identity verification solution encompassing a suite of verifications and signals, a drag-and-drop orchestration layer, and powerful AI. Watch this 2-minute explainer video to learn more."
                  heading="Identity Gram Real Identity Platform in 2 minutes"
                />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ display: 'flex', justifyContent: 'center' }}
              spacing={4}
            >
              <Grid
                sx={{ display: 'flex', alignItems: 'center' }}
                item
                md={5.3}
                xs={10}
              >
                <DescriptiveCTASection
                  btnText="Register Now"
                  description="If you’d like to see a deeper dive into the Identity Gram Real Identity Platform, register for our weekly product demo. It’s a 30 minute live session where you can chat with product experts, get answers to questions, and see the platform."
                  heading="Talk to our experts"
                />
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: { md: 'flex-end', xs: 'center' },
                }}
                item
                md={5.3}
                xs={10}
              >
                <Box>
                  <Image
                    style={{ width: isSmallScreen ? '300px' : '513px' }}
                    src={talkToOurExperts}
                    alt={'talk-to-our-experts'}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

WatchDemo.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
