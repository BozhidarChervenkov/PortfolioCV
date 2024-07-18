import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6 hover:bg-cyan-800 hover:scale-110 duration-500">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-left text-3xl font-bold">
              <p>
                Hi, I'm Bozhidar Chervenkov. Nice to meet you! Please feel free to look around.
              </p>
            </div>
            <div className="justify-text text-xl">
              <p>
                {" "}
                I am a software developer with experience in building responsive and scalable web applications.
                I possess strong knowledge in backend development principles and best practices.
                I thrive when working with a team to create the best possible products, and I love creating websites that are both functional and beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;