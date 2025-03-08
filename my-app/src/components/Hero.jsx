// import React from "react";
// import { Box, Typography } from "@mui/material";

// const Hero = () => (
//   <Box
//     sx={{
//       backgroundImage: "url('/banner.png')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       textAlign: "center",
//       color: "white",
//       py: 10,
//     }}
//   >
//     <Typography variant="h3" fontWeight="bold">
//       No matter where you're going to, we'll take you there
//     </Typography>
//   </Box>
// );

// export default Hero;
import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";

const Hero = () => (
  <Box
    sx={{
      position: "relative",
      height: "100vh",
      backgroundImage: "url('/Banners.png')", // Replace with actual image
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white",
    }}
  >
    {/* Navbar Inside Hero */}
    <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
      <Navbar />
    </Box>

    {/* Hero Text & SearchBox */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textAlign: "center",
      }}
    >
      {/* <Typography
  variant="h3"
  fontWeight="bold"
  sx={{
    mb: 3,
    background: "linear-gradient(90deg, #FF8C5A, #7B5BE7)", // Change colors as needed
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  No matter where you're going to, we'll take you there
</Typography> */}


      <SearchBox />
    </Box>
  </Box>
);

export default Hero;
