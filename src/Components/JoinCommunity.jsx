// import React, { useState } from "react";
// import object from "../assets/query.jpg"; // If you want to use a single default image for avatars.

// function JoinCommunity() {
//     const [email, setEmail] = useState("");

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Email submitted:", email);
//     };

    

//     const avatars = [
//         object, // You can use the same imported image.
//         object,
//         object,
//         object,
//         object,
//         object,
//         object,
//         object,
//     ];

//     return (
//         <div className="bg-green-200 min-h-screen flex items-center justify-center">
//             <div className="relative z-50 bg-[#12B76A] p-10 rounded-3xl w-[150%] max-w-3xl text-center">
//                 <h1 className="text-3xl font-bold text-white mb-4">Join Our Community</h1>
//                 <p className="text-lg text-white mb-8">
//                     At <span className="font-semibold">[MentorPlatform]</span>, we believe in the power of community to drive
//                     personal and professional growth. Our platform is more than just a space for mentorship - it's a vibrant
//                     community where individuals come together to inspire, learn, and achieve their goals.
//                 </p>
//                 <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
//                     <input
//                         type="email"
//                         className="px-4 py-2 rounded-md text-gray-700 focus:outline-none w-full md:w-2/3"
//                         placeholder="Drop Your Email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                     />
//                     <button
//                         type="submit"
//                         className="bg-white text-green-500 px-6 py-2 rounded-md font-bold hover:bg-green-600 hover:text-white transition"
//                     >
//                         Invite Me
//                     </button>
//                 </form>

//                 {/* Dashed circle and avatars */}
//                 <div
//                     className=" absolute -top-16 left-1/2 transform -translate-x-1/2 w-[170%] h-[130%] rounded-full border-dashed border-2 border-green-400"
//                 >
//                     {avatars.map((src, index) => (
//                         <div
//                             key={index}
//                             className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-white"
//                             style={{
//                                 top: `${45 + 50 * Math.sin((index * Math.PI) / 4)}%`,
//                                 left: `${45 + 45 * Math.cos((index * Math.PI) / 4)}%`
//                             }}
//                         >
//                             <img
//                                 src={src}
//                                 alt={`Avatar ${index + 1}`}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </div>
       

//     );
// }

// export default JoinCommunity;

import React from "react";
import { useState } from "react";

function JoinCommunity() {
    const images = [
         // Replace with your image URLs
        // "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
        "https://image.freepik.com/free-photo/young-woman-isolated-yellow-background-with-glasses-smiling_1368-41023.jpg",
        "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1775889152.jpg",
        // "https://img.freepik.com/premium-photo/business-backgroun_512531-1894.jpg",
        "https://th.bing.com/th/id/OIP.pVxEOQYNGbwX85AlBjwVmAAAAA?w=374&h=249&rs=1&pid=ImgDetMain",
        // "https://th.bing.com/th/id/OIP.I2J7_BcbCVdZvpmdg_GbLQAAAA?rs=1&pid=ImgDetMain", // Replace with your image URLs
        "https://thumbs.dreamstime.com/b/photo-portrait-concept-smiling-man-moustache-pointing-thumbs-up-down-isolated-pastel-blue-colored-photo-portrait-207241434.jpg",
        "https://img.freepik.com/premium-photo/feeling-proud-arrogant-confident-looking-satisfied-successful-pointing-self_1194-69022.jpg",
        "https://thumbs.dreamstime.com/b/photo-portrait-funny-brunette-girl-grimacing-fooling-showing-tongue-smiling-isolated-pink-color-background-photo-portrait-208074787.jpg",
       
        "https://image.freepik.com/free-photo/handsome-man-yellow-background_1368-33382.jpg", // Replace with your image URLs
        "https://img.freepik.com/free-photo/handsome-smiling-adult-man-casual-outfit-smiling-looking-left-promo-offer-standing-against-blue-background_1258-65289.jpg",
        "https://img.freepik.com/premium-photo/woman-wearing-yellow-t-shirt-with-yellow-top-white-background_873925-155186.jpg",
    ];

    const positions = [
        "bottom-20 left-[601px]", //
        "top-28 left-[731px]",   //
        "top-52 left-[420px]", //
        "top-80 right-72",    //
        "top-24 right-96",
        "bottom-24 right-[500px]",
        "top-28 left-[1000px]",   ///-----
        "bottom-20 left-[901px]", //
        "bottom-40 left-[460px]",
        
       
    ];
    

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <div className="relative bg-green-950 h-1/4 flex items-center justify-center">
            <div className="relative -space-x-32 w-full h-[400px] md:h-[600px] flex items-center justify-center">
                {/* Circle 1 */}
                <div className=" w-64 h-64 md:w-96 md:h-96 border-2 border-dashed border-green-500 rounded-full top-10 left-10 md:top-16 md:left-16 z-0"></div>
                {/* Circle 2 */}
                <div className=" w-64 h-64 md:w-96 md:h-96 border-2 border-dashed border-green-500 rounded-full top-10 left-10 md:top-16 md:left-16 z-0"></div>
                {/* Circle 3 */}
                <div className=" xs:hidden md:block w-64 h-64 md:w-96 md:h-96 border-2 border-dashed border-green-500 rounded-full top-10 left-10 md:top-16 md:left-16 z-0"></div>

                {/* Images */}
                {/* {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Small Avatar ${index + 1}`}
                        className={`absolute w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-green-500 ${
                            index === 0
                                ? "top-96 left-72"
                                : index === 1
                                ? "top-32 left-96"
                                : "top-52 left-60"
                        }`}
                    />
                ))} */}
                {images.map((src, index) => (
    <img
        key={index}
        src={src}
        // alt={`Small Avatar ${index + 1}`}
        className={`absolute w-10 h-10 md:w-14 md:h-14 xs:hidden lg:block rounded-full object-cover border-2 border-green-500 ${
            positions[index % positions.length]
        }`}
    />
))}

            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-10 md:p-10 rounded-xl shadow-xl w-[90%] max-w-2xl bg-green-600">
                <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-white">
                    Join Our Community
                </h1>
                <p className="text-gray-100 text-center mb-6">
                    Be part of a vibrant community where you can learn, share, and grow together.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <input
                        type="email"
                        placeholder="Drop Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-2/3"
                    />
                    <button
                        type="submit"
                        className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition w-full md:w-auto"
                    >
                        Invite Me
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JoinCommunity;
