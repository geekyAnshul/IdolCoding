// import React from 'react'

// const Advertisment = () => {
//   return (
//     <div>
//         <div className="bg-green-950 mt-20 text-white p-8 flex items-center ">
//       <div className="flex flex-col max-w-4xl mx-auto">
//         <h1 className="text-5xl font-semibold mb-4 w-3/4">Ready to unlock your full potential?</h1>
//         <p className="text-lg mb-6 w-2/3">Join <span className="text-green-500">CodingIdol</span> today and embark on a journey of growth, mentorship, and success. Start Connecting Now!</p>
//         <button className="bg-green-500 hover:bg-green-700 w-72 text-white font-bold py-4 px-4 rounded">Get Started</button>
//       </div>
//       <div className="mt-10">
//         {/* Replace with your image source */}
//         <img src="https://static.vecteezy.com/system/resources/previews/000/450/920/original/man-with-laptop-sitting-in-nature-and-leaves-concept-illustration-for-working-freelancing-studying-education-work-from-home-vector-illustration-in-flat-cartoon-style.jpg" alt="CodingIdol" className="w-full max-w-md rounded-3xl" />
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Advertisment

import React from 'react';

const Advertisment = () => {
  return (
    <div>
      <div className="bg-green-950 xs:w-full mt-20 text-white px-8 py-20 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="flex flex-col md:max-w-7xl md:mx-auto ">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 md:w-3/4 text-center md:text-left">
            Ready to unlock your full potential?
          </h1>
          <p className="text-lg mb-6 md:w-2/3 text-center md:text-left">
            Join <span className="text-green-500">CodingIdol</span> today and embark on a journey of growth, mentorship, and success. Start Connecting Now!
          </p>
          <button className="bg-green-500 hover:bg-green-700 w-full md:w-72 text-white font-bold py-4 px-4 rounded">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/450/920/original/man-with-laptop-sitting-in-nature-and-leaves-concept-illustration-for-working-freelancing-studying-education-work-from-home-vector-illustration-in-flat-cartoon-style.jpg"
            alt="CodingIdol"
            className="w-60 h-60 md:w-full md:max-w-md rounded-full md:rounded-3xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisment;
