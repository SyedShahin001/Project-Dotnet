import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//import { GoogleLogin } from 'react-google-login';
import './Home.css';
//import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import {GoogleLogin,GoogleOAuthProvider } from 'react-oauth-google'
import { jwtDecode } from 'jwt-decode';

function App() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');


  const responseGoogle = (response) => {
    console.log('Google');
    console.log(response);
    // Handle the Google login response here
    const { googleId, email, name } = response.profileObj;
    // Perform actions like sending data to the server, updating UI, etc.
  };
  

  const onFailure = (error) => {
    console.log("Google fail");
    console.error(error);
  };

  const navigate = useNavigate(); 


  async function  handleLogin(){
    try{
      console.log({emailAddress,password})
      let item={emailAddress,password}
      let res = await fetch('https://localhost:7177/api/Admin/login',{
        method:"Post",
        body: JSON.stringify(item),
        headers:{
          "Content-Type" : "application/json",
          "Accept":"application/json"
        }
      })
      
     // sessionStorage.setItem("token",res)
      res =await res.json()
      console.warn("result",res)
      console.log(res.status);
      localStorage.setItem('token',res);

      localStorage.setItem("IsLoggedIn",res.status)

    }
    catch(error)
    {
      console.log(error);
    }
    try{
      console.log({emailAddress,password})
      let item={emailAddress,password}
      let res1 = await fetch('https://localhost:7177/api/User/login',{
        method:"Post",
        body: JSON.stringify(item),
        headers:{
          "Content-Type" : "application/json",
          "Accept":"application/json"
        }
      })
      

      res1 =await res1.json()
      console.warn("result1",res1)
      console.log(res1.status);

      localStorage.setItem("IsLoggedIn1",res1.status)

    }
    catch(error)
    {
      console.log(error);
    }
    if (!emailAddress || !password) {
      setLoginMessage('Fill in email and password');
      return;
    }
    try {

      const adminResponse = await fetch('https://localhost:7177/api/Admin/GetAllAdmins');
      const userResponse = await fetch('https://localhost:7177/api/User/GetAllUsers');
      console.log(adminResponse.ok);
      console.log(userResponse.ok);
      if (adminResponse.ok && userResponse.ok) {
       
       
        const adminData = await adminResponse.json();
        const userData = await userResponse.json();

        console.log(adminData);

        const isAdmin = adminData.some((admin) => admin.emailAddress === emailAddress && admin.password === password);
        const isUser = userData.some((user) => user.emailAddress === emailAddress && user.password === password);


        if (isAdmin) {
          // Store the email address in localStorage or a state management solution
          
          localStorage.setItem('loggedInEmail', emailAddress);
          console.log(isAdmin);
          localStorage.setItem("IsLoggedIn", true);
        
          window.location.href = '/HomeAdmin'; 
        } else if (isUser) {
          // Store the email address in localStorage or a state management solution
          localStorage.setItem('loggedInEmail', emailAddress);
          window.location.href = '/HomeUser'; 
        } else {
          setLoginMessage('Invalid email or password');
        }
      } else {
        setLoginMessage('Invalid email or password');
      }
    } catch (error) {
      setLoginMessage('An error occurred while logging in');
    }
  };

  const handleRegisterClick = () => {
    navigate('/RegisterUser'); 
  };

  //
  const handleSuccess = async(ResponseCredential)=>{
    const user =jwtDecode(ResponseCredential.credential);
    console.log(user);
    localStorage.setItem('google',true);
 
 
    navigate('/HomeAdmin')
  }
  const handleFailure = (error)=>{
    console.error("Authenticatio failed",error);
  }

  return (
    <div className="login-container">
      <div className="login-column">
        <h2>Login</h2>
        <div>
          <input
            type="email"
            placeholder="EmailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            style={{ width: '150%', height: '6vh' }}
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '150%', height: '6vh' }}
          />
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegisterClick}>Register</button>
        </div>
        <p className="error-message">{loginMessage}</p> {/* Apply error-message class */}
        <p>or</p>
        <div>
        <GoogleOAuthProvider clientId="684298910357-3a9lp80vl59tgq3m4g5s997mbbmdnni3.apps.googleusercontent.com">
            <GoogleLogin
            text="continue with"
              onSuccess={(crendentialResponse) => {
                console.log(crendentialResponse);
                handleSuccess(crendentialResponse);
              }}
              onError={()=>{
                handleFailure();
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default App;


// 684298910357-2nbje25q3k0pkmmolkqd58lot0bu5ogj.apps.googleusercontent.com
// buttonText="Login with Google"
            // onSuccess={r=>responseGoogle(r)}
            // onFailure={onFailure}
            // useOneTap
            // //cookiePolicy={'single_host_origin'}
          // />

          // https://localhost:7177/api/Display/AppNameandItsReviews

      // try {
      //   const adminResponse = await fetch('https://localhost:44382/api/Admin/GetAllAdmins');
      //   const userResponse = await fetch('https://localhost:44382/api/User/GetAllUsers');