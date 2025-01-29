// import React from 'react';
// import { Share2, Heart } from 'lucide-react';

// function EventCards() {
//   const events = [
//     {
//       id: 1,
//       title: "React-Unlocked",
//       date: "25 Jan",
//       location: "CodingIdol WorkSpace",
//       price: "Free",
//       image: "https://strapi.dhiwise.com/uploads/react_isomorphic_boilerplate_OG_Image_aa60849ab3.webp"
//     },
//     {
//         id: 2,
//         title: "MERN Mavericks",
//         date: "10 Feb",
//         location:"CodingIdol WorkSpace",
//         price: "Free",
//         image: "https://wallpaperaccess.com/full/9445609.jpg"
//       },
//       {
//         id: 3,
//         title: "AI/ML Frontiers",
//         date: "18 Feb",
//         location: "CodingIdol WorkSpace",
//         price: "Free",
//         image: "https://thumbs.dreamstime.com/b/machine-learning-concept-robot-think-binary-code-black-background-140169943.jpg"
//       },
//       {
//         id: 4,
//         title: "Backend Breakthrough",
//         date: "22 Feb",
//         location: "CodingIdol WorkSpace",
//         price: "Free",
//         image: "https://wallpapercave.com/wp/wp5070716.jpg"
//       },
//       {
//         id: 5,
//         title: "Python Powerhouse",
//         date: "28 Feb",
//         location:"CodingIdol WorkSpace",
//         price: "Free",
//         image: "https://wallpapercave.com/wp/wp7133244.jpg"
//       },
//       {
//         id: 6,
//         title: "UI/UX Bootcamp",
//         date: "5 Mar",
//         location: "CodingIdol WorkSpace",
//         price: "Free",
//         image: "https://th.bing.com/th/id/OIP.nr6mYh-_d_XD1F9DshQWiQHaFj?w=750&h=562&rs=1&pid=ImgDetMain"
//       }
    
//   ];

//   return (

//     <div className=" max-w-7xl mx-auto py-20 xs:px-5 lg:px-0">
//         <h1 className='text-4xl font-bold '>Glory Ahead</h1>
//         <p className='text-zinc-400 mt-2'>Our Upcomming Events</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-14">
//         {events.map((event) => (
//           <div key={event.id} className="relative group">
//             <div className="relative overflow-hidden rounded-xl">
//               {/* Image with gradient overlay */}
//               <img 
//                 src={event.image} 
//                 alt={event.title}
//                 className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              
//               {/* Price tag */}
//               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1">
//                 <span className="text-yellow-500 font-semibold">{event.price}</span>
//               </div>
              
//               {/* Action buttons */}
//               <div className="absolute top-4 right-4 flex space-x-2">
//                 <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
//                   <Share2 className="w-4 h-4 text-green-500" />
//                 </button>
//                 <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
//                   <Heart className="w-4 h-4 text-red-500" />
//                 </button>
//               </div>
              
//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <div className="flex items-start gap-3">
//                   <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1">
//                     <span className="text-white font-bold">{event.date}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-white font-semibold mb-1">{event.title}</h3>
//                     <p className="text-gray-300 text-sm">{event.location}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default EventCards;
import React from "react";
import { Link } from "react-router-dom";
import { Share2, Heart } from "lucide-react";
import { useLocation } from "react-router-dom";


function EventCards() {
  const events = [
    {
      id: 1,
      title: "React-Unlocked",
      date: "25 Jan",
      location: "CodingIdol WorkSpace",
      price: "Free",
      image:
        "https://strapi.dhiwise.com/uploads/react_isomorphic_boilerplate_OG_Image_aa60849ab3.webp",
    },
    {
      id: 2,
      title: "MERN Mavericks",
      date: "10 Feb",
      location: "CodingIdol WorkSpace",
      price: "Free",
      image: "https://wallpaperaccess.com/full/9445609.jpg",
    },
    {
      id: 3,
      title: "AI/ML Frontiers",
      date: "18 Feb",
      location: "CodingIdol WorkSpace",
      price: "Free",
      image:
        "https://thumbs.dreamstime.com/b/machine-learning-concept-robot-think-binary-code-black-background-140169943.jpg",
    },
    {
      id: 4,
      title: "Backend Breakthrough",
      date: "22 Feb",
      location: "CodingIdol WorkSpace",
      price: "Free",
      image: "https://wallpapercave.com/wp/wp5070716.jpg",
    },
    {
                id: 5,
                title: "Python Powerhouse",
                date: "28 Feb",
                location:"CodingIdol WorkSpace",
                price: "Free",
                image: "https://wallpapercave.com/wp/wp7133244.jpg"
              },
              {
                id: 6,
                title: "UI/UX Bootcamp",
                date: "5 Mar",
                location: "CodingIdol WorkSpace",
                price: "Free",
                image: "https://th.bing.com/th/id/OIP.nr6mYh-_d_XD1F9DshQWiQHaFj?w=750&h=562&rs=1&pid=ImgDetMain"
              }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 xs:px-5 lg:px-0">
      <h1 className="text-4xl font-bold ">Glory Ahead</h1>
      <p className="text-zinc-400 mt-2">Our Upcoming Events</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-14">
        {events.map((event) => (
          <Link
            to={`/events/${event.id}`}
            state={{ event }} // Pass data using state
            key={event.id}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1">
                <span className="text-yellow-500 font-semibold">{event.price}</span>
              </div>

              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4 text-green-500" />
                </button>
                <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                  <Heart className="w-4 h-4 text-red-500" />
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
