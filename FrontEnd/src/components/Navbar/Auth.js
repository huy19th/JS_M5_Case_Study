import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from '@headlessui/react';
import { Icon } from '../../icons/Icons';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/user';
import Skeleton from '@mui/material/Skeleton';
import { selectUser, login } from '../../store/User';
import { logout } from '../../store/User';

function Auth() {
  const dispatch = useDispatch();
  let { currentUser, isLoggedIn } = useSelector(selectUser);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
        getUser().then(result => {
          dispatch(login(result))
        }).catch(err => {
        console.log(err.message);
      })
    }
  }, [isLoggedIn])

  if (isLoggedIn) {
    return (
      <Menu as="nav" className={"relative"}>
        {({ open }) => (
          <>
            <Menu.Button className={`flex items-center h-10 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
              {currentUser.image ? <img src={currentUser.image} className={"w-10 h-10 rounded-full p-0.5 mr-2"} alt="" />
                : <Skeleton variant="circular" width={40} height={40} className={"w-10 h-10 rounded-full p-0.5 mr-2"} />}
              <span className="text-lg font-semibold mr-2">{currentUser.name || ''}</span>
              <span className={open ? 'rotate-180' : undefined}>
                <Icon size={16} name="downDir" />
              </span>
            </Menu.Button>
            <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
              <Menu.Item>
                {({ active }) => (
                  <Link className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                    to={"/user/profile"}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                    to={"#"}
                    onClick={handleLogout}
                  >
                    Log out
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    )
  }
  else {
    return (
      <nav>
        <Link to="/register" className="text-lg font-semibold px-5">{"Sign Up"}</Link>
        <Link to="/login" className="text-lg font-semibold text-black px-5 py-1 rounded-full bg-white">{"Sign In"}</Link>
      </nav>
    )
  }

}

export default Auth