import { Route, Routes } from "react-router-dom";
import { Home, AboutMe, Portfolio, ContactMe } from "./pages";

import {
  Navbar,
  Footer,
  Quote,
  HomeProject,
  HomeSkill,
  HomeContact,
} from "./components";

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

      <Quote />
      <HomeProject />
      <HomeSkill />
      <HomeContact />

      <Footer />
    </div>
  );
};

export default App;
