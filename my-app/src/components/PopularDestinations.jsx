
// import React from 'react';
// import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const DestinationCard = styled(Card)(({ theme }) => ({
//   maxWidth: 345,
//   borderRadius: theme.shape.borderRadius * 2,
//   boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.03)',
//     boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
//   },
// }));

// const PopularDestinations = () => {
//   const destinations = [
//     {
//       title: 'Paris',
//       image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     },
//     {
//       title: 'London',
//       image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     },
//     {
//       title: 'Rome',
//       image: 'https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     },
//     {
//       title: 'New York',
//       image: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     },
//     {
//       title: 'Tokyo',
//       image: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     },
//     {
//       title: 'Sydney',
//       image: 'https://images.pexels.com/photos/219330/pexels-photo-219330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     },
//   ];

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: 600, color: '#EB662B', mb: 4 }}
//       >
//         Popular Destinations
//       </Typography>
//       <Grid container spacing={4}>
//         {destinations.map((destination, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <DestinationCard>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={destination.image}
//                   alt={destination.title}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" align="center">
//                     {destination.title}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </DestinationCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default PopularDestinations;
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const DestinationCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const PopularDestinations = () => {
  const destinations = [
    {
      title: 'Paris',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: 'https://holidays.travunited.net/trip/paris-special/'
    },
    {
      title: 'London',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: 'https://holidays.travunited.net/trip/historic-modern-london/'
    },
    {
      title: 'Rome',
      image: 'https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: 'https://holidays.travunited.net/trip/mediterranean-italy/'
    },
    {
      title: 'South America',
      image: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: 'https://holidays.travunited.net/trip/wonders-of-south-america/'
    },
    {
      title: 'Tokyo',
      image: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: 'https://holidays.travunited.net/trip/amazing-japan/'
    },
    {
      title: 'Sydney',
      image: 'https://images.pexels.com/photos/219330/pexels-photo-219330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      link: 'https://holidays.travunited.net/trip/scenic-australia/'
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
        Popular Destinations
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <DestinationCard>
              <CardActionArea onClick={() => window.open(destination.link, "_blank")}>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {destination.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </DestinationCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularDestinations;
