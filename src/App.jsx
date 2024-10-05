import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SkillsSection from "./components/skills";
import ContactUs from "./components/Contact";
import NotFound from "./components/404"; // Import the 404 page component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Route for 404 Not Found page */}
          <Route path="*" element={<NotFound />} /> {/* Match all undefined routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
