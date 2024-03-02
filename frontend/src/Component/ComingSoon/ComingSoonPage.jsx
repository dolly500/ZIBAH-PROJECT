// Navbar.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../../img/Logo.png'
import Logo1 from '../../img/Frame 1000009016.png'
import './ComingSoonPage.css'

const Navbar = () => {
  return (
    <>
    <nav className="bg-white-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <h1 className="text-2xl font-bold">
            <img src={Logo} alt='' />
          </h1>
        </div>

        {/* Social Media Links */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="#" style={{color: 'blue'}}
              className="text-blue hover:text-blue-300 transition duration-300"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="#" style={{color: 'blue'}}
              className="text-blue hover:text-blue-300 transition duration-300"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="#" style={{color: 'blue'}}
              className="text-blue hover:text-blue-300 transition duration-300"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    

     <div className='header' style={{marginTop: '-120px'}}>
     <Header />
     </div>
    
    </>

    //Header Component
    
    
  );
};

export default Navbar;


const Header = () => {
  return(
    <header className="p-4">
      <div className="container mx-auto flex items-center justify-between h-89 overflow-hidden">
        {/* Left Side */}
        <div className="flex flex-col ">
          
            <h1 style={{fontSize: '50px'}}>WE ARE <br /> COMING SOON.</h1>
          
          <div className='mt-3' style={{color: 'gray'}}>
          Zibah! Your Best-Stop Shop for Event Essentials. Be the first to know when we launch.
          </div>
          <div className="relative mt-2 flex">
  <input
    type="text"
    placeholder="youremail@gmail.com"
    className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500 flex-grow"
  />
  <button className="px-4 py-2 bg-blue-700 w-435 text-white rounded-r">
    Notify me
  </button>
</div>

        </div>

        {/* Right Side */}
        <div className='flex flex-row ml-20 item-center'>
          <img className="h-70 ml-16" style={{width: '70vw'}}
            src={Logo1}
            alt="Logo"
          />
        </div>
      </div>
    </header>
  )
}
