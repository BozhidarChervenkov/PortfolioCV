import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className=' font-thin text-2xl italic font-serif'>Bozhidar's Portfolio</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='achievements' smooth={true} duration={500}>
            Achievements
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='professionalExperience' smooth={true} duration={500}>
            Professional Experience
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='personalProjects' smooth={true} duration={500}>
            Personal Projects
          </Link>
        </li>
        <li>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='achievements' smooth={true} duration={500}>
            Achievements
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='professionalExperience' smooth={true} duration={500}>
            Professional Experience
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='personalProjects' smooth={true} duration={500}>
            Personal Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='p-3 hover:bg-cyan-800 hover:scale-110 duration-500' onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/bozhidar-chervenkov-2b239a225/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/BozhidarChervenkov'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='#contact'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;