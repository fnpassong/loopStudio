import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';

import '../scss/scssComponents/navbar.scss';

const NavBar = () => {

  function changeIcon() {
    setOpen(!open);
  }

  const [open, setOpen] = useState(true);

  return (
    <div className={open ? 'menu' : 'menu menu__hidden'}>
      <div className="menu__wrapper wrapper">
        <nav className="menu__nav">
          <img className='menu__logo' src= { logo } alt="" />
          <div className={open ? 'menu__list menu__notShow' : 'menu__list'}>
            <ul className='menu__ul'>
              <NavLink className="menu__li">About</NavLink>
              <NavLink className="menu__li">Careers</NavLink>
              <NavLink className="menu__li">Events</NavLink>
              <NavLink className="menu__li">Products</NavLink>
              <NavLink className="menu__li">Support</NavLink>

            </ul>
          </div>

          <div className={open ? 'icon-ham' : 'icon-close'} onClick={changeIcon}></div>
        </nav>
        <div className={open ? 'theSign' : 'theSign chau'}>
          <article className="sign clr-white">
            <h1 className='sign__hero'>
              immersive experiences that deliver
            </h1>
          </article>
        </div>
      </div>

    </div>
      

      
    
  )
}

export default NavBar;