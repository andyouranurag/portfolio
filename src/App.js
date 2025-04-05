import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Skills from "./skills";
import Contact from "./Contact";
import Resume from "./resume";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={!loading} />}
      <div className={`app-container ${loading ? "hidden" : ""}`}>
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
      </div>
    </>
  );
};

export default App;
