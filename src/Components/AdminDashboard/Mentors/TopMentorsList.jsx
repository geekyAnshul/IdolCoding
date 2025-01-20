import React, { useState } from 'react';
import { Filter,BriefcaseBusiness,Send } from 'lucide-react';

function TopMentorsList() {
  const [filterText, setFilterText] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'Ashley Emily',
      rating: 4.5,
      experience: '4 year of Experience',
      role: 'Front-end Developer',
      image: 'https://th.bing.com/th/id/OIP.M_19OaMLsd2TI102K1H8DgHaJQ?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Michael Joseph',
      rating: 4.5,
      experience: '4 year of Experience',
      role: 'Front-end Developer',
      image: 'https://img.freepik.com/premium-photo/vibrant-style-man-studio-portrait-yellow-background_189959-2659.jpg',
    },
    {
      id: 3,
      name: 'Linda Kimberly',
      rating: 4.5,
      experience: '4 year of Experience',
      role: 'Front-end Developer',
      image: 'https://i.pinimg.com/originals/d8/82/59/d88259a42fcc6ee481c879e05b5ff465.jpg',
    },
    {
      id: 4,
      name: 'Bessie Cooper',
      rating: 4.5,
      experience: '4 year of Experience',
      role: 'Front-end Developer',
      image: 'https://www.caba2.work/blog/wp-content/uploads/2019/12/thum-5-700x306.jpg',
    },
  ];

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(filterText.toLowerCase()) ||
    mentor.role.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className=" bg-white -mt-16">
      <div className="max-w-4xl">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-medium text-green-500">Top Mentors list</h1>
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border-2 border-zinc-200">
              <span className="text-gray-400">Filter</span>
              <Filter className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Filter mentors..."
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-6">Top Picks Based on Your Chosen Preferences.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-lg px-4 py-10 border-2 border-zinc-300">
              <div className="flex gap-4 mb-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-28 rounded-lg object-cover"
                />
                <div>
                  <div className="flex items-center gap-8 ">
                    <h3 className="font-medium text-xl  text-gray-700">{mentor.name}</h3>
                    <div>
                    <span className="text-gray-700">{mentor.rating}</span>
                    <span className="text-yellow-400">★</span>
                    </div>
                  </div>
                  <div className="flex flex-col text-base text-gray-500 mt-2">
                    <div className="flex items-center gap-1 mt-1">
                    <BriefcaseBusiness className='text-gray-400 mr-2 '/>
                      {mentor.experience}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                    <Send className='text-gray-400 mr-2 '/>
                      {mentor.role}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 ">
                As a mentor, I plan to go above and beyond in this program to ensure that you reach your full potential. Not only will I help you to achieve your technical skills ....
              </p>

              <div className="flex flex-col gap-4 mt-10">
                <button className="text-green-500 border border-green-500 rounded-lg py-2 hover:bg-green-50 transition-colors">
                  See Profile
                </button>
                <button className="bg-green-500 text-white rounded-lg py-3 hover:bg-green-600 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopMentorsList;