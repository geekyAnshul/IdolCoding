import React from 'react';
import { Share2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function EventCards2() {
    const events = [
        {
          id: 1,
          title: "React-Unlocked",
          date: "25 Jan",
          location: "CodingIdol WorkSpace",
          price: "Free",
          image: "https://media.licdn.com/dms/image/v2/D4D22AQFA6hWc8yLAFA/feedshare-shrink_2048_1536/B4DZSNEy67HIAw-/0/1737533633721?e=2147483647&v=beta&t=hVDH2dx3KW_8U68Rx7Z828XQPIEYbZ4Oz_SBAAXOlT0"
        },
        {
          id: 2,
          title: "AI & ML Bootcamp",
          date: "22 Jan",
          location: "CodingIdol WorkSpace",
          price: "Free",
          image: "https://cribl.io/wp-content/uploads/2023/01/AdobeStock_561038346-2.jpeg"
        },
        {
          id: 3,
          title: "Full Stack Development with MERN",
          date: "18 Jan",
          location: "CodingIdol WorkSpace",
          price: "Free",
          image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max"
        },
        {
          id: 4,
          title: "Advanced UI/UX Design",
          date: "15 Jan",
          location: "CodingIdol WorkSpace",
          price: "$50",
          image: "https://s3-alpha.figma.com/hub/file/2942566861/7e3aaade-4be8-47a8-aa6c-fe6f0c220316-cover.png"
        },
        {
          id: 5,
          title: "Web Dev Bootcamp: React & Node",
          date: "10 Jan",
          location: "CodingIdol WorkSpace",
          price: "$30",
          image: "https://tecoreng.com/wp-content/uploads/2022/08/combination-of-node.js-with-react-js-1-1024x538.jpg"
        },
        {
          id: 6,
          title: "DevOps: Automate & Deploy",
          date: "8 Jan",
          location: "CodingIdol WorkSpace",
          price: "Free",
          image: "https://th.bing.com/th/id/OIP.RLOzeBuJHoaDYKi_ZIPFQwHaEK?rs=1&pid=ImgDetMain"
        }
      ];
      

  return (

    <div className=" max-w-7xl mx-auto py-20 ">
        <h1 className='text-4xl font-bold '>Gone but Golden</h1>
        <p className='text-zinc-400'>Our Past Events</p>
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-14">
        {events.map((event) => (
           <Link
           to={`/events/${event.id}`}
           state={{ event }} // Pass data using state
           key={event.id}
           className="relative group"
         >
          <div key={event.id} className="relative group">
            <div className="relative overflow-hidden rounded-xl">
             
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              
             
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1">
                <span className="text-white font-semibold">{event.price}</span>
              </div>
              
              
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4 text-white" />
                </button>
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              
             
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1">
                    <span className="text-white font-bold">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Coming Soon</h2>
          </div>
          </div>
           </Link>
        ))}
      </div>

    
     

    </div>
  );
}

export default EventCards2;