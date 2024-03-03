import { videoThumbnail } from '@images';
import { Box, CardMedia } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

export const WatchDemoVideo = ({ src,check }: any) => {
  const [playVideo, setPlayVideo] = useState(true);

  return (
    <Box >
      {playVideo && check ? (
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
          muted
          // src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          src={src}
        />
      )}
    </Box>
  );
};
