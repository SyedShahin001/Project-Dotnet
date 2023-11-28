import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RegisterUser.css';

function RegisterUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !password) {
      setErrorMessage('Fill in all details');
      return;
    }

    // Check if the email address is provided and ends with '@gmail.com' or '@yahoo.com'
    if (!emailAddress) {
      setErrorMessage('Use Gmail or Yahoo for registration');
      return;
    } else if (!(emailAddress.endsWith('@gmail.com') || emailAddress.endsWith('@yahoo.com'))) {
      setErrorMessage('Use Gmail or Yahoo for registration');
      return;
    }

    // Password validation: at least six characters with a mix of capital letters and digits
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage('Password should be at least six characters with a mix of capital letters and digits');
      return;
    }

    try {
      const response = await axios.post('https://localhost:7177/api/User/api/user/register', {
        firstName,
        lastName,
        emailAddress,
        password,
      });

      if (response.status === 200) {
        setRegistrationStatus('Registration done');

        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmailAddress('');
        setPassword('');
        // Clear error message
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('User is already registered. Please login to give reviews');
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label>First Name:</label>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <br />
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      {registrationStatus && <p style={{ color: 'green' }}>{registrationStatus}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <h4>Heyy...Want to Login....</h4>
      <Link to="/Home" href="RegisterAdmin" style={{ fontSize: '22px', fontWeight: 'bold' }}>
        Click Here
      </Link>
    </div>
  );
}

export default RegisterUser;
