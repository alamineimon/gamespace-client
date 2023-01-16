import React from 'react';
import NavbarBottom from './NavbarBottom/NavbarBottom';
import NavbarTop from './NavbarTop/NavbarTop';
import './Nav.css'

const Navbar = () => {
    return (
        <div className='navv'>
            <NavbarTop/>
            <NavbarBottom/>
        </div>
    );
};

export default Navbar;