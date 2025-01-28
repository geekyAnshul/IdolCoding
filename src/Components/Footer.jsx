import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold">Codingidol.com</h2>
          <p className="mt-4">
            At Codingidol, we believe in the transformative power of services.
          </p>
          <p className="mt-4">B-48, 3rd Floor, Bag Dilkusha, Bhopal, MP (462023)</p>
          <p className="mt-2">+91 7554169396</p>
          <p className="mt-2">contact@techidolsoulutions.com</p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-bold">Resources</h2>



          <ul className="mt-4 space-y-2">
            <li>Home</li>
            <li>Find a Mentor</li>
            <li>Mentorship</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-4">NEWSLETTER</p>
          <p className="text-sm">Join our weekly mailing list</p>
          
          <div className="mt-6 flex space-x-4">
            <a
              href="https://x.com/CodingIdol"
              className="bg-green-500 p-2 h-8 w-8 rounded-full hover:bg-green-600 transition-all flex justify-center items-center"  
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/codingidol"
              className="bg-green-500 p-2 h-8 w-8 flex justify-center items-center rounded-full hover:bg-green-600 transition-all"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.facebook.com/codingidol"
              className="bg-green-500 p-2 h-8 w-8 flex justify-center items-center rounded-full hover:bg-green-600 transition-all"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/codingidol/"
              className="bg-green-500 p-2 h-8 w-8 flex justify-center items-center rounded-full hover:bg-green-600 transition-all"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-950 text-center py-4 mt-8">
        <p>
          Copyright © Codingidol Solutions | Designed & Developed by - Team
          Techido
        </p>
      </div>
    </footer>
  );
};

export default Footer;
