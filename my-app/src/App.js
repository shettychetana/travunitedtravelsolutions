// import React from "react";
// import { Box } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import SearchBox from "./components/SearchBox";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Flightcomingsoon from "./components/Flightcomingsoon";                     

// const App = () => (
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Navbar />} />
//     <Route path="/" element={<Hero />} />
//     <Route path="/" element={<SearchBox />} />
//     {/* <Route path="/flights-coming-soon" element={<Flightcomingsoon/>} /> */}
//   </Routes>
// </BrowserRouter>
 
// );

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Flightcomingsoon from "./components/Flightcomingsoon";

import Hotelcomingpage from "./components/Hotelcomingpage";
import GlobalDestinations from "./components/GlobalDestinations";

import PopularDestinations from "./components/PopularDestinations";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <GlobalDestinations/>
     <PopularDestinations/>

     

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/flights-coming-soon" element={<Flightcomingsoon/>} />
         <Route path="/hotels-coming-soon" element={<Hotelcomingpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
