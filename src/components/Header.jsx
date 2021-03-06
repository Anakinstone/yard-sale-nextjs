import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.navClass}>
      <Image src={menu} alt="menu" className={styles.menu} onClick={() => setToggleMobile(!toggleMobile)} />
      <div className={styles['navbar-left']}>
        <Image src={logo} alt="logo" className={styles['nav-logo']} />
        <ul>
          <li>
            <a to="/">All</a>
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
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            mail@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleMobile && <MobileMenu closeMobile={(toggleMobile) => setToggleMobile(toggleMobile)} />}
      {toggleOrders && <MyOrder closeModal={(toggleOrders) => setToggleOrders(toggleOrders)} />}
    </nav>
  );
};

export default Header;
