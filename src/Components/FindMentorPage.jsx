import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ad from "../assets/ad.png"
import ad1 from "../assets/ad1.png"
import { RiDoubleQuotesR } from 'react-icons/ri';
import HomeContactUs from './HomeContactUs';
import Footer from './Footer';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Navbar from './Navbar';
import JoinCommunity from './JoinCommunity';
import { useNavigate } from 'react-router-dom';

const brands = [
    {
        quote: "I had the privilege of being mentored by Neha Singh during a critical phase of my career transition. Their guidance was invaluable in helping me navigate the complexities of the industry. ",
        name: "Amit Sharma"
        
    },
    {
        quote: "The mentorship I received from Pooja Verma has been a game-changer for my career. Their practical advice, hands-on guidance, and industry insights were exactly what I needed to succeed in my field.",
        name: "Pooja Verma"
    },
    {
        quote: "Shuvraj Saxena has an exceptional ability to explain complex topics in a simple way. Their mentorship gave me the confidence to take on challenging projects and grow professionally.",
        name: "Rohit Mehta"
    },
    {
        quote: "Working with Shashwat Nigam was the best decision I made for my career. Their structured approach to learning and constant encouragement kept me motivated throughout my journey.",
        name: "Sonia Gupta"
    },
    {
        quote: "Tanya Khan was not only a mentor but also a constant source of inspiration. Their unwavering belief in my potential helped me achieve milestones I never thought possible.",
        name: "Vikram Joshi"
    },
    {
        quote: "Thanks to Virat Kohli, I gained both technical expertise and the confidence to lead a team. Their mentorship has had a lasting impact on my career growth.",
        name: "Meera Iyer"
    },
    {
        quote: "Amit Mahajan helped me identify my strengths and improve my weaknesses. Their guidance was key to landing my dream job and excelling in it.",
        name: "Aditya Singh"
    },
    {
        quote: "I owe much of my professional success to Ankit Mishra. Their tailored guidance and real-world tips made a huge difference in my approach to problem-solving and innovation.",
        name: "Kavya Nair"
    }
]

const FindMentorPage = () => {
    const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [filters, setFilters] = useState({
    skill: '',
    experience: '',
    pricing: '',
    fresherExp: ''
  });

  const navigate = useNavigate()
  const domains = ['All Domains', 'Engineering', 'Web Development', 'Data Science', 'Digital Marketing'];

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
    <div className='bg-[#effff8] '>
       
    <Navbar/>

      <div className=" max-w-7xl mx-auto xs:pt-10 md:pt-28 px-4">
      <h2 className="xs:text-3xl md:text-5xl font-semibold text-center mb-6">Meet Our Exceptional Mentors <br /> Transforming Futures</h2>

      {/* Domains */}
      <div className="flex xs:flex-row flex-wrap justify-center mt-10 gap-8 mb-8">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`px-8 py-3 rounded-full border ${
              selectedDomain === domain
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-200'
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {/* Skill Filter */}
        <select
          value={filters.skill}
          onChange={(e) => handleFilterChange('skill', e.target.value)}
          className="px-8 py-3 border text-xl rounded-2xl bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Skills</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
        </select>

        {/* Experience Filter */}
        <select
          value={filters.experience}
          onChange={(e) => handleFilterChange('experience', e.target.value)}
          className="px-8 py-3 border text-xl rounded-2xl bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Experience</option>
          <option value="1-3 Years">1-3 Years</option>
          <option value="3-5 Years">3-5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>

        {/* Pricing Filter */}
        <select
          value={filters.pricing}
          onChange={(e) => handleFilterChange('pricing', e.target.value)}
          className="px-8 py-3 border text-xl rounded-2xl bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Pricing</option>
          <option value="Free">Free</option>
          <option value="Affordable">Affordable</option>
          <option value="Premium">Premium</option>
        </select>

        {/* Fresher/Exp Filter */}
        <select
          value={filters.fresherExp}
          onChange={(e) => handleFilterChange('fresherExp', e.target.value)}
          className="px-8 py-3 border text-xl rounded-2xl bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Fresher/Exp</option>
          <option value="Fresher">Fresher</option>
          <option value="Experienced">Experienced</option>
        </select>
      </div>





      
    </div>


    <div className="max-w-7xl mx-auto mt-20 xs:px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    
      <div className="bg-[#e4fff4] rounded-2xl border-green-500 border-2 p-8 text-center">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image Section */}
    <img
      src="https://as2.ftcdn.net/v2/jpg/01/34/51/79/1000_F_134517966_TzOCj9dV5DLsPfQRFmjxkDKSDov5PQ1i.jpg"
      alt="Mentor 1"
      className="w-32 h-32 md:w-1/2 md:h-52 mx-auto mb-4 object-cover rounded-full md:rounded-2xl"
    />

    {/* Content Section */}
    <div className="flex flex-col md:px-6 md:w-1/2">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">Bessie Cooper</h2>
        <div className="flex items-center justify-center mb-4">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">4.5</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Engineer at Google
        </p>
        <p className="text-gray-600 font-medium px-4 rounded-lg py-3 bg-white mb-2">
          4 years of Experience
        </p>
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Front-end Developer
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-left">
    As a mentor, I plan to go above and beyond in this program to ensure that
    you reach your full potential. Not only will I help you to achieve your
    technical skills and knowledge, but I'll also prioritize your emotional and
    mental well-being during our journey together. I'm fully committed to
    getting you into your dream role and will provide you with guidance and
    support every step of the way.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button onClick={()=>{navigate('/launching')}} className="w-full hover:bg-zinc-100 text-green-500 border-green-500 border-2 font-semibold py-3 px-4 rounded-lg">
      View Profile
    </button>
    <button onClick={()=>{navigate('/launching')}} className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
      Book Now
    </button>
  </div>
</div>

<div className="bg-[#e4fff4] rounded-2xl border-green-500 border-2 p-8 text-center">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image Section */}
    <img
      src="https://img.freepik.com/premium-photo/young-handsome-bearded-persian-businessman-black_251136-59478.jpg"
      alt="Mentor 1"
      className="w-32 h-32 md:w-1/2 md:h-52 mx-auto mb-4 object-cover rounded-full md:rounded-2xl"
    />

    {/* Content Section */}
    <div className="flex flex-col md:px-6 md:w-1/2">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">Bessie Cooper</h2>
        <div className="flex items-center justify-center mb-4">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">4.5</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Engineer at Google
        </p>
        <p className="text-gray-600 font-medium px-4 rounded-lg py-3 bg-white mb-2">
          4 years of Experience
        </p>
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Front-end Developer
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-left">
    As a mentor, I plan to go above and beyond in this program to ensure that
    you reach your full potential. Not only will I help you to achieve your
    technical skills and knowledge, but I'll also prioritize your emotional and
    mental well-being during our journey together. I'm fully committed to
    getting you into your dream role and will provide you with guidance and
    support every step of the way.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button onClick={()=>{navigate('/launching')}} className="w-full hover:bg-zinc-100 text-green-500 border-green-500 border-2 font-semibold py-3 px-4 rounded-lg">
      View Profile
    </button>
    <button onClick={()=>{navigate('/launching')}} className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
      Book Now
    </button>
  </div>
</div>

<div className="bg-[#e4fff4] rounded-2xl border-green-500 border-2 p-8 text-center">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image Section */}
    <img
      src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg"
      alt="Mentor 1"
      className="w-32 h-32 md:w-1/2 md:h-52 mx-auto mb-4 object-cover rounded-full md:rounded-2xl"
    />

    {/* Content Section */}
    <div className="flex flex-col md:px-6 md:w-1/2">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">Bessie Cooper</h2>
        <div className="flex items-center justify-center mb-4">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">4.5</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Engineer at Google
        </p>
        <p className="text-gray-600 font-medium px-4 rounded-lg py-3 bg-white mb-2">
          4 years of Experience
        </p>
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Front-end Developer
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-left">
    As a mentor, I plan to go above and beyond in this program to ensure that
    you reach your full potential. Not only will I help you to achieve your
    technical skills and knowledge, but I'll also prioritize your emotional and
    mental well-being during our journey together. I'm fully committed to
    getting you into your dream role and will provide you with guidance and
    support every step of the way.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button onClick={()=>{navigate('/launching')}} className="w-full hover:bg-zinc-100 text-green-500 border-green-500 border-2 font-semibold py-3 px-4 rounded-lg">
      View Profile
    </button>
    <button onClick={()=>{navigate('/launching')}} className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
      Book Now
    </button>
  </div>
</div>

<div className="bg-[#e4fff4] rounded-2xl border-green-500 border-2 p-8 text-center">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image Section */}
    <img
      src="https://i.pinimg.com/originals/d2/91/0f/d2910fd5794ef00f0cb242a54cd04808.jpg"
      alt="Mentor 1"
      className="w-32 h-32 md:w-1/2 md:h-52 mx-auto mb-4 object-cover object-top rounded-full md:rounded-2xl"
    />

    {/* Content Section */}
    <div className="flex flex-col md:px-6 md:w-1/2">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">Bessie Cooper</h2>
        <div className="flex items-center justify-center mb-4">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">4.5</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Engineer at Google
        </p>
        <p className="text-gray-600 font-medium px-4 rounded-lg py-3 bg-white mb-2">
          4 years of Experience
        </p>
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Front-end Developer
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-left">
    As a mentor, I plan to go above and beyond in this program to ensure that
    you reach your full potential. Not only will I help you to achieve your
    technical skills and knowledge, but I'll also prioritize your emotional and
    mental well-being during our journey together. I'm fully committed to
    getting you into your dream role and will provide you with guidance and
    support every step of the way.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button onClick={()=>{navigate('/launching')}} className="w-full hover:bg-zinc-100 text-green-500 border-green-500 border-2 font-semibold py-3 px-4 rounded-lg">
      View Profile
    </button>
    <button onClick={()=>{navigate('/launching')}} className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
      Book Now
    </button>
  </div>
</div>

<div className="bg-[#e4fff4] rounded-2xl border-green-500 border-2 p-8 text-center">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image Section */}
    <img
      src="https://th.bing.com/th/id/OIP.S1p4RayfU0cbhXitm4UtGQHaE8?rs=1&pid=ImgDetMain"
      alt="Mentor 1"
      className="w-32 h-32 md:w-1/2 md:h-52 mx-auto mb-4 object-cover rounded-full md:rounded-2xl"
    />

    {/* Content Section */}
    <div className="flex flex-col md:px-6 md:w-1/2">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">Bessie Cooper</h2>
        <div className="flex items-center justify-center mb-4">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">4.5</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Engineer at Google
        </p>
        <p className="text-gray-600 font-medium px-4 rounded-lg py-3 bg-white mb-2">
          4 years of Experience
        </p>
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Front-end Developer
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-left">
    As a mentor, I plan to go above and beyond in this program to ensure that
    you reach your full potential. Not only will I help you to achieve your
    technical skills and knowledge, but I'll also prioritize your emotional and
    mental well-being during our journey together. I'm fully committed to
    getting you into your dream role and will provide you with guidance and
    support every step of the way.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button onClick={()=>{navigate('/launching')}} className="w-full hover:bg-zinc-100 text-green-500 border-green-500 border-2 font-semibold py-3 px-4 rounded-lg">
      View Profile
    </button>
    <button onClick={()=>{navigate('/launching')}} className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
      Book Now
    </button>
  </div>
</div>

<div className="bg-[#e4fff4] rounded-2xl border-green-500 border-2 p-8 text-center">
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image Section */}
    <img
      src="https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"
      alt="Mentor 1"
      className="w-32 h-32 md:w-1/2 md:h-52 mx-auto mb-4 object-cover rounded-full md:rounded-2xl"
    />

    {/* Content Section */}
    <div className="flex flex-col md:px-6 md:w-1/2">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">Bessie Cooper</h2>
        <div className="flex items-center justify-center mb-4">
          <FaStar className="text-yellow-400" />
          <span className="ml-1">4.5</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Engineer at Google
        </p>
        <p className="text-gray-600 font-medium px-4 rounded-lg py-3 bg-white mb-2">
          4 years of Experience
        </p>
        <p className="text-gray-600 font-medium px-6 rounded-lg py-3 bg-white mb-2">
          Front-end Developer
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 mb-4 text-left">
    As a mentor, I plan to go above and beyond in this program to ensure that
    you reach your full potential. Not only will I help you to achieve your
    technical skills and knowledge, but I'll also prioritize your emotional and
    mental well-being during our journey together. I'm fully committed to
    getting you into your dream role and will provide you with guidance and
    support every step of the way.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button onClick={()=>{navigate('/launching')}} className="w-full hover:bg-zinc-100 text-green-500 border-green-500 border-2 font-semibold py-3 px-4 rounded-lg">
      View Profile
    </button>
    <button onClick={()=>{navigate('/launching')}} className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg">
      Book Now
    </button>
  </div>
</div>


      <div className="w-[80vw] mt-10 flex justify-center items-center">
  <button onClick={()=>{navigate('/launching')}} className="text-green-500 border-2 border-green-500 px-6 py-3 w-72 rounded-lg  hover:text-white hover:bg-green-500 transition-all duration-300">
    Explore More
  </button>
</div>



     
    </div>



    <div>
        <div className="bg-green-950 mt-20 text-white xs:p-8 md:pl-40 flex items-center ">
      <div className="flex flex-col max-w-4xl mx-auto">
        <h1 className=" xs:text-xl md:text-3xl lg:text-5xl font-semibold mb-4 lg:w-3/4">Mentors with Good Experience</h1>
       
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
       </div>
        <button onClick={()=>{navigate('/launching')}} className="bg-green-500 hover:bg-green-700 w-72 text-white font-bold py-4 px-4 rounded mt-10">Get Started</button>
      </div>
      
        {/* Replace with your image source */}
       <div className='relative xs:hidden lg:block'>
       <img src={ad} alt="CodingIdol" className="w-full " />
       <img src={ad1} alt="CodingIdol" className="w-96 h-96 absolute top-20 right-20" />
       </div>
        
    
    </div>
    </div>


    <div className="overflow-x-hidden relative p-10 w-full  mt-10">
      {/* Swiper Track */}
      <div className="flex animate-scroll space-x-20">
        {brands.concat(brands).map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 \ flex items-center justify-center"
          >
           <div className="flex  flex-col p-6 border-2 border-green-500 bg-green-100 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
             <RiDoubleQuotesR className="text-green-500 text-2xl mb-5"/>
  <p className="text-gray-700 text-lg ">{brand.quote}</p>
  <h1 className="mt-4 text-green-950 font-bold text-xl">{brand.name}</h1>
</div>


            
          </div>
        ))}
      </div>
    </div> 

    <div className="overflow-x-hidden relative p-10 w-full mt-4">
  {/* Swiper Track */}
  <div className="flex animate-scroll-reverse space-x-20">
    {brands.concat(brands).map((brand, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-80 flex items-center justify-center"
      >
        <div className="flex flex-col p-6 border-2 border-green-500 bg-green-100 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <RiDoubleQuotesR className="text-green-500 text-2xl mb-5" />
          <p className="text-gray-700 text-lg">{brand.quote}</p>
          <h1 className="mt-4 text-green-950 font-bold text-xl">{brand.name}</h1>
        </div>
      </div>
    ))}
  </div>
</div>

<JoinCommunity/>

    
<HomeContactUs/>

 


    </div>
    <Footer/>
    </>
  )
}

export default FindMentorPage