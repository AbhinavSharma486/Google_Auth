import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Header = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <Navbar className='border-b-2'>

      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Abhinav's
        </span>
        Blog
      </Link>

      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 sm:inline'
          color='gray'
          pill
        >
          <FaSun />
        </Button>

        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
        </Link>

      </div>


    </Navbar>
  );
};

export default Header;