// import React from "react";
// const Flightcomingsoon = () => {
//     return (
//       <div>
//         <h1>Flight coming soon</h1>
//       </div>
//     );
//     };
//     export default Flightcomingsoon;



import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { Facebook, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

const Flightcomingsoon = () => {
  const targetDate = new Date("2025-04-01T00:00:00").getTime(); // Set launch date

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('../comingsoon.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        We Are Coming Very Soon!
      </Typography>
      <Typography variant="subtitle1" mb={3}>
      "Are you excited? 🚀 Something amazing is coming soon!   <span style={{ color: "#ff4081" }}>Stay tuned!</span>
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {Object.entries(timeLeft).map(([label, value]) => (
          <Grid item key={label}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                minWidth: "80px",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {value}
              </Typography>
              <Typography variant="subtitle2">{label.toUpperCase()}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" mb={2}>
        Notify me when it’s ready
      </Typography>
      <Container maxWidth="sm">
        <Box display="flex">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Get notify by email"
            sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
          />
          <Button variant="contained"  sx={{ ml: 1,backgroundColor:"#ff6748",color:"white" }}>
            SEND
          </Button>
        </Box>
      </Container>

      <Box display="flex" justifyContent="center" mt={4} style={{ color: "#FF6748" }}>
  {[
    { Icon: Facebook, link: "https://www.facebook.com/travunitedindia/" },
    { Icon: YouTube, link: "https://www.youtube.com/channel/UCB571-kd25tbW8pVbmiwohA" },
    { Icon: LinkedIn, link: "https://www.linkedin.com/company/travunited/?originalSubdomain=in" },
    { Icon: Instagram, link: "https://www.instagram.com/travunited/" }
  ].map(({ Icon, link }, index) => (
    <a key={index} href={link} target="_blank" rel="noopener noreferrer" style={{ margin: "0 8px" }}>
      <Icon sx={{ fontSize: 30, cursor: "pointer", color: "#FF6748" }} />
    </a>
  ))}
</Box>


    </Box>
  );
};

export default Flightcomingsoon;
