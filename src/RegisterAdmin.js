import React, { useState } from 'react';
import axios from 'axios';
import RegisterUser from './RegisterUser';
import './RegisterAdmin.css';
import { Link, Navigate } from 'react-router-dom';

function RegisterAdmin() {
  const [emailAddress, setEmailAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (!emailAddress || !password) {
      setErrorMessage('Fill in details');
      return;
    }

    try {
      const response = await axios.post('https://localhost:44382/api/Admin/api/admin/register', {
        firstName,
        lastName,
        emailAddress,
        password,
      });

      if (response.status === 200) {
        setRegistrationStatus('Registration done');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Admin Registration</h2>
      <form className="register-form">
        
        <div className="form-group">
          <label>First Name:</label>
          <br></br>
          <input
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <br></br>
          <input
            type="last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <br></br>
          <input
            type="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}></input>
            </div>
        <div className="form-group">
          <label>Password:</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </form>
      {registrationStatus && <p>{registrationStatus}</p>}
      {errorMessage && <p>{errorMessage}</p>}

      <h4>If you want to register as User</h4>
      <Link to="/RegisterUser" href="RegisterUser" style={{ fontSize: '22px', fontWeight: 'bold' }}>Click Here</Link>
    </div>
    
  );
}

export default RegisterAdmin;