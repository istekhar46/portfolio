import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const menuRef = useRef("null");

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

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
        <div className=" flex gap-3 justify-center items-center">
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex gap-3">
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
          </div>

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
        </div>
        <div className="flex justify-center items-center gap-3">
          <a
            className="resume"
            href="https://drive.google.com/file/d/16ZD0lbuztprLK9zsQtVR08rTTa-qN1r5/view?usp=drive_link"
            target="_blank"
          >
            <div className="cursor-pointer">
              <button className="text-gray-400 font-bold text-[24px]">
                Resume
              </button>
            </div>
          </a>

          <span className="md:hidden">
            <BiMenu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
