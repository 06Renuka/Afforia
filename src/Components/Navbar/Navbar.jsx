import { useState } from 'react';
import React from 'react';
import logo from '../../Assets/logo-new-violet.webp';
import './Navbar.css'; // Import CSS file for styling
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div>
      <div className="container" style={{ marginTop: '5px', position: 'fixed', width: '100%', backgroundColor: 'white' }}>
        <div className="navbar" style={{ borderRadius: '10px', borderColor: 'blueviolet', border: '1px solid', justifyContent: 'center', gap: '20px' }}>
          <div className="logo" class="fw-bold" style={{ float: 'left' }}>
            <img style={{ width: '40px', height: '40px' }} src={logo} alt='' />Afforai
          </div>
          <ul className="menu">
            <li onClick={() => { setMenu("Testimonials") }}> <ScrollLink
              to="Testimonials"
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none' }}
            >
              Testimonials
            </ScrollLink>{menu === "Testimonials" ? <hr /> : <></>}</li>

            <li onClick={() => { setMenu("Affiliate") }}>
              <a href="#affiliate" style={{ color: 'black' }}>Affiliate</a>
              {menu === "Affiliate" ? <hr /> : <></>}
            </li>

            <li onClick={() => { setMenu("Pricing") }}>
              <a href="#pricing" style={{ textDecoration: 'none' }}>Pricing</a>
              {menu === "Pricing" ? <hr /> : <></>}
            </li>

            

            <li onClick={() => { setMenu("HelpCenter") }}>
              <a href="/Login" style={{ textDecoration: 'none' }}>Help center</a>
              {menu === "HelpCenter" ? <hr /> : <></>}
            </li>
          </ul>
          <div className="buttons" style={{ gap: '10px' }}>
            <button type="button" class="new-btn gray px-2 px-md-3 btn">Log in</button>
            <button type="button" class="try-button new-btn violet-fill px-2 px-md-3 btn">Try for free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
