
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeHeroSection from './Components/HomeHeroSection';
import FindMentorPage from "./Components/FindMentorPage";
import Mentorship from "./Components/MentorShip";
import Aboutus from "./Components/Aboutus";
import AdminPage from "./Components/AdminDashboard/AdminPage";
import MentorsPage from "./Components/MentorsDashboard/MentorsPage";
import MainAdminPage from "./Components/MainAdminDashboard/MainAdminPage";
import Launchingpage from "./Components/LaunchingPage";
import EventsWeb from "./Components/EventsWeb";
import ViewEvents from "./Components/ViewEvents";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHeroSection />} />
        <Route path="/find-a-mentor" element={<FindMentorPage />} />
        <Route path="/mentorship" element= {<Mentorship/>} />
        <Route path="/about-us" element= {<Aboutus/>} />
        <Route path="/students" element= {<AdminPage/>} />
        <Route path="/events" element= {<EventsWeb/>} />
        <Route path="/events/:id" element= {<ViewEvents/>} />

        <Route path="/admin" element= {<MainAdminPage/>} />
      
        <Route path="/mentors" element= {<MentorsPage/>} />
        <Route path="/launching" element= {<Launchingpage/>} />
      </Routes>
    </Router>
  );
}

export default App;

