import React from 'react';
import { DollarSign, Users, Clock } from 'lucide-react';

function CardsSection() {
  return (
    <div className=" bg-gray-50 poppins">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-medium">Hi, <span className="text-emerald-500">Cody</span>!</h1>
          <span className="text-xl font-medium">Good Morning</span>
        </div>
        <p className="text-md text-zinc-800 font-normal"><span className="text-md text-emerald-500">12 new </span> student enrolled.</p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        <div className=" bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-100 text-sm mb-1">Total Earning</p>
              <h2 className="text-2xl font-semibold">1,20,000.00</h2>
            </div>
            <div className="bg-emerald-600 p-2 rounded-full">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Total Enrolled Students Card */}
        <div className=" bg-gradient-to-r from-emerald-700 to-emerald-500  rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-100 text-sm mb-1">Total Enrolled Students</p>
              <h2 className="text-2xl font-semibold">2346</h2>
            </div>
            <div className="bg-emerald-600 p-2 rounded-full">
              <Users className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Total Employment Hours Card */}
        <div className=" bg-gradient-to-r from-emerald-700 to-emerald-500  rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-100 text-sm mb-1">Total Employment hours</p>
              <h2 className="text-2xl font-semibold">234h 64 mins</h2>
            </div>
            <div className="bg-emerald-600 p-2 rounded-full">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;