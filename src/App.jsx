import React from "react";

import Home from "./pages/Home";
import Infrared from "./pages/Infrared";
import Viriability from "./pages/Viriability";
import Heart from "./pages/Heart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Infrared" element={<Infrared />} />
          <Route path="/Heart" element={<Heart />} />
          <Route path="/Viriability" element={<Viriability />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
