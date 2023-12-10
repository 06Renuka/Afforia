import React, { useState } from 'react';
import './CSS/signup.css'
import logo from '../Assets/logo-new-violet.webp'
import glogo from '../Assets/gmaillogo.png'
import rightsideimage from '../Assets/laptop-auth.png'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
    // Clear the form or navigate to another page after submission
  };

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'row', marginTop:'150px'}}>
      <div className='col' style={{ float: 'left', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="logo" class="fw-bold">
          <img style={{ width: '50px', height: '50px', }} src={logo} alt='' />Afforai
        </div>
        <p>Welcome! Please create an account to start using Afforai.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder='John'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='example@gmail.com'
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='password'
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div>
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms">
              I agree to the Afforai Terms of Use and Privacy Policy
            </label>
          </div>
          <div style={{ margin: '10px' }}><button style={{ padding: '5px', backgroundColor: 'blue', width: '80%', borderRadius: '10px', color: 'white' }} type="submit">Signup</button></div>

          <div style={{ margin: '10px' }}><button style={{ padding: '5px', backgroundColor: 'white', width: '80%', borderRadius: '10px', border: '1px solid' }} type="submit"><img style={{ width: '20px', height: '20px', }} src={glogo} alt='' />Continue with Google</button></div>

        </form>

        <p>
          Already have an account? <a href="/Login">Log in</a>
        </p>
      </div>
      <div className='col'>
        <img style={{ float: 'right', border: '4px solid', borderColor: 'black',width:'70%', height:'300px' }} src={rightsideimage} alt='' />
      </div>
    </div>
  );
};

export default SignupPage;
