import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ourmentor from "../assets/ourmentor.png";
import { CgWorkAlt } from "react-icons/cg";
import { RxBackpack } from "react-icons/rx";
import Advertisment from "./Advertisment";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { GoGoal } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { BsClipboard2Data, BsPlugin } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { LuFileSpreadsheet, LuGitGraph } from "react-icons/lu";
import { RiAppsLine, RiDoubleQuotesR } from "react-icons/ri";
import HomeContactUs from "./HomeContactUs";
import Footer from "./Footer";
import JoinCommunity from "./JoinCommunity";
import { useNavigate } from "react-router-dom";
import { LiaRobotSolid } from "react-icons/lia";
import { SlPieChart } from "react-icons/sl";
import { FiUserCheck } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import Faq from "./Faq";


const mentors = [
  {
    name: "Mr. Wade Warren",
    image: "https://ysm-res.cloudinary.com/image/upload/c_limit,f_auto,h_630,q_auto,w_1200/v1/yms/prod/8244ef59-d8c9-4c49-a524-34b0154fae1a",
    experience: "2 Years",
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Cameron Williamson",
    image: "https://img.freepik.com/premium-photo/accomplished-female-software-engineer_975188-53177.jpg",
    experience: "4 Years",
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
    image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
    experience: "3 Years",
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  
];
const Students = [
  {
    name: "Mr. Wade Warren",
   
    description:
      "I joined [MentorPlatform] a year ago, seeking guidance in my career transition. Little did I know the profound impact it would have on my professional life. Through the platform, I was matched with an incredible mentor, [MentorName], whose expertise and support proved invaluable.",
  },
  {
    name: "Ms. Cameron Williamson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  {
    name: "Ms. Jenny Wilson",
   
    description:
      "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
  },
  
];

const brands = [
    "https://png.pngtree.com/png-vector/20220902/ourmid/pngtree-company-logo-design-png-image_6135222.png",
    "https://th.bing.com/th/id/OIP.KUevW59wtnTvK_hq5Zmq2wHaBS?rs=1&pid=ImgDetMain",
    "https://logos-world.net/wp-content/uploads/2023/02/Standard-Chartered-Logo-1975.png",
    "https://i.pinimg.com/originals/46/5e/05/465e058bc3f81c5927cc7067e5993f25.png",
    "https://dcassetcdn.com/design_img/1422015/516111/516111_9325875_1422015_d7b55c51_image.png",
    "https://www.elumatec.com/upload/partners/big/elumatec-partners-orgadata-jfjp.jpg",
   
  ];

const HomeTopMentors = () => {
  const navigate = useNavigate();
  return (
    <>

    <div className="max-w-7xl mx-auto py-16 px-5">
      <h2 className="text-5xl font-bold text-center mb-16">
        Top <span className="text-green-500">Mentors</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {mentors.map((mentor, index) => (
  <SwiperSlide key={index}>
    <div className="relative bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold">{mentor.name}</h3>
        <div className="flex items-center mt-1">
          <RxBackpack className="text-xl mr-2 text-green-500" />
          <span className="text-sm text-gray-500 mt-1">{mentor.experience}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {mentor.description}
        </p>
        <button
          onClick={() => {
            navigate('/launching');
          }}
          className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-all duration-300 w-full"
        >
          Book A Free Trial
        </button>
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Coming Soon</h2>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>


     

   
    </div>

    <div className="overflow-hidden relative w-full bg-white mt-10">
      {/* Swiper Track */}
      <div className="flex animate-scroll space-x-20">
        {brands.concat(brands).map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 flex items-center justify-center"
          >
            <img src={brand} alt={`Brand ${index}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div> 
    
   <Advertisment/>

  
    <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row justify-between items-center gap-10">
  {/* Left Section */}
  <div className="w-full md:w-1/2">
    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4 text-center md:text-left">Our Mentors</h1>
    <p className="text-gray-600 mb-8 text-lg text-center md:text-left">
      Fuel the spirit of mentorship at CodingIdol. As a mentor, you have the
      power to inspire, guide, and shape the future. Connect with eager
      mentees, share your experiences, and contribute to a community committed
      to collective growth. Make a Difference - Mentor with Us!
    </p>
    <div className="flex items-center flex-col md:flex-row mb-8">
      <div className="flex flex-col items-center">
        {/* Mentor Images */}
        <div className="flex -space-x-5 justify-center mb-4 md:mb-0">
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
            alt="mentor 4"
            className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
          />
          <img
            src="https://aqsacom.com/wp-content/uploads/2021/10/The-AQSACOM-Difference-2-1024x665.jpg"
            alt="mentor 5"
            className="w-12 h-12 rounded-full object-cover border-green-500 border-2 hover:scale-105 duration-300 cursor-pointer"
          />
        </div>
        <h1 className="text-green-500 text-sm font-normal text-center">More that 200+ mentors</h1>
      </div>
      {/* Become a Mentor Button */}
      <button onClick={()=>{navigate('/launching')}} className=" xs:mt-10 lg:-mt-10 bg-green-500 text-white py-4 px-4 rounded hover:bg-green-600 text-center md:ml-10">
        Become a Mentor
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2">
    <img
      src={ourmentor}
      alt=""
      className="object-cover w-48 h-48 md:w-full md:h-96 rounded-full md:rounded-lg mx-auto"
    />
  </div>
</div>



   
     <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 p-4 mt-20">
    
      <div className="flex flex-col gap-6 w-full md:w-1/2">
       
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-500 w-16 h-16 flex items-center justify-center">
            <FaWandMagicSparkles className="text-2xl text-white" />
          </div>
          <h2 className="font-semibold text-xl">Engagement Metrics</h2>
        </div>
        <p className="text-gray-600">
          These could include the frequency and duration of communication between mentors and mentees, such as the number of messages exchanged, meeting frequency, and average session length.
        </p>

       
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-500 w-16 h-16 flex items-center justify-center">
            <VscGraph className="text-2xl text-white" />
          </div>
          <h2 className="font-semibold text-xl">Completion Rate</h2>
        </div>
        <p className="text-gray-600">
          The percentage of mentoring relationships that are successfully completed or reach their intended goals.
        </p>

        {/* Goal Achievement */}
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-500 w-16 h-16 flex items-center justify-center">
            <GoGoal className="text-3xl text-white" />
          </div>
          <h2 className="font-semibold text-xl">Goal Achievement</h2>
        </div>
        <p className="text-gray-600">
          Tracking the percentage of mentees who achieve their predefined goals with the help of their mentors.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-2xl font-semibold text-zinc-700 mb-6">The Total Number Of Mentors</h1>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="mt-4 text-center md:text-left">
            <h1 className="text-green-500 text-5xl font-medium">1200</h1>
            <p className="text-zinc-700">Introduction copy lorem <br /> ipsum dolor.</p>
          </div>
          <div className="mt-4 text-center md:text-left">
            <h1 className="text-green-500 text-5xl font-medium">92%</h1>
            <p className="text-zinc-700">Introduction copy lorem <br /> ipsum dolor.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-72 mt-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/6507/1d42/33b912bcd71238cf38f7537f66a6a9bf?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O444eVq1liF7xi9UzAToZ3TZD8yGsjFISOM0XUy9~ycmWHhN~IPU4M~kTMlcHnmTZrfM~Qr5aIhI3Cw3Zys3JMDz~XGwFsUe15Z-7Gz4QndHl8QvcHGGyc~krwVop2~skX6~u1QNH2KupvJQvK73cvawI2G9B7C7sDtTVAQB6ck-ItEfvZ4xOYeVIZNaUz70JrYPpG14GUgcz~LNV82508~lNBC1PxfMlz2Bq5W4fmbZ7Ah7x-4n2cjdGdu~-tfoAdlyz8GLA2QlWYZtu4kTubRP6wRdcK8e7COp4hoip9DVfXyvRiXjvIgkjBpK-0gu9qI6q2r6qWKD~6yBiNg-Vw__"
            alt="Mentor Stats"
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>


    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-semibold text-center  text-green-500 mb-20">Popular <span className="text-black">Domains</span> </h1>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <FaLaptopCode className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Web Development and Designing</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <TbApps className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Mobile App Development</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <BsClipboard2Data className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Data Science and Analytics</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <VscGraph className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Digital Marketing and its features</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <GiTeacher className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Preparation and Mock Interview</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <LuFileSpreadsheet className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Resume Building and Branding</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <LiaRobotSolid className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Artificial Intelligence & Machine Learning</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <LuGitGraph className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Devops : Development and Operations</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <SlPieChart className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Business Analyst : Business and Technology</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <RiAppsLine className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">UI/UX Designing:Crafting User-Centric Experiences</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <FiUserCheck className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Project Management: Lead, Plan, and Deliver Success</h2>
  </div>

  <div className="rounded-3xl flex gap-4 items-center cursor-pointer border-green-500 border-2 px-4 py-8 bg-white hover:shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="rounded-full bg-green-500 p-3">
        <MdAutoGraph className="text-white text-3xl" />
      </div>
    </div>
    <h2 className="text-xl text-zinc-600 hover:text-zinc-800 font-normal mb-2">Marketing: Strategies to Grow and Succeed</h2>
  </div>

  <div className="w-[80vw] mt-10 flex justify-center items-center">
  <button onClick={()=>{navigate('/launching')}} className="text-white bg-green-500 px-6 py-3 w-72 rounded-lg  hover:bg-green-600 transition-all duration-300">
    Explore More
  </button>
</div>

</div>

     
    </div>


    <Advertisment/>



    <div className="max-w-7xl mx-auto py-16 px-5">
      <h2 className="text-5xl font-bold text-center mb-16">
      What Students<span className="text-green-500"> Say</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Students.map((mentor, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg shadow-zinc-500 border-2 border-zinc-500 px-10 py-10 hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
            <RiDoubleQuotesR className="text-green-500 text-2xl mb-5"/>
            <p className="text-lg text-gray-600 mt-2 line-clamp-3">
                  {mentor.description}
                </p>
              
                <h3 className="text-lg font-bold">- {mentor.name}</h3>
                
              
               
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


     

   
    </div>


    

      <JoinCommunity/>
      <Faq />
    <HomeContactUs/>

    <Footer/>
   

    </>
  );
};

export default HomeTopMentors;
