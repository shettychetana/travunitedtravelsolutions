import React from "react";
import { Box, Typography, Grid, TextField, Button, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation=(path)=>{
    navigate(path);
  };
  return (
    <Box sx={{ backgroundColor: "#F8F9FC", color: "black", paddingTop: 4 }}>
      {/* Subscribe Section */}
      <Box
        sx={{
          backgroundColor: "#FF6748",
          padding: "40px",
          borderRadius: "10px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
          Subscribe and get exclusive deals & offer
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter your mail"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "60%",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#FF6748",
              marginLeft: "10px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#FFE6E0" },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Footer Content */}
      <Grid container spacing={4} sx={{ padding: "50px 10%", marginTop: "20px" }}>
        {/* Left Section */}
        <Grid item xs={12} md={3}>
          <Box display="flex" alignItems="center">
            <img src="/logonew1.png" alt="TravUnited Logo" style={{ height: "40px", marginRight: "10px" }} />
            
          </Box>
          <Typography sx={{ marginTop: "10px", color: "gray", fontSize: "14px" }}>
            Book your trip in minutes, get full control for much longer.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ marginTop: "15px" }}>
            <IconButton    component="a"
    href="https://www.facebook.com/travunitedindia/" // Replace with your actual Facebook link
    target="_blank"
    rel="noopener noreferrer"
     sx={{
      color: "#FF6748",
      backgroundColor: "white",
      margin: "5px",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "#FF6748",
        color: "white",
      },
    }}>
              <Facebook />
            </IconButton>
            <IconButton 
              component="a"
              href="https://www.instagram.com/travunited/" // Replace with your actual Facebook link
              target="_blank"
              rel="noopener noreferrer"
               sx={{
      color: "#FF6748",
      backgroundColor: "white",
      margin: "5px",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "#FF6748",
        color: "white",
      },
    }}>
              <Instagram />
            </IconButton>
            <IconButton  
              component="a"
              href="https://www.youtube.com/channel/UCB571-kd25tbW8pVbmiwohA" // Replace with your actual Facebook link
              target="_blank"
              rel="noopener noreferrer"
              sx={{
      color: "#FF6748",
      backgroundColor: "white",
      margin: "5px",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: "#FF6748",
        color: "white",
      },
    }}>
              <YouTube />
            </IconButton>
          </Box>
        </Grid>

        {/* Company Section */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" fontWeight="bold">Company</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>About</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Careers</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Logistic</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }} onClick={()=>handleNavigation("/privacy-policy")}>Privacy & Policy</Typography>
          
        </Grid>

        {/* Contact Section */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" fontWeight="bold">Contact</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Help/FAQ</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Press</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Affiliates</Typography>
        </Grid>

        {/* More Section */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" fontWeight="bold">More</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Press Centre</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Our Blog</Typography>
          <Typography sx={{ color: "gray", marginTop: "10px" }}>Low Fare Tips</Typography>
        </Grid>
      </Grid>

      <Divider />

      {/* Footer Bottom */}
      <Box sx={{ textAlign: "center", padding: "20px", color: "gray" }}>
        <Typography>Copyright, TravUnited 2024. All rights reserved.</Typography>
        <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <Typography sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>Corporate Deals</Typography>
          <Typography sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={()=>handleNavigation("/terms-conditions")}>Terms & Conditions</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
