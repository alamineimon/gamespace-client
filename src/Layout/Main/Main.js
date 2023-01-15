import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Loader from '../../Pages/Shared/Loader/Loader';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Loader/>
        </div>
    );
};

export default Main;