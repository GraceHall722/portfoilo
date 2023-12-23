import { Route, Routes } from "react-router-dom";
import { Home, AboutMe, Portfolio, ContactMe } from "./pages";

import { Navbar, Footer } from "./components";

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

      <Footer />
    </div>
  );
};

export default App;
