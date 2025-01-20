import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function YourMentors() {
  const mentors = [
    {
      id: 1,
      name: 'Marvin McKinney',
      role: 'Software Developer',
      date: '19/12/2023',
      image: 'https://th.bing.com/th/id/OIP.CwjJP_1OmyF1YvmZo3o9SQHaFx?w=1024&h=799&rs=1&pid=ImgDetMain'
    },
    {
      id: 2,
      name: 'Courtney Henry',
      role: 'UI/UX Designer',
      date: '19/12/2023',
      image: 'https://s.yimg.com/lo/api/res/1.2/Rj8PG0vfPatVxXJBTBEgAA--/YXBwaWQ9YXBlY21lZGlhO3NtPTE7dz04MDA-/https://media.zenfs.com/en/cinema.com.my/840f219bb6907f931a1f4dc723b63627'
    },
    {
      id: 3,
      name: 'Darrell Steward',
      role: 'Software Tester',
      date: '19/12/2023',
      image: 'https://th.bing.com/th/id/OIP.IzdiIgy7ZJcOYjeMtLUozwHaE7?w=626&h=417&rs=1&pid=ImgDetMain'
    },
    {
      id: 4,
      name: 'Robert Fox',
      role: 'Web Designer',
      date: '19/12/2023',
      image: 'https://img.freepik.com/premium-photo/man-suit-with-pocket-square-his-chest_905510-1943.jpg'
    }
  ];



  //MALES
  //https://img.freepik.com/premium-photo/male-model-suit-fashionable-young-man-blue-suit-posing-against-black-background_817921-29230.jpg
  //https://th.bing.com/th/id/OIP.P1zem8DAU6_dJx4ycACAHAHaE7?w=626&h=417&rs=1&pid=ImgDetMain
  //https://img.freepik.com/premium-photo/male-office-worker-businessman_76964-34471.jpg
  //https://img.freepik.com/premium-photo/absolut-reality-handsom-man-full-suit-using-generated-by-ai_942243-3013.jpg
  //https://th.bing.com/th/id/OIP.tMMgziePp2utMwuXHwPsKQHaE7?w=800&h=533&rs=1&pid=ImgDetMain
  //https://th.bing.com/th/id/OIP.b1RTcc9XGriu6Eve8Pd4MAHaE8?w=1024&h=683&rs=1&pid=ImgDetMain
  //https://img.freepik.com/premium-photo/business-concept-portrait-handsome-business-man-holding-hand-with-confident-face_953680-28117.jpg
  //https://img.freepik.com/premium-photo/professional-businessman-wear-black-suit-formal-wear_894423-1293.jpg

  return (
    <div className=" bg-gray-50 pt-4">
      <div className="w-full max-w-md bg-white rounded-lg p-6 pb-10 border-2 border-zinc-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Your Mentors</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-8 h-8" />
          </button>
        </div>

        <div className="space-y-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-500">{mentor.role}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{mentor.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourMentors;