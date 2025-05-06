import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import SelectedDepartment from "./components/Gallery/SelectedDepartment";

function App() { 
  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route
              path="/Gallery/SelectedItem"
              element={<SelectedDepartment />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
