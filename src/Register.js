import React from 'react';
//import './Home.css';
import RegisterAdmin from './RegisterAdmin';
import RegisterUser from './RegisterUser';


function Register() {
  return (
    <div className="login-container">
      <div className="login-column">
        <RegisterUser />
      </div>
      <div className="login-column">
        <RegisterAdmin />
      </div>
     


    </div>
    
  );
}

export default Register;