import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-4 sm:py-8">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <ul className="list-none mt-2 sm:mt-0 sm:flex space-x-4">
            <li>
              <i className="far fa-envelope mr-2"></i> adityasingh3210@gmail.com
            </li>
            <li>
              <i className="fab fa-linkedin-in mr-2"></i>{" "}
              <a className="text-white" href="https://www.linkedin.com/in/aditya-kumar-singh-4a9379208">
                Linkedin
              </a>
            </li>
            <li>
              <i className="fab fa-github mr-2"></i>{" "}
              <a className="text-white" href="https://github.com/adiri77">
                Github
              </a>
            </li>
          </ul>
          <h1 className="text-3xl font-bold mt-4 sm:mt-0">Aditya Singh</h1>
        </div>
      </header>
      <div className="container mx-auto w-full mt-8 px-4 sm:px-0">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold">KEY SKILLS</h2>
          <hr className="my-2 border-t-2 border-blue-600" />
          <div className="flex flex-wrap mt-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              C++ (Bold)
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Java (Familiar)
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Data Structure & Algo
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              OOPS Concept
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              DBMS
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              HTML
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              CSS
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Javascript
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              React
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Frontend Development
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2">
              Git & Github
            </button>
          </div>
        </section>
        <section className="mt-4 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold">INTERNSHIP</h2>
          <hr className="my-2 border-t-2 border-blue-600" />
          <div className="flex flex-col sm:flex-row justify-between mt-2">
            <div>
              <p className="text-blue-600 font-semibold">1) Frontend Development</p>
              <p className="text-gray-600">At ABES Institute of Technology</p>
            </div>
            <div>
              <p>July'23 - Aug'23</p>
              <p>Ghaziabad, India</p>
            </div>
          </div>
          <div className="mt-2">
            <h6>
              <b>VlogG (Tour and Tourism Website)</b> -{" "}
              <a className="text-blue-600" href="https://github.com/adiri77/Blogzy">
                [SourceCode]
              </a>
            </h6>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li>
                  Discover, Explore, and Experience the City with VlogG: Your Ultimate Travel Companion.
                </li>
                <li>
                  Tech Involved: <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>ReactJS</b>, <b>LocalStorage</b>.
                </li>
                <li>
                  Also completed many assignments related to React.js -{" "}
                  <a className="text-blue-600" href="https://github.com/adiri77/react-internship-works">
                    [SourceCode]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-4 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold">PROJECTS</h2>
          <hr className="my-2 border-t-2 border-blue-600" />
          <h6>
            <b>SALON WEBSITE</b> -{" "}
            <a className="text-blue-600" href="https://github.com/adiri77/Salon-website/blob/main/Salon%20website.zip">
              [SourceCode]
            </a>
          </h6>
          {/* Add more projects here */}
        </section>
      </div>
    </div>
  );
};

export default Resume;
