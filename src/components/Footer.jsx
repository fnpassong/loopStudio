import '../scss/scssComponents/footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <section className='footer bg-black'>
        <div className="footer__wrapper">
          <img src={logo} alt="" />  

          <ul className='footer__ul'>
              <NavLink className="footer__a">About</NavLink>
              <NavLink className="footer__a">Careers</NavLink>
              <NavLink className="footer__a">Events</NavLink>
              <NavLink className="footer__a">Products</NavLink>
              <NavLink className="footer__a">Support</NavLink>

           </ul>
           <div className="footer__social">
                <div className='icon-fb'></div>
                <div className='icon-twitter'></div>
                <div className='icon-pinterest'></div>
                <div className='icon-instagram'></div>
            </div>
            <p className='clr-white'>prueba de como se haria</p>
        </div>
    </section>
  )
}

export default Footer