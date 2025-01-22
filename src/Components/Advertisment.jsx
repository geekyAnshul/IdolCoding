

import React from 'react';
import advertise from '../assets/advertiseimg.png'
import { useNavigate } from 'react-router-dom';
const Advertisment = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-green-950 xs:w-full mt-20 text-white px-32 py-20 flex flex-col md:flex-row  justify-between">
        {/* Text Section */}
        <div className="flex flex-col md:max-w-7xl md:mx-auto ">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 md:w-3/4 text-center md:text-left">
            Ready to unlock your full potential?
          </h1>
          <p className="text-lg mb-6 md:w-2/3 text-center md:text-left">
            Join <span className="text-green-500">CodingIdol</span> today and embark on a journey of growth, mentorship, and success. Start Connecting Now!
          </p>
          <button onClick={() => { navigate('/launching') }} className="bg-green-500 hover:bg-green-700 w-full md:w-72 text-white font-bold py-4 px-4 rounded">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 ">
          <img
            src={advertise}
            alt="CodingIdol"
            className="w-60 h-60 md:w-full md:max-w-md rounded-full md:rounded-3xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisment;
