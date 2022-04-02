import React from 'react';
import './Header.css'
import '../CustomLink/CustomLink'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <nav>
            <div className='nav-container'>
                <h1>ASTER BANGLA </h1>
                <div>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/Cart'>Cart</CustomLink>
                    <CustomLink to='/Order'>Order</CustomLink>
                    <CustomLink to='/Inventory'>Inventory</CustomLink>

                </div>
            </div>
        </nav>
    );
};

export default Header;