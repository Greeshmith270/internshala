import React from "react";
import logo from "../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="text-gray-600 shadow-lg p-4 box-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center h-10">
          <img src={logo} alt="Logo" className="h-20 w-30 mr-4 mt-0 bg-transparent" />
          <ul className="flex space-x-4 font-semibold">
            <li className="hover:text-blue cursor-pointer">Internships</li>
            <span className="-mx-5"><IoMdArrowDropdown /></span>
            <li className="hover:text-blue cursor-pointer">Jobs</li>
            <li className="hover:text-blue cursor-pointer">Courses</li>
          </ul>
        </div>
        <div className="h-10">
          <ul className="flex space-x-6 font-semibold">
            <li className="hover:text-blue pt-2 cursor-pointer">Search</li>
            <li>
              <button className="mt-1 py-1 px-4 border border-blue-400 rounded hover:bg-blue-dark">
                Login
              </button>
            </li>
            <button className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-dark">Candidate-Sign-up</button>
            <button className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-dark">Employer-Sign-up</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
