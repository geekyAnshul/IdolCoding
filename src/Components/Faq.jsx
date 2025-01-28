import React, { useState } from 'react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null); 

    const toggle = (index) => {
      
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index); 
      }
    };
  return (
    <div className='max-w-7xl mx-auto px-4 py-20'>
         {/* <div className="flex flex-col md:flex-row gap-8 items-center mt-20"> */}
     
     <div className="flex flex-col gap-4 w-full ">
       {/* FAQ Item 1 */}
      <h1 className='font-bold text-5xl text-center'>Frequently Asked Questions</h1>
      <p className='text-center text-zinc-500 text-base'>Find snswers to commonly asked Question about Long-Term membership</p>
       <div
         className=" p-4 rounded-lg shadow-md cursor-pointer mt-8"
         onClick={() => toggle(0)} 
       >
         <div className="flex justify-between items-center">
           <h3 className="text-lg font-medium text-gray-800">Suspendisse risus purus</h3>
           <svg
             className={`w-6 h-6 transition-transform duration-300 ${
               openIndex === 0 ? 'rotate-180' : ''
             }`}
             viewBox="0 0 20 20"
             fill="currentColor"
           >
             <path
               fillRule="evenodd"
               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
               clipRule="evenodd"
             />
           </svg>
         </div>
         {openIndex === 0 && (
           <p className="mt-2 text-gray-600 text-sm">
             Ornare arcu praesent in tempor ut facilisi quis id. Pharetra faucibus orci fermentum
             aenean interdum dolor ac cursus sit tortor enimmus.
           </p>
         )}
       </div>

       {/* FAQ Itemn 2 */}
       <div
         className=" p-4 rounded-lg shadow-md cursor-pointer"
         onClick={() => toggle(1)} 
       >
         <div className="flex justify-between items-center">
           <h3 className="text-lg font-medium text-gray-800">Curabitur non nulla sit amet nisl tempus</h3>
           <svg
             className={`w-6 h-6 transition-transform duration-300 ${
               openIndex === 1 ? 'rotate-180' : ''
             }`}
             viewBox="0 0 20 20"
             fill="currentColor"
           >
             <path
               fillRule="evenodd"
               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
               clipRule="evenodd"
             />
           </svg>
         </div>
         {openIndex === 1 && (
           <p className="mt-2 text-gray-600">
             Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.
           </p>
         )}
       </div>

       {/* FAQ items 3 */}

       <div
         className=" p-4 rounded-lg shadow-md cursor-pointer"
         onClick={() => toggle(3)} 
       >
         <div className="flex justify-between items-center">
           <h3 className="text-lg font-medium text-gray-800">Suspendisse risus purus</h3>
           <svg
             className={`w-6 h-6 transition-transform duration-300 ${
               openIndex === 3 ? 'rotate-180' : ''
             }`}
             viewBox="0 0 20 20"
             fill="currentColor"
           >
             <path
               fillRule="evenodd"
               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
               clipRule="evenodd"
             />
           </svg>
         </div>
         {openIndex === 3 && (
           <p className="mt-2 text-gray-600">
             Ornare arcu praesent in tempor ut facilisi quis id. Pharetra faucibus orci fermentum
             aenean interdum dolor ac cursus sit tortor enimmus.
           </p>
         )}
       </div>

       {/* faq 4 */}

       <div
         className=" p-4 rounded-lg shadow-md cursor-pointer"
         onClick={() => toggle(4)} 
       >
         <div className="flex justify-between items-center">
           <h3 className="text-lg font-medium text-gray-800">Suspendisse risus purus</h3>
           <svg
             className={`w-6 h-6 transition-transform duration-300 ${
               openIndex === 4 ? 'rotate-180' : ''
             }`}
             viewBox="0 0 20 20"
             fill="currentColor"
           >
             <path
               fillRule="evenodd"
               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
               clipRule="evenodd"
             />
           </svg>
         </div>
         {openIndex === 4 && (
           <p className="mt-2 text-gray-600">
             Ornare arcu praesent in tempor ut facilisi quis id. Pharetra faucibus orci fermentum
             aenean interdum dolor ac cursus sit tortor enimmus.
           </p>
         )}
       </div>
     </div>

     
   {/* </div> */}
    </div>
  )
}

export default Faq