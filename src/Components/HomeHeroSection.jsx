import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { RiVideoAiLine } from "react-icons/ri";
import HomeTopMentors from "./HomeTopMentors";
// import { div } from "framer-motion/client";

const HomeHeroSection = () => {
  return (
    <div>
        <div className="bg-[#defff2] h-screen ">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto  flex items-center justify-between px-6 py-8 bg-[#defff2] ">
        <div className="text-2xl font-semibold text-[#12B76A]">CODINGIDOL</div>
        {/* <div className="hidden md:flex space-x-8 text-black font-medium">
        <a href="" className="hover:text-green-800">Home</a>
          <a href="" className="hover:text-green-800">Find a Mentor</a>
          <a href="" className="hover:text-green-800">Mentorship</a>
          <a href="" className="hover:text-green-800">About Us</a>
        </div> */}
         <div className="hidden md:flex space-x-8 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#12B76A]" : "text-black"
              }
              end // Ensures exact match for the Home route
            >
              Home
            </NavLink>
            <NavLink
              to="/find-a-mentor"
              className={({ isActive }) =>
                isActive ? "text-[#12B76A]" : "text-black"
              }
            >
              Find a Mentor
            </NavLink>
            <NavLink
              to="/mentorship"
              className={({ isActive }) =>
                isActive ? "text-[#12B76A]" : "text-black"
              }
            >
              Mentorship
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-[#12B76A]" : "text-black"
              }
            >
              About Us
            </NavLink>
          </div>
        <button className="hidden md:block px-10 py-2 bg-[#12B76A] text-white rounded-lg hover:bg-green-600">
          Sign Up
        </button>
      </nav>

      {/* Hero Section */}
      <header className=" max-w-7xl mx-auto  flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-medium text-black">
            Mentoring for a brighter <span className="text-[#12B76A] font-semibold">tomorrow</span>
          </h1>
          <p className="text-gray-700">
            Welcome to CodingIdol, where expertise meets enthusiasm. Join a vibrant
            community of mentors and mentees dedicated to unlocking potential and fostering
            professional and personal growth. Connect with seasoned mentors who bring wisdom
            and guidance, and embark on a journey of mutual learning and achievement. Your
            success story begins here.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50">
              Learn More
            </button>
          </div>
        </div>

        
       <div className="relative md:w-1/2 flex flex-col items-center md:items-end">

  <motion.div
    className="relative bg-gray-200 w-96 h-96 rounded-full"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
  
    <img
      src="https://img.freepik.com/premium-photo/student-who-studies-online-educational-platform-enjoys-studying-ai-generated_964845-26.jpg"
      alt="Mentoring"
      className="absolute w-full h-full object-cover rounded-full"
    />
  </motion.div>

 
  <motion.div
    className="absolute -top-3 right-10 bg-white shadow-lg px-6 py-3 rounded-lg"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <p className="text-black font-medium"> <FaUserTie className="text-3xl text-green-500 mr-2 inline"/>Industry Experts</p>
  </motion.div>

  <motion.div
    className="absolute -bottom-3 right-2 bg-white shadow-lg px-6 py-4 rounded-lg"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    <p className="text-black font-medium"><BsGraphUpArrow className="text-3xl text-green-500 mr-2 inline"/>Professional Growth</p>
  </motion.div>

  <motion.div
    className="absolute top-40 right-80 bg-white shadow-lg px-4 py-2 rounded-lg"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <p className="text-black font-medium"><RiVideoAiLine className="text-3xl text-green-500 mr-2 inline"/>1 on 1 Mentorship</p>
  </motion.div>
</div>;
      </header>

     
    </div>
    <HomeTopMentors/>
    </div>
  );
};

export default HomeHeroSection;
