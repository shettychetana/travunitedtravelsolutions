import { Box, Button, Grid, TextField, Typography } from "@mui/material";


const ContactUs = () => {
  return (
    <Box sx={{ maxWidth: "900px", margin: "auto", padding: "40px 0" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Image */}
        <Grid item xs={12} md={6}>
          <img
            src="/contact.png" // Replace with actual image path
            alt="Contact Illustration"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </Grid>

        {/* Right Side: Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography sx={{ color: "gray", marginBottom: "20px" }}>
            We'll soon try to contact you.
          </Typography>

          {/* Name Input */}
          <TextField
            fullWidth
            label="Name"
            placeholder="Your name"
            variant="outlined"
            margin="normal"
          />

          {/* Email Input */}
          <TextField
            fullWidth
            label="Email Address"
            placeholder="example@gmail.com"
            variant="outlined"
            margin="normal"
          />

          {/* Message Input */}
          <TextField
            fullWidth
            label="Write your message here"
            placeholder="Type here"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />

          {/* Send Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#FF6748",
              color: "white",
              fontSize: "16px",
              padding: "10px 0",
              marginTop: "10px",
              "&:hover": { backgroundColor: "#E85A42" },
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
