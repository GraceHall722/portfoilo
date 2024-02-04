import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Home, AboutMe, Portfolio, ContactMe } from "./pages";

import { Navbar, Footer } from "./components";
import { Frame25, Frame28 } from "./assets";

const App = () => {
  return (
    <div className="bg-primary-1">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>

      <div className="relative">
        <img src={Frame25} className="absolute bottom-10 right-0" />
        <img src={Frame28} className="absolute md:bottom-80 bottom-48 left-0" />
      </div>

      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
