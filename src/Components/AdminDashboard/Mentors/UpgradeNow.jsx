import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function UpgradeNow() {
  const benefits = [
    "Mentors offer valuable guidance and advice to students, helping them navigate academic, personal, and career challenges.",
    "Mentors provide insights based on their own experiences and expertise, offering perspectives that students may not have considered otherwise.",
    "Mentors often serve as role models for students, helping them to emulate positive traits and behaviors as they progress in their academic and professional journey."
  ];

  return (
    <div className=" bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl p-5 border-2 border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Devon Lane"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">Devon Lane</h3>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>

        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Students with mentors can benefit in various ways:
        </h2>

        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="min-w-2 h-2 w-2 rounded-full bg-green-500 mt-2" />
              <p className="text-sm text-gray-600 leading-relaxed">{benefit}</p>
            </li>
          ))}
        </ul>

        <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors font-medium">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}

export default UpgradeNow;