import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
      const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
  return (
    <div>
           <nav className="xs:px-10 md:px-32  w-full mx-auto flex items-center justify-between  py-8 bg-[#effff8]">
      <div className="text-2xl font-semibold text-green-500">CODINGIDOL</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#12B76A]" : "text-black"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/find-a-mentor"
          className={({ isActive }) =>
            isActive ? "text-[#12B76A]" : "text-black"
          }
        >
          Find a Mentor
        </NavLink>
        <NavLink
          to="/mentorship"
          className={({ isActive }) =>
            isActive ? "text-[#12B76A]" : "text-black"
          }
        >
          Mentorship
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "text-[#12B76A]" : "text-black"
          }
        >
          About Us
        </NavLink>
      </div>
      <button className="hidden md:block px-10 py-2 bg-[#12B76A] text-white rounded-lg hover:bg-green-600">
        Sign Up
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-3xl text-green-500"
        onClick={toggleSidebar}
      >
        <HiMenuAlt3 />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="text-2xl text-green-500 m-4"
          onClick={toggleSidebar}
        >
          <HiX />
        </button>
        <div className="flex flex-col space-y-6 mt-10 px-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#12B76A]" : "text-black"
            }
            end
            onClick={closeSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/find-a-mentor"
            className={({ isActive }) =>
              isActive ? "text-[#12B76A]" : "text-black"
            }
            onClick={closeSidebar}
          >
            Find a Mentor
          </NavLink>
          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive ? "text-[#12B76A]" : "text-black"
            }
            onClick={closeSidebar}
          >
            Mentorship
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-[#12B76A]" : "text-black"
            }
            onClick={closeSidebar}
          >
            About Us
          </NavLink>
          <button className="px-10 py-2 bg-[#12B76A] text-white rounded-lg hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar