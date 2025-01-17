// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import './App.css'
// import HomeHeroSection from './Components/HomeHeroSection'

// function App() {
 

//   return (
//     <>
//       <HomeHeroSection/>
     
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeHeroSection from './Components/HomeHeroSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;

