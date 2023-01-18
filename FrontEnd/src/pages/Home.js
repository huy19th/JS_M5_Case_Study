import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import BottomBar from '../components/BottomBar';
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-container">
        <SideBar />
        <main className='flex-auto overflow-auto'>
          <Navbar />
          <div className='px-8 py-5'>
            <Outlet />
          </div>
        </main>
      </div>
      <BottomBar />
    </>
  )
}

export default Home;