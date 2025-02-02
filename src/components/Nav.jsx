// src/components/Nav.js
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/react.svg';
import btnIcon from '../assets/images/btn-icon.svg';
import btnIconLogin from '../assets/images/btn-login-icon.svg';

import navArrow from '../assets/images/nav-arrow.svg';


import LanguageSwitcher from './LanguageSwitcher';

import { useTranslation } from '../TranslationContext';


function Nav() {
  const { translations } = useTranslation();
  const { navMain, navAbout, navContacts, navLogin, navRegister } = translations || {};

  const navRef = useRef(null);

  const handleStickyNav = () => {
    if (!navRef.current) return;

    const nav = navRef.current;
    const coordinateMenu = nav.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > coordinateMenu) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Удаляем обработчик при размонтировании
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    // Вызываем логику фиксации меню
    const cleanup = handleStickyNav();

    return cleanup; // Возвращаем функцию очистки
  }, []);

  return (
    <nav className='nav' id='mainNav' ref={navRef}>
      <div className="nav-wrapper">

        <div className="nav-wrapper__logo flex">
            <Link className='nav-logo' to="/">
              <img src={logo} alt="logo" />
            </Link>
            <LanguageSwitcher />

        </div>

        <div className="nav-wrapper__info flex">
          <ul className='nav-list flex'>
            <li className='nav-list__item'>
              <Link className='nav-list__link' to="/">{navMain}</Link>
            </li>
            <li className='nav-list__item'>
              <Link className='nav-list__link' to="/about">{navAbout}</Link>
            </li>
            <li className='nav-list__item'>
              <Link className='nav-list__link' to="/contacts">{navContacts}</Link>
            </li>
            <li className='nav-list__item'>
              <Link className='nav-list__link' to="/login">{navLogin}</Link>
            </li>
            <li className='nav-list__item'>
              <Link className='nav-list__link' to="/register">{navRegister}</Link>
            </li>
          </ul>

          <div className="nav-btns">
            <Link className='btn btn-main btn-main-arrow nav-btn' to="/register">
              <img src={btnIcon} className='btn-arrow left' alt="register button" />
              <span>{navRegister}</span>
            </Link>
            <Link className='nav-btn login' to="/login">
              <img src={btnIconLogin} className='btn-icon' alt="login button" />
            </Link>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Nav;
