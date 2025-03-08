
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const TermsOfService = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "50px",textAlign: "justify" }}>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to <strong>TravUnited</strong>. These Terms & Conditions govern your use of our website 
          <strong> travunited.net</strong> and our services, including hotel, flight, visa, and holiday package 
          bookings. By using our website, you agree to comply with these terms.
        </Typography>

        {/* General Terms */}
        <Typography variant="h6" gutterBottom>1. General Terms</Typography>
        <Typography variant="body1" paragraph>
          - TravUnited provides an online platform for booking flights, hotels, visas, and holiday packages. <br />
          - By using our services, you confirm that you are at least <strong>18 years old</strong> and legally capable 
          of entering into agreements. <br />
          - We reserve the right to update these terms at any time. Changes will be effective upon posting.
        </Typography>

        {/* Booking Policy */}
        <Typography variant="h6" gutterBottom>2. Booking Policy</Typography>

        <Typography variant="subtitle1" gutterBottom>2.1 Flights</Typography>
        <Typography variant="body1" paragraph>
          - Flight bookings are subject to airline policies, availability, and fare conditions. <br />
          - Ticket prices may change due to airline fare fluctuations, and we are not responsible for any price 
          changes before the final payment. <br />
          - Flight cancellations, rescheduling, or baggage policies are subject to the airline's terms and conditions.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>2.2 Hotels</Typography>
        <Typography variant="body1" paragraph>
          - Hotel bookings are based on availability and subject to the policies of the respective hotel. <br />
          - Check-in and check-out times are set by the hotel and must be followed by the guest. <br />
          - Any additional charges (e.g., taxes, resort fees, or extra services) are the responsibility of the guest.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>2.3 Visas</Typography>
        <Typography variant="body1" paragraph>
          - TravUnited assists in visa application processing but does not guarantee approval. <br />
          - The approval or rejection of a visa is solely at the discretion of the respective embassy or consulate. <br />
          - TravUnited is not responsible for any visa delays or rejections.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>2.4 Holiday Packages</Typography>
        <Typography variant="body1" paragraph>
          - Holiday packages may include flights, hotels, transfers, sightseeing, and other services. <br />
          - Any changes or cancellations after booking are subject to supplier policies. <br />
          - TravUnited is not responsible for factors like weather conditions, strikes, or government restrictions affecting travel.
        </Typography>

        {/* Payment Policy */}
        <Typography variant="h6" gutterBottom>3. Payment Policy</Typography>
        <Typography variant="body1" paragraph>
          - All payments must be made in full before booking confirmation. <br />
          - Prices are subject to currency fluctuations, taxes, and third-party service charges. <br />
          - We accept online payments via credit/debit cards, UPI, and net banking.
        </Typography>

        {/* Cancellation & Refund Policy */}
        <Typography variant="h6" gutterBottom>4. Cancellation & Refund Policy</Typography>
        
        <Typography variant="subtitle1" gutterBottom>4.1 Flight Cancellations</Typography>
        <Typography variant="body1" paragraph>
          - Flight cancellation and refund policies depend on the airline. <br />
          - Refund processing time may vary depending on the airline and payment method used.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>4.2 Hotel Cancellations</Typography>
        <Typography variant="body1" paragraph>
          - Hotel cancellation charges depend on the hotel's policy and the timing of cancellation. <br />
          - Some bookings may be <strong>non-refundable</strong> or subject to cancellation fees.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>4.3 Visa Cancellations</Typography>
        <Typography variant="body1" paragraph>
          - Visa fees are <strong>non-refundable</strong> once the application is submitted.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>4.4 Holiday Package Cancellations</Typography>
        <Typography variant="body1" paragraph>
          - Holiday package cancellation charges depend on the supplier, airlines, and hotel policies. <br />
          - No refunds will be provided for <strong>no-shows</strong> or last-minute cancellations.
        </Typography>

        {/* Travel Responsibility */}
        <Typography variant="h6" gutterBottom>5. Travel Documents & Responsibility</Typography>
        <Typography variant="body1" paragraph>
          - Customers are responsible for ensuring they have valid passports, visas, and other required documents. <br />
          - TravUnited is not responsible for denied boarding due to incomplete travel documents. <br />
          - It is the traveler's responsibility to check and comply with travel restrictions, COVID-19 guidelines, and other local regulations.
        </Typography>

        {/* Liability & Disclaimer */}
        <Typography variant="h6" gutterBottom>6. Liability & Disclaimer</Typography>
        <Typography variant="body1" paragraph>
          - TravUnited acts as a <strong>booking facilitator</strong> and is not responsible for third-party service failures (airlines, hotels, embassies, etc.). <br />
          - We are not liable for <strong>delays, cancellations, baggage loss, or any service disruptions</strong> caused by third-party providers. <br />
          - We are not responsible for <strong>travel disruptions due to natural disasters, political instability, or unforeseen circumstances</strong>.
        </Typography>

        {/* Privacy Policy */}
        <Typography variant="h6" gutterBottom>7. Privacy & Data Protection</Typography>
        <Typography variant="body1" paragraph>
          - Your personal information is collected and processed per our <strong>Privacy Policy</strong>. <br />
          - We do not share or sell customer data to third parties except as required for bookings.
        </Typography>

        {/* Dispute Resolution */}
        <Typography variant="h6" gutterBottom>8. Dispute Resolution</Typography>
        <Typography variant="body1" paragraph>
          - Any disputes related to our services will be subject to the jurisdiction of <strong>[Insert Country]</strong> courts. <br />
          - We encourage resolving disputes through customer support before legal action.
        </Typography>

        {/* Contact Information */}
        <Typography variant="h6" gutterBottom>9. Contact Us</Typography>
        <Typography variant="body1" paragraph>
          For any queries, reach out to us: <br />
          📧 <strong>Email:</strong> 𝐢𝐧𝐟𝐨@𝐭𝐫𝐚𝐯𝐮𝐧𝐢𝐭𝐞𝐝.𝐜𝐨𝐦 <br />
          📞 <strong>Phone:</strong> 90352 53867
        </Typography>

        <Typography variant="body1" paragraph>
          By using our services, you agree to these <strong>Terms & Conditions</strong>.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
