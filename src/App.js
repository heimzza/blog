import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/:post_id" element={<Post/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
