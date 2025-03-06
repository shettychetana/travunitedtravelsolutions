
import React, { useState } from "react";
import { Box, Container, TextField, Button, Tabs, Tab } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import Formflight from "./Formflight";
import Hotelcomingsoon from "./Hotelcomingsoon";


const SearchBox = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container style={{backgroundColor: "rgba(255, 255, 254, 0.6)",
        backdropFilter: "blur(10px)",borderRadius: "10px",marginTop: "20px",padding: "20px"}}>
      {/* Tabs Section */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}>
          <Tab icon={<FlightTakeoffIcon />} label="Flights" />
          <Tab icon={<HotelIcon />} label="Stays" />
        </Tabs>
      </Box>

      {/* Flights Search Form */}
      {tabIndex === 0 && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            my: 3,
            p: 2,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {/* <TextField label="From - To" fullWidth />
          <Select fullWidth defaultValue="Return">
            <MenuItem value="One Way">One Way</MenuItem>
            <MenuItem value="Return">Return</MenuItem>
          </Select>
          <TextField label="Depart - Return" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          <TextField label="Passengers - Class" fullWidth />
          <Button variant="contained" sx={{ bgcolor: "#FF6748" }} startIcon={<FlightTakeoffIcon />}>
            Show Flights
          </Button> */}
          <Formflight/>
        </Box>
      )}

      {/* Stays Search Form */}
      {tabIndex === 1 && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            my: 3,
            p: 2,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Hotelcomingsoon/>

        </Box>
      )}
    </Container>
  );
};

export default SearchBox;
