// import React from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";

// const destinations = [
//   { img: "images/IstanbulTurkey.png", name: "Istanbul, Turkey" },
//   { img: "images/Sydney.png", name: "Sydney, Australia" },
//   { img: "images/Azerbaijan.png", name: "Baku, Azerbaijan" },
//   { img: "images/Maldives.png", name: "Male, Maldives" },
//   { img: "images/france1.png", name: "Paris, France" },
//   { img: "images/uk.png", name: "New York, US" },
//   { img: "images/london.png", name: "London, UK" },
//   { img: "images/japan.png", name: "Tokyo, Japan" },
//   { img: "images/dubai.png", name: "Dubai, UAE" },
// ];

// const GlobalDestinations = () => {
//   return (
//     <Container className="my-5">
//       {/* Title Section */}
//       <div className="text-center mb-4">
//         <h2>Explore Global Destinations with Easy Visa Solutions</h2>
//         <p className="text-muted">
//           Effortless visa services designed to simplify your travel experience,
//           ensuring fast approvals and a smooth journey to your chosen
//           destination.
//         </p>
//       </div>

//       {/* Destinations Grid */}
//       <Row className="gy-4">
//         {destinations.map((destination, idx) => (
//           <Col sm={12} md={4} key={idx}>
//             <Card className="border-0 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={destination.img}
//                 alt={destination.name}
//                 className="rounded"
//               />
//               <Card.Body>
//                 <Card.Title className="fs-6">{destination.name}</Card.Title>
//                 <Card.Text className="text-muted">Visa • Flights • Hotels</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* See More Button */}
//       <div className="text-center mt-4">
//         <Button variant="outline-primary">See more places</Button>
//       </div>
//     </Container>
//   );
// };

// export default GlobalDestinations;
import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

const destinations = [
  { name: "Istanbul, Turkey", img: "/images/istanbul1.png" },
  { name: "Sydney, Australia", img: "/images/sydney.png" },
  { name: "Baku, Azerbaijan", img: "/images/Azerbaijan.png" },
  { name: "Malé, Maldives", img: "/images/maldives.png" },
  { name: "Paris, France", img: "/images/france1.png" },
  { name: "New York, US", img: "/images/sydeny1.png" },
  { name: "London, UK", img: "/images/london.png" },
  { name: "Tokyo, Japan", img: "/images/japan.png" },
  { name: "Dubai, UAE", img: "/images/dubai.png" },
];

const GlobalDestinations = () => {
  return (
    <Box sx={{ maxWidth: 1232, mx: "auto", p: 3 }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold">
        Explore Global Destinations with Easy Visa Solutions
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Effortless visa services designed to simplify your travel experience, ensuring fast approvals and a smooth journey to your chosen destination.
      </Typography>

      {/* Grid for Destination Cards */}
      <Grid container spacing={2}>
        {destinations.map((place, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardMedia component="img" height="140" image={place.img} alt={place.name} />
              <CardContent>
                <Typography fontWeight="bold">{place.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Visa • Flights • Hotels
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* "See More Places" Button */}
      <Box textAlign="right" sx={{ mt: 3 }}>
        <Button variant="outlined" size="large">
          See more places
        </Button>
      </Box>
    </Box>
  );
};

export default GlobalDestinations;
