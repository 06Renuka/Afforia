//import React, { useState } from 'react';

import Footer from './Components/Footer/Footer.jsx'
//import LandingPage from './Pages/LandingPage.jsx';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LoginSignUp from './Pages/LoginSignUp';

import './App.css';
import Pricing from './Pages/Pricing.jsx';

import Singnuponly from './Pages/Singnuponly';

import SignupPage from './Pages/SingupPage.jsx';
//import Hero from './Components/Hero/Hero.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import Testonominals from './Components/Testonominals/Testonominals.jsx';


function App() {


  return (

    <div>
      <Router>
        <Navbar />

        <Routes>

          <Route exact path='/' element={<LandingPage />} />
          <Route path='/Login' element={<LoginSignUp />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/Testimonials' element={<Testonominals />} />
          

          <Route path='/Signup' element={<Singnuponly />} />
          <Route path='/Tryfree' element={<SignupPage />} />

        </Routes>
        <Footer/>





      </Router>


    </div>

  );
}

export default App;
