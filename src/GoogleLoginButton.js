// GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  // Replace 'YOUR_CLIENT_ID' with your actual Google client ID
  const clientId = '684298910357-2nbje25q3k0pkmmolkqd58lot0bu5ogj.apps.googleusercontent.com';

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;


