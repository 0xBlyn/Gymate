import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import preloader from './assets/preloader.gif';
import Home from './pages/Home';
import About from './pages/About';
import GalleryPage1 from './components/GalleryPage1';
import GalleryPage2 from './components/GalleryPage2';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';
import Wednesday from './components/Wednesday';
import Thursday from './components/Thursday';
import Friday from './components/Friday';
import Saturday from './components/Saturday';
import Sunday from './components/Sunday';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/Contact';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {loading ? (
          <div className="preloader-container">
            <img src={preloader} alt="preloader" />
          </div>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="gallery" element={<Gallery />}>
                <Route path="page_1" element={<GalleryPage1 />} />
                <Route path="page_2" element={<GalleryPage2 />} />
              </Route>
              <Route path="schedule" element={<Schedule />}>
                <Route path="monday" element={<Monday />} />
                <Route path="tuesday" element={<Tuesday />} />
                <Route path="wednesday" element={<Wednesday />} />
                <Route path="thursday" element={<Thursday />} />
                <Route path="friday" element={<Friday />} />
                <Route path="saturday" element={<Saturday />} />
                <Route path="sunday" element={<Sunday />} />
              </Route>
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
