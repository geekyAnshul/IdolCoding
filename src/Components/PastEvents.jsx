import React from 'react';
import { Calendar, MapPin, X, Rocket } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Navbar from './Navbar'
import Footer from './Footer'
function PastEvents() {
    const location = useLocation();
    const event = location.state?.event;
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white text-black p-4 md:p-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
       
        {/* Left Section */}
        <div className="space-y-8">
         <div className='relative '>
         <img 
            src={event.image}
            alt="React Workshop"
            className=" rounded-lg w-full h-96 object-cover"
          />
           <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Coming Soon</h2>
          </div>
         </div>
          
          <div className="space-y-4">
            <div className='w-full'>
              <h3 className="text-xl font-semibold mb-4">Hosted By</h3>
              <div className="flex items-center  gap-4">
                <img 
                  src="https://yt3.googleusercontent.com/ytc/AIdro_nJAk4-M_S-7RtSFAZn645RKkskke68x6hAo6qQIVFyup4=s900-c-k-c0x00ffffff-no-rj" 
                  alt="CodingIdoL"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className='flex justify-between items-center'>
                  <p className="font-medium">CodingIdoL</p>
                  <div className='flex justify-between items-center gap-4 md:ml-96'><FaInstagram/> <FaXTwitter/></div>
                </div>
              </div>
            </div>
           
            <div className='w-full'>
             
              <div className="flex items-center gap-4">
                <img 
                  src=" https://img.freepik.com/premium-photo/business-man-with-copy-space-yellow-background_962764-97220.jpg" 
                  alt="Athar Khan"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className='flex justify-between items-center'>
                  <p className="font-medium">Athar Khan</p>
                  <div className='flex justify-between items-center gap-4 md:ml-96'><FaInstagram/> <FaXTwitter/></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 mt-6">Participants</h3>
        
              <div className="flex -space-x-2">
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    className="w-10 h-10 object-cover rounded-full border border-[#232323]"
                    src={`https://img.freepik.com/premium-photo/visual-representation-teacher_931878-220968.jpg`}
                    alt={`Participant ${i + 1}`}
                    
                  />
                ))}
                {/* <div className="w-10 h-10 rounded-full border-2 border-[#0a192f] bg-gray-700 flex items-center justify-center">
                  <span className="text-sm">+19</span>
                </div> */}
                {/* <span className='mt-2 '>Others</span> */}
              
              </div>
              <div>
                    <h1 className='text-zinc-600 font-normal mt-1 text-sm'>Ayush Sen,Sakshi Mishra and 19 Others</h1>
                </div>

            </div>
            <div className=''>
                    <h1 className='text-zinc-600 font-medium  cursor-pointer mt-8'>Contact the Host</h1>
                    <h1  className='text-zinc-600 font-medium  cursor-pointer mt-2'>Report Event</h1>
                </div>
           
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">{event.title}</h1>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <div>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p>4:30 PM - 7:30 PM</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              <p>Register to See Address</p>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-4 flex items-center gap-3">
           
            <div>
            <X className="w-6 h-6 inline mr-4  bg-green-200 rounded-full p-1 mb-2" />
              <p className="font-semibold inline">Registration Closed</p>
              <p className="text-sm text-gray-600">This event is not currently taking registrations. You may contact the host or subscribe to receive updates.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About Event</h2>
            <div className="flex items-center gap-2">
              {/* <Rocket className="w-6 h-6" /> */}
              <p className="font-semibold">​🚀 {event.title}: Build and Deploy Your First Project​ 🚀</p>
            </div>
            <p className="text-zinc-600">
              Get ready for a 3-hour hands-on workshop where you'll learn how to build and deploy your first React project in just one session! Whether you're a beginner or just starting with React, this workshop is designed to give you real-world experience and help you kickstart your web development journey.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Agenda:</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600">
              <li>Welcome & Introduction (15 minutes)</li>
              <li>Setting up the Development Environment</li>
              <li>React Fundamentals & Components</li>
              <li>Building the Project</li>
              <li>Deployment & Closing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Highlights:</h2>
            <ul className=" list-inside space-y-2 text-zinc-600">
              <li>​🖥️ Hands-On Workshop: Build a real-world React project.</li>
              <li>🚀 Learn & Deploy: Go from zero to live project in a single session.</li>
              <li>
👩‍💻 Expert Mentorship: Get guidance from experienced mentors.
</li>
              <li>🎓 Certificates: Earn a certificate of excellence.</li>
              <li>🎁 Swags and Goodies: Awesome swag and goodies are up for grabs.</li>
             <li> ☕ Snacks & Networking: Enjoy snacks & coffee while connecting with fellow tech enthusiasts!</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">​Event Details:</h2>
            <ul className=" list-inside space-y-2 text-zinc-600">
              <li>​📅 Date: 25 January 2025</li>
              <li>⏰ Time: 4:30 - 7:30 PM</li>
              <li>📍 Venue: Coding Idol Workspace (Near Capital Petrol Pump, Prabhat Square Bhopal)</li>
             
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">​​Who Can Join?</h2>
            <ul className=" list-inside space-y-2 text-zinc-600">
              <li>​​Beginners passionate about web development.</li>
              <li>Students with basic knowledge of HTML, CSS, and JavaScript.</li>
              <li>📍 Venue: Coding Idol Workspace (Near Capital Petrol Pump, Prabhat Square Bhopal)</li>
             
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">​​​Seats are limited!</h2>
            <ul className=" list-inside space-y-2 text-zinc-600">
              <li>​📌 Register Now: <a className='text-green-800' href=" https://lu.ma/9j3w5xjz"> https://lu.ma/9j3w5xjz</a> </li>
              <li></li>
              <li>​Don’t miss this chance to learn, network, and win exciting rewards! 🎉</li>
             
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">​​Locations:</h2>
            <ul className=" list-inside space-y-2 text-zinc-600">
              <li>​Please register to see the exact location of this event. </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default PastEvents;