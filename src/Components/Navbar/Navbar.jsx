import React from 'react';
import logo from '../../Assets/logo-new-violet.webp';
import './Navbar.css';
import { Link, Link as ScrollLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="containar">

      <div className="navbar fixed-top navbar-light bg-light" style={{ borderRadius: '25px', borderColor: 'black', border: '1px solid', padding: '0px', display: 'flex', flexDirection: 'row', margin: '20px' }}>


        <div className="logo" style={{ display: 'flex', flexDirection: 'row', gap: '5px', margin: '15px' }}>
          <img style={{ width: '30px', height: '30px', justifyContent: 'center' }} src={logo} alt='' />
          <h5 style={{ margin: '0px', textAlign: 'center', paddingTop: '3px' }}>Afforai</h5>
        </div>
        <div>
          <ul className="menu" style={{ display: 'flex', flexDirection: 'row', gap: '40px', fontWeight: '500', margin: '10px' }} >
            <span><ScrollLink
              to="/"
              spy={true}
              smooth={true}
              duration={800}
              style={{ textDecoration: 'none', color:'black'  }}
            >Affilates</ScrollLink></span>
            <span><ScrollLink
              to="pricing"
              spy={true}
              smooth={true}
              duration={800}
              style={{ textDecoration: 'none',color:'black' }}
            >Pricing</ScrollLink></span>
            <span> <ScrollLink
              to="Testimonials"
              spy={true}
              smooth={true}
              duration={800}
              style={{ textDecoration: 'none',color:'black' }}
            > Testimonials</ScrollLink></span>
            <span>Help Center</span>
          </ul>
        </div>
        <div className="buttons" style={{ display: 'flex', flexDirection: 'row', gap: '20px', margin: '10px' }}>
          <Link to="/Signup" type="button" className="new-btn gray px-2 px-md-3 btn">Log in</Link>
          <Link to="/Tryfree" type="button" className=" new-btn violet-fill px-2 px-md-3 btn btn-primary">Try for free</Link>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
