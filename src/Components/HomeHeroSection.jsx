import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { RiVideoAiLine } from "react-icons/ri";
import HomeTopMentors from "./HomeTopMentors";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
// import { div } from "framer-motion/client";
import svg from "../assets/svg.jpg"



const HomeHeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>
        <div className="bg-[#defff2]  xs:h-fit lg:h-screen">
     
     <Navbar/>

     
      <header className=" max-w-7xl mx-auto  flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 xs:py-10 md:py-16 lg:py-24">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-medium text-black xs:mt-10 lg:mt-0 ">
            Mentoring for a brighter <span className="text-[#12B76A] font-semibold">tomorrow</span>
          </h1>
          <p className="text-gray-700">
            Welcome to CodingIdol, where expertise meets enthusiasm. Join a vibrant
            community of mentors and mentees dedicated to unlocking potential and fostering
            professional and personal growth. Connect with seasoned mentors who bring wisdom
            and guidance, and embark on a journey of mutual learning and achievement. Your
            success story begins here.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button onClick={()=>{navigate('/launching')}} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Get Started
            </button>
            <button onClick={()=>{navigate('/launching')}} className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50">
              Learn More
            </button>
          </div>
        </div>

        
       <div className="relative md:w-1/2 flex flex-col items-center md:items-end">

  <motion.div
    className="relative bg-gray-200 xs:w-40 xs:h-40 md:w-96 md:h-96 rounded-full"
    initial={{ opacity: 0, scale: 0.5 }}    //initial pr opacity 0 aur scale chota rhge
    animate={{ opacity: 1, scale: 1 }}       //animtate hote hote opacity 1 kr aur scale full
    transition={{ duration: 1 }}         
  >
  
    <img
      src={svg}
      alt="Mentoring"
      className="absolute w-full h-full object-cover rounded-full"
    />
  </motion.div>

 
  <motion.div
    className="absolute xs:hidden md:block -top-3 right-10 bg-white shadow-lg xs:px-2 xs:py-1 md:px-6 md:py-3 rounded-lg"
    initial={{ x: 100, opacity: 0 }}   
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <p className="text-black font-medium "> <FaUserTie className="md:text-3xl text-green-500 mr-2 inline"/>Industry Experts</p>
  </motion.div>

  <motion.div
    className="absolute xs:hidden md:block -bottom-3 right-2 bg-white shadow-lgxs:px-2 xs:py-1 md:px-6 md:py-3  rounded-lg"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    <p className="text-black font-medium"><BsGraphUpArrow className="md:text-3xl text-green-500 mr-2 inline"/>Professional Growth</p>
  </motion.div>

  <motion.div
    className="absolute xs:hidden md:block md:top-40 md:right-80 bg-white shadow-lg xs:px-2 xs:py-1 md:px-6 md:py-3 rounded-lg"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <p className="text-black font-medium"><RiVideoAiLine className="md:text-3xl text-green-500 mr-2 inline"/>1 on 1 Mentorship</p>
  </motion.div>
</div>
      </header>

     
    </div>
 
    </div>
    <HomeTopMentors/>
    </>
  );
};

export default HomeHeroSection;
