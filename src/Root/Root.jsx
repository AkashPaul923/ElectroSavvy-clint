import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-[68px]'></div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;