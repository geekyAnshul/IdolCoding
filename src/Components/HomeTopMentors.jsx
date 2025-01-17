import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CgWorkAlt } from "react-icons/cg";
import { RxBackpack } from "react-icons/rx";

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

const brands = [
    "https://png.pngtree.com/png-vector/20220902/ourmid/pngtree-company-logo-design-png-image_6135222.png",
    "https://th.bing.com/th/id/OIP.KUevW59wtnTvK_hq5Zmq2wHaBS?rs=1&pid=ImgDetMain",
    "https://logos-world.net/wp-content/uploads/2023/02/Standard-Chartered-Logo-1975.png",
    "https://i.pinimg.com/originals/46/5e/05/465e058bc3f81c5927cc7067e5993f25.png",
    "https://dcassetcdn.com/design_img/1422015/516111/516111_9325875_1422015_d7b55c51_image.png",
    "https://www.elumatec.com/upload/partners/big/elumatec-partners-orgadata-jfjp.jpg",
    // Add more brand image URLs here
  ];

const HomeTopMentors = () => {
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
            <div className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold">{mentor.name}</h3>
                <div className="flex items-center mt-1">
                  
                    <RxBackpack className="text-xl mr-2 text-green-500 "/>
                
                  <span className="text-sm text-gray-500 mt-1">{mentor.experience}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {mentor.description}
                </p>
                <button className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-all duration-300 w-full">
                  Book A Free Trial
                </button>
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
    
    <div className="bg-green-950 mt-20 text-white p-8 flex items-center ">
      <div className="flex flex-col max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-4 w-3/4">Ready to unlock your full potential?</h1>
        <p className="text-lg mb-6 w-2/3">Join <span className="text-green-500">CodingIdol</span> today and embark on a journey of growth, mentorship, and success. Start Connecting Now!</p>
        <button className="bg-green-500 hover:bg-green-700 w-72 text-white font-bold py-4 px-4 rounded">Get Started</button>
      </div>
      <div className="mt-10">
        {/* Replace with your image source */}
        <img src="https://static.vecteezy.com/system/resources/previews/000/450/920/original/man-with-laptop-sitting-in-nature-and-leaves-concept-illustration-for-working-freelancing-studying-education-work-from-home-vector-illustration-in-flat-cartoon-style.jpg" alt="CodingIdol" className="w-full max-w-md rounded-3xl" />
      </div>
    </div>
    </>
  );
};

export default HomeTopMentors;
