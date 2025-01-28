import React, { useState } from "react";
import { motion } from "framer-motion";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import Navbar from "./Navbar";
import JoinCommunity from "./JoinCommunity";
import Footer from "./Footer";
function Aboutus() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email submitted:", email);
    };
    return (
        <div>
            <Navbar />
            <div className=" min-h-screen">

                {/* About Us Section */}
                <div className="py-10 max-w-7xl mx-auto">
                    <motion.h1
                        className="text-5xl font-bold text-center mb-8"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Us
                    </motion.h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
                        {[about1, about2, about3, about4].map((image, index) => (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`About Image ${index + 1}`}
                                className="rounded-lg shadow-md"
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index, duration: 0.6 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Discover Section */}
                <div className="bg-green-900 text-white py-20 my-16 ">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 ">
                        <motion.img
                            src={about5}
                            alt="Conference room"
                            className="rounded-3xl shadow-lg "
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Discover CodingIdol: Unveiling Our Story and Mission
                            </h2>
                            <p className="text-lg leading-relaxed">
                            In the bustling heart of India, amidst the digital revolution, emerged a spark of an idea called Codingidol. This idea was born from a deep desire to bridge the educational chasm that often leaves brilliant minds in tier 2 and 3 colleges unexplored and unsupported. It was about more than just providing guidance—it was about nurturing potential and unlocking doors to a world of opportunities.
                            </p>
                        </motion.div>
                    </div>
                </div>


                <div className="min-h-screen mt-20">
                    {/* Our Mission Section */}
                    <div className="py-16">
                        <h1 className="text-3xl font-bold text-center mb-10">Our Mission</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 p-10 max-w-5xl mx-auto">
                            <div className="border border-green-500 rounded-lg p-6 bg-white shadow-md ">
                                <div className="flex items-center justify-center text-white bg-green-500  text-3xl mb-4 border border-green-500 rounded-full h-10 w-10 p-7">
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Personalized Guidance</h2>
                                <p className="text-gray-600">
                                    We recognize that every journey is different. Our platform
                                    connects mentees with mentors who offer personalized guidance
                                    tailored to their individual goals and aspirations.
                                </p>
                            </div>
                            <div className="border border-green-500 rounded-lg p-6 bg-white shadow-md">
                                <div className="flex items-center justify-center text-white bg-green-500 text-4xl mb-4 border border-green-500 rounded-full h-10 w-10 p-7">
                                    <i className="fas fa-share-alt"></i>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Knowledge Sharing</h2>
                                <p className="text-gray-600">
                                    We believe in the power of sharing knowledge and experiences. Our
                                    mentors are committed to sharing their wisdom, insights, and
                                    lessons learned to help mentees.
                                </p>
                            </div>
                            <div className="border border-green-500 rounded-lg p-6 bg-white shadow-md">
                                <div className="flex items-center justify-center text-white bg-green-500  text-3xl mb-4 border border-green-500 rounded-full h-10 w-10 p-7">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Community Support</h2>
                                <p className="text-gray-600">
                                    We foster a supportive community where mentees can connect with
                                    peers, share experiences, and seek advice through collaboration
                                    and networking.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

                <JoinCommunity />
            </div>
            <Footer />
        </div>
    );
}


export default Aboutus;