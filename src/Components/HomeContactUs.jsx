import React, { useState } from "react";
import Contactus from "../assets/contactus.png"
function HomeContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Form Submitted!");
    setFormData({ email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-green-50 py-8">
    <h1 className="text-4xl font-bold mb-8 text-center mt-20">Contact Us</h1>
    <div className=" max-w-7xl mx-auto bg-gradient-to-b from-white to-green-100">
      
      <div className="flex flex-col md:flex-row items-center max-w-7xl bg-green-50 p-8 rounded-xl gap-8">
        {/* Illustration Section */}
        <div className="w-full md:w-1/2">
          <img
            src={Contactus}
            alt="Customer Support"
            className="w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-green-500 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-green-300"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-green-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 rounded bg-white text-black outline-none focus:ring-2 focus:ring-green-300"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className=" py-3 bg-zinc-900 text-white font-semibold rounded hover:bg-zinc-600 hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomeContactUs;
