
// import React from "react";
// import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

// const destinations = [
//   { name: "Istanbul, Turkey", img: "/images/istanbul1.png" },
//   { name: "Sydney, Australia", img: "/images/sydney.png" },
//   { name: "Baku, Azerbaijan", img: "/images/Azerbaijan.png" },
//   { name: "Malé, Maldives", img: "/images/maldives.png" },
//   { name: "Paris, France", img: "/images/france1.png" },
//   { name: "New York, US", img: "/images/sydeny1.png" },
//   { name: "London, UK", img: "/images/london.png" },
//   { name: "Tokyo, Japan", img: "/images/japan.png" },
//   { name: "Dubai, UAE", img: "/images/dubai.png" },
// ];

// const GlobalDestinations = () => {
//   return (
//     <Box sx={{ maxWidth: 1232, mx: "auto", p: 3 }}>
//       {/* Header */}
//       <Typography variant="h4" fontWeight="bold">
//         Explore Global Destinations with Easy Visa Solutions
//       </Typography>
//       <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//         Effortless visa services designed to simplify your travel experience, ensuring fast approvals and a smooth journey to your chosen destination.
//       </Typography>

//       {/* Grid for Destination Cards */}
//       <Grid container spacing={2}>
//         {destinations.map((place, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
//               <CardMedia component="img" height="140" image={place.img} alt={place.name} />
//               <CardContent>
//                 <Typography fontWeight="bold">{place.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Visa • Flights • Hotels
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* "See More Places" Button */}
//       <Box textAlign="right" sx={{ mt: 3 }}>
//         <Button variant="outlined" size="large">
//           See more places
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default GlobalDestinations;
import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

const destinations = [
  { name: "Istanbul, Turkey", img: "/images/istanbul1.png", link: "https://visa.travunited.net/product/turkey-2/" },
  { name: "Sydney, Australia", img: "/images/sydney.png", link: "https://visa.travunited.net/product/australia/" },
  { name: "Baku, Azerbaijan", img: "/images/Azerbaijan.png", link: "https://visa.travunited.net/product/azerbaijan-2/" },
  { name: "Malé, Maldives", img: "/images/maldives.png", link: "https://visa.travunited.net/product/maldives/" },
  { name: "Paris, France", img: "/images/france1.png", link: "https://visa.travunited.net/product/france/" },
  { name: "New York, US", img: "/images/sydeny1.png", link: "https://visa.travunited.net/product/usa/" },
  { name: "London, UK", img: "/images/london.png", link: "https://visa.travunited.net/product/uk/" },
  { name: "Tokyo, Japan", img: "/images/japan.png", link: "https://visa.travunited.net/product/japan/" },
  { name: "Dubai, UAE", img: "/images/dubai.png", link: "https://visa.travunited.net/product/dubai/" },
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
            <Card
              sx={{ borderRadius: 2, boxShadow: 2, cursor: "pointer" }}
              onClick={() => window.open(place.link, "_blank")} // Open link in new tab
            >
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
        <Button
          variant="outlined"
          size="large"
          onClick={() => window.open("https://visa.travunited.net/", "_blank")}
        >
          See more places
        </Button>
      </Box>
    </Box>
  );
};

export default GlobalDestinations;
