import React from 'react';

const PersonalProjects = () => {
  return (
    <div name='personalProjects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Personal Projects
          </p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Car World
              </span>
              <p className='text-center'>An ASP.NET CORE MVC app about cars. SoftUni graduation project.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/CarWorld.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Health and fitness
              </span>
              <p className='text-center'>Personal health and fitness oriented app. SWU university graduation project.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/HealthAndFitness.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Gaming world X
              </span>
              <p className='text-center'>SPA made using JS React library. SoftUni React course defence project.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/GamingWorldX.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                My Tube
              </span>
              <p className='text-center'>My version of my favourite site - Youtube.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/MyTube.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Movies SPA
              </span>
              <p className='text-center'>An educational SPA written with javascript.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/MoviesSPA.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Music App
              </span>
              <p className='text-center'>A SPA, built using page and lit-html libraries.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/MusicApp.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Portfolio CV
              </span>
              <p className='text-center'>A professional CV and portfolio website. The current web site you are looking at :)</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/PortfolioCV.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Tic-Tac-Toe
              </span>
              <p className='text-center'>About
                A Tic-Tac-Toe game, created with JS and React following Udemy course.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/Tic-Tac-Toe.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:bg-cyan-800 hover:scale-110 duration-500'>
            <div className='opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider mb-4'>
                Chat with me
              </span>
              <p className='text-center'>About
                A social media and chat oriented app.</p>
              <div className='pt-5 text-center'>
                <a href='https://github.com/BozhidarChervenkov/ChatWithMe.git' target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
