
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeHeroSection from './Components/HomeHeroSection';
import FindMentorPage from "./Components/FindMentorPage";
import Mentorship from "./Components/MentorShip";
import Aboutus from "./Components/Aboutus";
import AdminPage from "./Components/AdminDashboard/AdminPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHeroSection />} />
        <Route path="/find-a-mentor" element={<FindMentorPage />} />
        <Route path="/mentorship" element= {<Mentorship/>} />
        <Route path="/about-us" element= {<Aboutus/>} />
        <Route path="/admin" element= {<AdminPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

