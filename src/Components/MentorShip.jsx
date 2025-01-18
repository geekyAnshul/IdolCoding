
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiVideoAiLine } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import girl from "../assets/standgirl.jpg";
import MentorCard from "./Mentorcard";
import JoinCommunity from "./JoinCommunity";
import HomeContact from "./HomeContactUs.jsx";
import Footer from "./Footer.jsx";
const Mentorship = () => {
    const mentors = [
        {
            name: "Mr. Wade Warren",
            image: "https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg",
            experience: "2 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Mr. Wade Warren",
            image: "https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg",
            experience: "2 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [mentors.length]);

    return (
        <div>
            <Navbar />
            <header className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24">
                {/* Left Section */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-3xl lg:text-5xl font-medium text-black xs:mt-10 lg:mt-0">
                        Guiding Lights: The Power of{" "}
                        <span className="text-[#12B76A] font-semibold">Mentorship</span>
                    </h1>
                    <p className="text-gray-700">
                        In every journey, having a guiding light can make all the difference. At 'Guiding Lights,' we
                        believe in the transformative impact of mentorship on personal and professional growth.
                    </p>


                    <div className="flex xs:flex-col md:flex-row items-center gap-4 mt-4">
                        <div className="flex -space-x-5">
                            <img
                                src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                                alt="mentor 1"
                                className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
                            />
                            <img
                                src="https://th.bing.com/th/id/OIP.EIcGKGjDXqQFJo-B9OIoZQHaE8?w=1000&h=667&rs=1&pid=ImgDetMain"
                                alt="mentor 2"
                                className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
                            />
                            <img
                                src="https://img.freepik.com/premium-photo/happy-businessman-tablet-thinking-studio-mockup-space-trading-ideas-mindset-planning-goals-corporate-trader-indian-man-remember-decision-with-digital-technology-vision-smile_590464-201183.jpg"
                                alt="mentor 3"
                                className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
                            />

                            <img
                                src="https://media.istockphoto.com/id/1415121782/photo/businessman-talking-during-video-call-in-the-office.jpg?s=612x612&w=0&k=20&c=oVkMsNPrLuCqYKPLhsHNo1SkhL_NeyGbBXxNd0IzF8o="
                                alt="mentor 3"
                                className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
                            />
                            <img
                                src="https://aqsacom.com/wp-content/uploads/2021/10/The-AQSACOM-Difference-2-1024x665.jpg"
                                alt="mentor 3"
                                className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
                            />


                        </div>
                        <h1 className="text-green-500 text-4xl font-bold">+500</h1>

                    </div >


                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Be a Mentor
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative md:w-1/2 flex flex-col items-center md:items-end mb-10">
                    <motion.div
                        className="relative xs:w-32 xs:h-32 lg:w-64 lg:h-64 items-center justify-center mx-32 mb-28 "
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={girl}
                            alt="Mentorship"
                            className="absolute w-full  object-cover"
                        />
                    </motion.div>

                    {/* Feature Badges */}
                    <motion.div
                        className="absolute xs:hidden lg:block top-10 right-10 bg-white shadow-lg px-4 py-3 rounded-lg flex items-center ml-4"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <FaUserTie className="text-3xl text-green-500 mr-2  " />
                        <p className="text-black font-medium">Industry Experts</p>
                    </motion.div>

                    <motion.div
                        className="absolute xs:hidden lg:block bottom-10 right-2 bg-white shadow-lg px-6 py-4 rounded-lg flex items-center"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <BsGraphUpArrow className="text-3xl text-green-500 mr-2" />
                        <p className="text-black font-medium">Experience</p>
                    </motion.div>

                    <motion.div
                        className="absolute xs:hidden lg:block top-40 right-80 bg-white shadow-lg px-4 py-2 rounded-lg flex items-center"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <RiVideoAiLine className="text-3xl text-green-500 mr-2" />
                        <p className="text-black font-medium">Top Rated</p>
                    </motion.div>
                </div>
            </header>

            <div>
                <MentorCard />
            </div>
            <JoinCommunity />
            <HomeContact />
            <Footer />
        </div>
    );
};

export default Mentorship;