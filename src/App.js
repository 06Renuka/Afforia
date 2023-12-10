import React from 'react';
import './Pages/CSS/style.css'


//import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Pages/LandingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';

import './App.css';

import Pricing from './Pages/Pricing.jsx';


//import SignupPage from './Pages/SingupPage';
import Singnuponly from './Pages/Singnuponly';


function App() {
  return (
    <div>
      <Router>
       

        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/Login' element={<LoginSignUp />} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/signup' element={<Singnuponly/>} />


        </Routes>
        <Footer />


      </Router>

















    </div>
  );
}

export default App;
