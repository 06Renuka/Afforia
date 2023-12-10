import React from 'react'
import './Footer.css';
import logo from '../../Assets/logo-new-violet.webp'
import third from '../../Assets/sputnikatx.png';
import badage from '../../Assets/top-post-badge.svg'





function Footer() {
  return (
    <footer className="bg-gray-500" style={{overflow:'hidden'}}>
      <div className="container mb-md-5">
        <div className="row flex flex-column justify-between">
          <div className='justify-Content-center pt-5 col d-flex'>
            <div className='d-flex flex-wrap flex-grow-1 justify-content-between rounded-4' style={{maxWidth:'1240px',padding:'25px',border:'1px solid rgb(230, 230, 230)'}}>
              {/* Logo and Company Info */}
              <div className="Logo flex flex-column justify-between w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8" >
                <h4><img src={logo} alt="Afforai Logo" className="mb-4" /> Afforai</h4>


                <p>Afforai is your research tool in to damn near anything. Helping<br/> you summarize, translate, and withdraw data from documents.</p>
                <p className="mt-4">Copyright © 2023 Afforai Inc. All rights reserved.</p>
                <img src={third} alt="Afforai Logo" className="mb-4" />
                <img src={badage} alt="Afforai Logo" className="mb-4" />
              </div>

              {/* Company Links */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul>
                  <li>Our Story</li>
                  <li>Affiliate</li>
                  <li>Security</li>
                  <li>Roadmap</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul>
                  <li>Help Center</li>
                  <li>API Docs</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              {/* Follow Us Links */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <ul>
                  <li>Facebook Group</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                  <li>Medium Blog</li>
                </ul>
              </div>


              {/* Language Selector */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mt-8">
                <h3 className="text-lg font-semibold mb-4">Language</h3>
                <ul>
                  <li>English</li>
                  <li>Vietnamese</li>

                </ul>

              </div>


            </div>


          </div>

        </div>
      </div>
    </footer>
  );
};



export default Footer