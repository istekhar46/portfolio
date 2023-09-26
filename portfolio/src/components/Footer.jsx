import React from "react";
// import { useDarkMode } from "./DarkModeContext";

const Footer = () => {
//   const { darkMode } = useDarkMode();

//   const themeClass = darkMode ? "dark" : "light";

  return (
    <footer className="bg-gray-600">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
