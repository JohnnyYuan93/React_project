import React from "react";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import {Routes , Route, Link} from 'react-router-dom';
import Message from "./components/message/Message";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/portfolio" className="nav-item">Portfolio</Link>
        <Link to="/message" className="nav-item">Message</Link>
      </nav>
      <Routes>
       <Route path="/" element={<Header />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
};

export default App;
