import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Table from './Table';
import Stats from './Stats';
import Output from'./Output';
import ScrollToTop from './ScrollToTop';

const Main = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/data" element={<Table />} />
            <Route path="/analytics" element={<Stats />} />
            <Route path="/output" element={<Output />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default Main;
