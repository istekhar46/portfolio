import React, { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition duration-500 ease-in-out`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-teal-500 dark:text-teal-400">
          <Link to="/">Istekhar Khan</Link>
        </div>
        <ul className="flex space-x-8">
          <li className="text-gray-300 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300 ease-in-out">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-gray-300 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300 ease-in-out">
            <a href="#">Projects</a>
          </li>
          <li className="text-gray-300 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300 ease-in-out">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="text-3xl text-gray-600 dark:text-gray-400 flex gap-4">
          <a target="_blank" href="https://twitter.com/istekharkhan46">
            <AiFillTwitterCircle />
          </a>
          <a target="_blank" href="https://github.com/istekhar46">
            <AiFillGithub />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/istekhar46/">
            <AiFillLinkedin />
          </a>
        </div>
        <a href='https://drive.google.com/file/d/16ZD0lbuztprLK9zsQtVR08rTTa-qN1r5/view?usp=drive_link' target="_blank">
          <div className="cursor-pointer">
            <button className="text-gray-400 font-bold text-[24px]">
              Resume
            </button>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
