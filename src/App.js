import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skills from "./skills";
import Contact from "./Contact";
import Resume from "./resume";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "./Loader";

import { initGA, logPageView } from "./utils/analytics";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initGA(); // Google Analytics initialization
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader fadeOut={!loading} />
      ) : (
        <>
          <AnalyticsTracker />
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
