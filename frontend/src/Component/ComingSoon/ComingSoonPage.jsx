// Navbar.js

import React, { useEffect, useState} from 'react';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../../img/Logo.png';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import Logo1 from '../../img/Frame 1000009016.png';
import './ComingSoonPage.css';
import moment from 'moment';
import emailjs from 'emailjs-com';

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
              href="https://www.facebook.com/profile.php?id=61557168084936&mibextid=ZbWKwL" style={{color: 'blue', fontSize: '1.2rem'}}
              className="text-blue hover:text-blue-300 transition duration-300"
            >
              <CiFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zibahlly" style={{color: 'blue', fontSize: '1.2rem'}}
              className="text-blue hover:text-blue-300 transition duration-300"
            >
              <CiTwitter />
            </a>
          </li>
          <li>


            <a
              href="https://www.instagram.com/zibahlly?igsh=MThqenoyOXhkdXU4Ng==" style={{color: 'blue', fontSize: '1.2rem'}}
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
  const targetDate = moment().add(31, 'days').format();

  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Change these values to your EmailJS service details
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const userId = 'YOUR_USER_ID';

    const userEmail = e.target.email.value;

    // Simple email validation
    if (!validateEmail(userEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setEmailSent(true);
      }, (error) => {
        console.error('Email sending failed:', error.text);
      });

    e.target.email.value = '';
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

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
          <div>
      {emailSent ? (
        <p>Email sent successfully!</p>
      ) : (
        <form onSubmit={sendEmail} className="flex">
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500 flex-grow"
          />
          <button type="submit" className="px-4 py-2 bg-blue-700 w-435 text-white rounded-r">
            Notify me
          </button>
        </form>
      )}
    </div>
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
     
      <div className='timer'><CountdownTimer targetDate={targetDate} /></div>
    </header>
     
  )
}


const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = moment(targetDate).diff(moment());
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const duration = moment.duration(difference);
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex  ">
     <div className='text-center'>
     <div className="text-center_2">
        <div className="text-3xl font-bold">{timeLeft.days}</div>
      </div>
      <div className="text-sm">Days</div>
     </div>
     <div className='text-center'>
      <div className="text-center_2">
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
      </div>
      <div className="text-sm">Hours</div>
      </div>
      <div className='text-center'>
      <div className="text-center_2">
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
      </div>
      <div className="text-sm">Minutes</div>
      </div>
      <div className='text-center'>
      <div className="text-center_2">
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
      </div>
      <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};


