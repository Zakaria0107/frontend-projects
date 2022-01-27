import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import './style.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about/:title" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
