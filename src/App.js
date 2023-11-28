import React from 'react';
import {Router, Route, Link, Navigate ,Routes, BrowserRouter } from 'react-router-dom';
import LoginAdmin from './LoginAdmin';
import RegisterAdmin from './RegisterAdmin';
import Apps from './Apps';
import AddNewApp from './AddNewApp';
import AddNewReview from './AddNewReview';
import EmailForm from './EmailForm';
import AppReviews from './AppReviews';
import AdminLogout from './AdminLogout';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import UserLogout from './UserLogout';
import Navbar from './Navbar';
import Home from './Home';
import NavbarA from './NavbarA';
import EmailForm1 from './EmailForm1';
import AddNewReview1 from './AddNewReview1';
import Register from './Register';
import GetAppImages from './GetAppImages';
import Review from './Review';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';
import ApplicationReview from './ApplicationReview';
import AppSlider from './AppSlider';
import UserProfile from './UserProfile';
import AdminProfile from './AdminProfile';
import { AuthProvider } from './AuthContext';
import AuthWrapper from './AuthWrapper';
import Error from './Error';
// import UpdateReview from './UpdateReview';
// import DeleteReview from './DeleteReview';



const App = () => {
  return(
    
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<AuthWrapper><Review /></AuthWrapper>}></Route>
    <Route path="/Home" element={<AuthWrapper><Home /></AuthWrapper>}></Route>
    <Route path="/Navbar" element={<AuthWrapper><Navbar /></AuthWrapper>}></Route>
    <Route path="/NavbarA" element={<AuthWrapper><NavbarA /></AuthWrapper>}></Route>
    <Route path="/Register" element={<AuthWrapper><Register /></AuthWrapper>}></Route>
    <Route path="/GetAppImages" element={<AuthWrapper><GetAppImages /></AuthWrapper>}></Route>    
    <Route path="/Home" element={<AuthWrapper><Home /></AuthWrapper>}></Route>  
    <Route path="/Apps" element={<AuthWrapper><Apps /></AuthWrapper>}></Route>
    <Route path="/AddNewApp" element={<AuthWrapper><AddNewApp /></AuthWrapper>}></Route>
    <Route path="/LoginAdmin" element={<AuthWrapper><LoginAdmin /></AuthWrapper>}></Route>
    <Route path="/LoginUser" element={<LoginUser />}></Route>
    <Route path="/UserLogout" element={<AuthWrapper><UserLogout /></AuthWrapper>}></Route>
    <Route path="/AdminLogout" element={<AuthWrapper><AdminLogout /></AuthWrapper>}></Route>
    <Route path="/RegisterAdmin" element={<AuthWrapper><RegisterAdmin /></AuthWrapper>}></Route>
    <Route path="/RegisterUser" element={<AuthWrapper><RegisterUser /></AuthWrapper>}></Route>
    <Route path="/AddNewReview" element={<AuthWrapper><AddNewReview /></AuthWrapper>}></Route>
    <Route path="/EmailForm" element={<AuthWrapper><EmailForm/></AuthWrapper>}></Route>
    <Route path="/AppReviews" element={<AuthWrapper><AppReviews /></AuthWrapper>}></Route>
    <Route path="/EmailForm1" element={<AuthWrapper><EmailForm1 /></AuthWrapper>}></Route>
    <Route path="/AddNewReview1" element={<AuthWrapper><AddNewReview1 /></AuthWrapper>}></Route>
    <Route path="/HomeUser" element={<AuthWrapper><HomeUser /></AuthWrapper>}></Route>
    <Route path="/HomeAdmin" element={<AuthWrapper><HomeAdmin /></AuthWrapper>}></Route>
    <Route path="/ApplicationReview" element={<AuthWrapper><ApplicationReview /></AuthWrapper>}></Route>
    <Route path="/AppSlider" element={<AuthWrapper><AppSlider /></AuthWrapper>}></Route>
    <Route path="/UserProfile" element={<AuthWrapper><UserProfile /></AuthWrapper>}></Route>
    <Route path="/AdminProfile" element={<AuthWrapper><AdminProfile /></AuthWrapper>}></Route>
    <Route path="/AuthProvider" element={<AuthWrapper><AuthProvider /></AuthWrapper>}></Route>
    <Route path='*' element={<Error/>}></Route>
    {/* <Route path="/UpdateReview" element={<AuthWrapper><UpdateReview /></AuthWrapper>}></Route>
    <Route path="/DeleteReview" element={<AuthWrapper><DeleteReview /></AuthWrapper>}></Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;