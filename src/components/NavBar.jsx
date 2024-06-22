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
    <nav className={open ? 'menu' : 'menu menu__hidden'}>
      <div className="menu__wrapper">
        <nav className="menu__nav">
          <img className='menu__logo' src= { logo } alt="" />
          <div className={open ? 'menu__list menu__notShow' : 'menu__list'}>
              <NavLink className="menu__li">About</NavLink>
              <NavLink className="menu__li">Careers</NavLink>
              <NavLink className="menu__li">Events</NavLink>
              <NavLink className="menu__li">Products</NavLink>
              <NavLink className="menu__li">Support</NavLink>
          </div>

          <div className={open ? 'icon-ham' : 'icon-close'} onClick={changeIcon}></div>
        </nav>
      </div>
    </nav>
      

      
    
  )
}

export default NavBar;