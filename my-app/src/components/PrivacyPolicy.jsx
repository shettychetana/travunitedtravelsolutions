import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }} style={{marginTop:"50px"}}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      
      
      <Box my={3}>
        <Typography variant="h6">1. Information We Collect</Typography>
        <Typography variant="body1">
          We collect the following personal information:
          <ul>
            <li>Name, email, phone number, and address.</li>
            <li>Payment details (processed securely via third-party providers).</li>
            <li>Passport details, visa documents, and travel preferences.</li>
            <li>Technical data (IP address, cookies, and device/browser information).</li>
          </ul>
        </Typography>
      </Box>
      
      <Box my={3}>
        <Typography variant="h6">2. How We Use Your Information</Typography>
        <Typography variant="body1">
          <ul>
            <li>Booking & Payments – To process flight, hotel, visa, and holiday package bookings.</li>
            <li>Customer Support – To assist with inquiries, modifications, or cancellations.</li>
            <li>Marketing – To send promotional emails (opt-out available).</li>
            <li>Security – To detect fraud and comply with legal regulations.</li>
          </ul>
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">3. Data Protection & Security</Typography>
        <Typography variant="body1">
          We use SSL encryption, secure payment gateways, and restricted access control to protect your data. However, no system is 100% secure.
        </Typography>
      </Box>
      
      <Box my={3}>
        <Typography variant="h6">4. Cookies & Tracking</Typography>
        <Typography variant="body1">
          We use cookies to improve performance and personalize your experience. You can manage cookie preferences in your browser settings.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">5. Your Rights & Choices</Typography>
        <Typography variant="body1">
          You have the right to access, update, or delete your personal data. To request deletion, contact us.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">6. Contact Us</Typography>
        <Typography variant="body1">
          📧 <strong>Email:</strong> <Link href="mailto:info@travunited.com">info@travunited.com</Link> <br />
          📞 <strong>Phone:</strong> <Link href="tel:+919035253867">90352 53867</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
