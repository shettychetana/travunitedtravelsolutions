// client/src/components/BestPackages.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const PackageCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 8px 30px rgba(0,0,0,0.15)',
  },
}));

const BestPackages = () => {
  const packages = [
    {
      title: 'Italy Getaway',
      image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Experience the romance and history of Italy with curated tours, authentic dining, and comfortable accommodations.',
    },
    {
      title: 'European Explorer',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Explore the heart of Europe with our comprehensive package covering multiple iconic cities.',
    },
    {
      title: 'Asian Adventure',
      image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'Discover the vibrant cultures and breathtaking landscapes of Asia on this specially designed tour package.',
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, color: '#EB662B', mb: 4 }}
      >
        Our Best Packages For You
      </Typography>
      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <PackageCard>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={pkg.image}
                  alt={pkg.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {pkg.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pkg.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </PackageCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestPackages;