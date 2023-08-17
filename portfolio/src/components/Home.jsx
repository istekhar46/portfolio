import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Istekhar khan
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl ">
                Full Stack Web Developer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Full stack web developer with a passion for creating seamless
                user experiences. Proficient in both front-end and back-end
                technologies, adept at crafting robust and dynamic web
                applications. Dedicated to continuous learning and staying at
                the forefront of industry trends.
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a target="_blanck" href="https://twitter.com/istekharkhan46">
                  <AiFillTwitterCircle />
                </a>
                <a target="_blanck" href="https://github.com/istekhar46">
                  <AiFillGithub />
                </a>
                <a
                  target="_blanck"
                  href="https://www.linkedin.com/in/istekhar46/"
                >
                  <AiFillLinkedin />
                </a>
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
               <img src={deved} alt="" layout="fill" objectFit="cover" className="m-auto"/>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">open to work</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Crafting digital experiences through full-stack mastery. Open
                for opportunities.
                {/* <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span> */}
                Innovative web solutions curated with code and design. Ready for
                new ventures.Explore my work.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I possess comprehensive proficiency in various cutting-edge
                technologies, including the MERN stack, bolstered by additional
                expertise in TypeScript, PostgreSQL, Tailwind CSS, MaterialUI,
                Redux Toolkit, and more. My skill set encompasses a wide
                spectrum of modern tools, allowing me to craft sophisticated and
                efficient solutions.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <img src={design} width={100} height={100} alt="image" className="m-auto" />
                <h3 className="text-2xl font-medium pt-8 pb-2 text-black">Frontend</h3>
                <p className="py-2 text-black">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Techonologies I Use</h4>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Meterial UI</p>
                <p className="text-gray-800 py-1">Tailwind CSS</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <img src={code} width={100} height={100} alt="image" className="m-auto" />
                <h3 className="text-2xl font-medium pt-8 pb-2 text-black">Backend</h3>
                <p className="py-2 text-black">
                  Do you have an idea for your next great website? Let&apos;s
                  make it a reality.
                </p>
                <h4 className="py-4 text-teal-600">Techonologies I Use</h4>
                <p className="text-gray-800 py-1">Node.js</p>
                <p className="text-gray-800 py-1">Express.js</p>
                <p className="text-gray-800 py-1">PostgreSQL</p>
                <p className="text-gray-800 py-1">MongoDB</p>
              </div>
            </div>
          </section>
        </main>
      </div>
  
  );
};

export default Home;
