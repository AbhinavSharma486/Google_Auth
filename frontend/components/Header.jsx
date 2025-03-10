import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { toggleTheme } from "../redux/theme/themeSlice";

const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignout = () => { };



  return (
    <Navbar className='border-b-2'>

      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-black'>
          Abhinav's
        </span>
        Blog
      </Link>

      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>

        {
          currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt='user' img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>@{currentUser.username}</span>
                <span className='block text-sm font-medium truncate'>{currentUser.email}
                </span>
              </Dropdown.Header>

              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>

              <DropdownDivider />

              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to='/sign-in'>
              <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
              </Button>
            </Link>
          )
        }
      </div>
    </Navbar>
  );
};

export default Header;