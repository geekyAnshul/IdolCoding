import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import query from '../assets/query.jpg';
import { IoBriefcaseOutline } from "react-icons/io5";

const MentorCard = () => {
    const mentors = [
        {
            name: "Mr. Wade Warren",
            image: "https://ysm-res.cloudinary.com/image/upload/c_limit,f_auto,h_630,q_auto,w_1200/v1/yms/prod/8244ef59-d8c9-4c49-a524-34b0154fae1a",
            experience: "2 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Cameron Williamson",
            image: "https://img.freepik.com/premium-photo/accomplished-female-software-engineer_975188-53177.jpg",
            experience: "4 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
        {
            name: "Ms. Jenny Wilson",
            image: "https://thumbs.dreamstime.com/b/confident-smiling-indian-young-business-woman-student-sales-professional-office-employee-hr-teacher-india-standing-arms-192389177.jpg",
            experience: "3 Years",
            description: "As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential.",
        },
    ];

    return (
        <div className="bg-[#defff2]">
            {/* <div className="max-w-7xl mx-auto py-16 px-5 mt-20">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Specialized Mentors <br />
                    <span className="text-green-500">from all around the world</span>
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false,
                    }}
                    loop={true}
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
                                    src={brand.image}
                                    alt={brand.name}
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
                                    <button className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-all duration-300 w-full">
                                        Book A Free Trial
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}






            <div className="overflow-x-hidden relative p-10 w-full mt-20">
            <h2 className="text-5xl text-green-500 font-bold text-center mb-16">
                    Specialized Mentors  
                    <span className=" text-black pl-2">from <br /> all around the world</span>
                </h2>
                {/* Swiper Track */}
                <div className="flex animate-scroll-reverse space-x-20">
                    {mentors.concat(mentors).map((mentor, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 flex items-center justify-center bg-white"
                        >
                            <div className="flex flex-col p-6 border-2 border-green-500  shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-56 object-cover mb-5 rounded-md"
                                />
                                <h1 className="text-green-950 font-bold text-xl mb-2">
                                    {mentor.name}
                                </h1>
                                <div className="flex items-center mb-2">
                                    {/* <RxBackpack className="text-xl mr-2 text-green-500" /> */}
                                    <IoBriefcaseOutline className="text-xl mr-2  text-green-500"/>
                                    <span className="text-sm text-gray-500">{mentor.experience}</span>
                                </div>
                                <p className="text-gray-700 text-sm mb-4">
                                    {mentor.description}
                                </p>
                                {/* <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full transition-transform duration-300">
                                    Book A Free Trial
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Query section */}
            <div className="bg-green-900 p-10 text-white flex ">
                <div className="container mx-auto text-start w-2/3 m-20 mi-0">
                    <h1 className="text-4xl font-bold mb-4">Any Queries?</h1>
                    <p className="text-lg mb-8">
                        Join us on our mission to empower growth through mentorship. Whether
                        you're seeking guidance or looking to share your expertise as a mentor,
                        we invite you to be part of our vibrant community and together, let's
                        unlock your full potential.
                    </p>
                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                        Get In Touch
                    </button>
                </div>
                <div className="flex items-center justify-center mt-10 text-center  ">
                    <img
                        src={query} // Replace with actual image URL
                        alt="Illustration of people working together"
                        className="h-80 w-80 rounded-3xl"
                    />
                </div>
            </div>



            <div className="bg-white min-h-screen flex items-center justify-center px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-5xl">
                    {/* Left Section */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                            Choose Your <span className="text-green-500">Domain</span> that you{" "}
                            <span className="text-green-500">Love</span>
                        </h1>
                        <p className="text-gray-600 mt-6 text-lg">
                            We are dedicated to continuously improving our platform to better
                            serve the needs of our users. We listen to feedback, adapt to
                            changing trends, and strive for excellence in everything we do.
                        </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 mt-8 rounded">
                            Join Now
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="border-2 border-green-500 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md">
                            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
                                {/* Replace with Icon */}
                                <span className="text-2xl">&#60;&#47;&#62;</span>
                            </div>
                            <h3 className="text-lg font-semibold">Web Development</h3>
                        </div>

                        {/* Card 2 */}
                        <div className="border-2 border-green-500 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md">
                            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
                                {/* Replace with Icon */}
                                <span className="text-2xl">&#x1F4CA;</span>
                            </div>
                            <h3 className="text-lg font-semibold">Data Science</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="border-2 border-green-500 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md">
                            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
                                {/* Replace with Icon */}
                                <span className="text-2xl">&#x1F4B5;</span>
                            </div>
                            <h3 className="text-lg font-semibold">Digital Marketing</h3>
                        </div>

                        {/* Card 4 */}
                        <div className="border-2 border-green-500 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md">
                            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
                                {/* Replace with Icon */}
                                <span className="text-2xl">&#x1F4CB;</span>
                            </div>
                            <h3 className="text-lg font-semibold">Graphics Design</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorCard;