
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";

// import Flightcomingsoon from "./components/Flightcomingsoon";

// import Hotelcomingpage from "./components/Hotelcomingpage";
// import GlobalDestinations from "./components/GlobalDestinations";

// import PopularDestinations from "./components/PopularDestinations";
// import Footer from "./components/Footer";
// import BlogSection from "./components/BlogSection";
// import BestPackages from "./components/BestPackages";
// import WhytravelWithUs from "./components/WhytravelWithUs";
// import ContactUs from "./components/ContactUs";
// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//      <GlobalDestinations/>
//      <PopularDestinations/>
//      <BestPackages/>
     
//      <BlogSection/>
//      <WhytravelWithUs/>
      

     

//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//          <Route path="/flights-coming-soon" element={<Flightcomingsoon/>} />
//          <Route path="/hotels-coming-soon" element={<Hotelcomingpage/>} />
//          <Route path="/contact-us" element={<ContactUs/>} />
//       </Routes>
//     </BrowserRouter>
//     <Footer/>

//     </div>
    
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flightcomingsoon from "./components/Flightcomingsoon";
import Hotelcomingpage from "./components/Hotelcomingpage";
import GlobalDestinations from "./components/GlobalDestinations";
import PopularDestinations from "./components/PopularDestinations";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import BestPackages from "./components/BestPackages";
import WhytravelWithUs from "./components/WhytravelWithUs";
import ContactUs from "./components/ContactUs";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
function Home() {
  return (
    <>
      <Hero />
      <GlobalDestinations />
      <PopularDestinations />
      <BestPackages />
      <BlogSection />
      <WhytravelWithUs />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is now outside Routes, so it's on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights-coming-soon" element={<Flightcomingsoon />} />
        <Route path="/hotels-coming-soon" element={<Hotelcomingpage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-conditions" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      {/* Footer remains outside Routes, so it's also on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
