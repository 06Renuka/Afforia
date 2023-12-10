//import React, { useState } from 'react';
import './Pages/CSS/style.css';
import LandingPage from './Pages/LandingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import './App.css';
import Pricing from './Pages/Pricing.jsx';

import Singnuponly from './Pages/Singnuponly';
import Navbar from './Components/Navbar/Navbar.jsx';
import SignupPage from './Pages/SingupPage.jsx';

function App() {
  

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/Login' element={<LoginSignUp />} />
          <Route path='/pricing' element={<Pricing />} />
          
          <Route path='/Signup' element={<Singnuponly />} />
          <Route path='/Tryfree' element={<SignupPage />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
