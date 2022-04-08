import React from 'react';
import Close from '@icons/icon_close.png';
import '@styles/MobileMenu.module.scss';

const MobileMenu = (props) => {
    return (
        <div className="mobile-menu">
        <img src={Close} alt="Close" className='close' onClick={() => props.closeMobile(false)} />
            <ul>
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/" className="email">andres@email.com</a>
                </li>
                <li>
                    <a href="/" className="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;