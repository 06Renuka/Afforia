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
import Hero from './Components/Hero/Hero.jsx';
import Usage from './Components/Usage/Usage.jsx';
import Productivity from './Components/Productivity/Productivity.jsx';
import ChooseUs from './Components/ChooseUs/ChooseUs.jsx';
import Versetile from './Components/Versetile/Versetile.jsx';
import Modes from './Components/Modes/Modes.jsx';
import Landing13 from './Components/Landing13/Landing13.jsx';
import Landing14 from './Components/Landling14/Landing14.jsx';
import Landing15 from './Components/Landing15/Landing15.jsx';
import Landing17 from './Components/Landing17/Landing17.jsx';
import Testonominals from './Components/Testonominals/Testonominals.jsx';
import CEO from './Components/CEO/CEO.jsx';
import Savingtime from './Components/Savingtime/Savingtime.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';

function App() {
  

  return (
    <div>
      <Router>
        <Navbar />
        <Hero/>
        <Usage/>
        <Productivity/>
        <ChooseUs/>
        <Versetile/>
        <Modes/>
        <Landing13/>
        <Landing14/>
        <Landing15/>
        <Landing17/>
        <Testonominals/>
        <CEO/>
        <Savingtime/>
        <FAQ/>


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
