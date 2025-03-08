// client/src/components/WhyTravelWithUs.jsx
import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HotelIcon from '@mui/icons-material/Hotel';

const StatsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(6, 2),
  textAlign: 'center',
}));

const StatBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: theme.spacing(2),
}));

const StatIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const WhyTravelWithUs = () => {
  return (
    <StatsContainer>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#EB662B', mb: 4 }}>
        Why Travel With Us?
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
      >
        <StatBox>
          <StatIcon>
            <PublicIcon fontSize="inherit" />
          </StatIcon>
          <Typography variant="h5" color="primary">
            1000+
          </Typography>
          <Typography variant="body1">Destinations</Typography>
        </StatBox>
        <StatBox>
          <StatIcon>
            <EmojiEmotionsIcon fontSize="inherit" />
          </StatIcon>
          <Typography variant="h5" color="primary">
            4800+
          </Typography>
          <Typography variant="body1">Happy Travelers</Typography>
        </StatBox>
        <StatBox>
          <StatIcon>
            <CheckCircleIcon fontSize="inherit" />
          </StatIcon>
          <Typography variant="h5" color="primary">
            2900+
          </Typography>
          <Typography variant="body1">Visa Approvals</Typography>
        </StatBox>
        <StatBox>
          <StatIcon>
            <HotelIcon fontSize="inherit" />
          </StatIcon>
          <Typography variant="h5" color="primary">
            9900+
          </Typography>
          <Typography variant="body1">Hotel Bookings</Typography>
        </StatBox>
      </Stack>
    </StatsContainer>
  );
};

export default WhyTravelWithUs;