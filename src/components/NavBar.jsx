import logo from '../assets/logo.svg';

import '../scss/scssComponents/navbar.scss';

const NavBar = () => {
  return (
    <div className='bg-black'>
      <h1 className='clr-very-gray'>Hola</h1>
      <div className='logo'>

       <img src={logo} alt="" />

      </div>
    </div>
  )
}

export default NavBar;