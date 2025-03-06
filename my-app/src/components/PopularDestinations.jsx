import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const destinations = [
  {
    name: "Millennium Bridge",
    location: "London, UK",
    image: "/images/millennium_bridge.jpg",
  },
  {
    name: "Rialto Bridge",
    location: "Venice, Italy",
    image: "/images/rialto_bridge.jpg",
  },
  {
    name: "Sea of Orange Tiles",
    location: "Lisbon, Portugal",
    image: "/images/lisbon.jpg",
  },
  {
    name: "Monument of Berlin",
    location: "Berlin, Germany",
    image: "/images/berlin.jpg",
  },
];

const PopularDestinations = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Popular Destinations
      </Typography>
      <Typography color="gray" mb={3}>
        Most popular destinations around the world, from historical places to natural wonders.
      </Typography>
      <Slider {...settings}>
        {destinations.map((place, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              margin: "10px",
              height: "280px",
            }}
          >
            <img
              src={place.image}
              alt={place.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                padding: "10px",
                borderRadius: "0 0 12px 12px",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {place.name}
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
                {place.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PopularDestinations;
