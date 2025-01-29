import React, { useEffect, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import Navbar from './Navbar';
import EventCards from './EventCards';
import EventCards2 from './EventCards2';
import Footer from './Footer';

const EventsWeb = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [destinations, setDestinations] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const images = [
        "https://www.wallpapertip.com/wmimgs/74-745706_corporate-events-wallpaper-hd.jpg",
        "https://th.bing.com/th/id/R.6deede65288aaa8f35cada3079fffd8e?rik=K79rIF3Uh%2fY%2fAA&riu=http%3a%2f%2fwww.hagopsphotography.com%2fwp-content%2fuploads%2f2018%2f05%2f004_corporate-events.jpg&ehk=dzSNyFnj6HcIImX4axw5O6e4PBptkd1mJgmftUM1l%2bE%3d&risl=&pid=ImgRaw&r=0",
        "https://img.freepik.com/premium-photo/back-view-audience-conference-event_693425-14894.jpg",
        "https://www.resourcesgroups.com/wp-content/uploads/2018/11/vv.jpg"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images.length]);
    const texts = [
        { heading: "Tech Talks & Networking Sessions", description: "Engage with industry experts, gain insights, and expand your professional network." },
        { heading: "Code & Innovate: Full-Stack Bootcamp", description: "Join hands-on workshops to build real-world applications and become a full-stack developer." },
        { heading: "AI & ML Hackathon: Build the Future", description: "Collaborate, create, and compete in AI challenges to solve real-world problems." },
        { heading: "UI/UX Design Sprint: Craft Stunning Interfaces", description: "Learn user-centric design principles and build visually engaging digital experiences." },
        { heading: "DevOps Workshop: Automate & Optimize", description: "Master CI/CD pipelines and deployment strategies to enhance software development." },
        { heading: "Business Analyst Challenge: Data-Driven Decisions", description: "Analyze case studies, interpret data, and provide impactful business solutions." },
        { heading: "Resume & Branding Masterclass", description: "Learn to craft an impressive resume and build a strong personal brand for career success." },
       
      ];
      
      
  return (
    <>
    <div className='bg-green-100 '>
       
    <Navbar/>
    <div className="max-w-7xl h-[100vh] bg-green-100 mx-auto px-4  poppins relative">
        
         <section className="bg-green-100 relative">
   

         <div className="relative h-[50vh] md:h-[75vh] overflow-hidden rounded-2xl">
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-transform duration-1000 ease-in-out z-10 ${
        index === currentIndex ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        transform: `translateX(${(index - currentIndex) * 100}%)`,
      }}
    >
      {/* Image */}
      <img
        src={img}
        alt={`Slide ${index}`}
        className="object-cover w-full h-full rounded-2xl"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
          {texts[index].heading}
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">
          {texts[index].description}
        </p>
      </div>
    </div>
  ))}
</div>

   

     </section>


     
    </div>
    </div>
    <EventCards/>
    <EventCards2 />

   <Footer/>
    </>
  )
}

export default EventsWeb