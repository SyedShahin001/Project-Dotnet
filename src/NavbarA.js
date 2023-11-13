//ADMIN NAVIGATIONBAR

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link, Outlet } from "react-router-dom";
import './NavbarA.css';

const NavbarA = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Add the 'fixed-top' class here */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', color: 'rgb(205, 125, 50)' }}>App Survey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls='navigation'>
          </button>
          <ul className="navbar-nav ms-auto">
            <div className="navbar-nav">
            <Link to="/HomeAdmin" className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>Home</Link>
              <Link to="/Apps" className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>Apps</Link>
              <Link to="/AddNewApp" className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>RegisterApp</Link>
              <Link to="/AddNewReview" className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>Review</Link>
              <Link to="/EmailForm" className="nav-link active" href="#" style={{ fontWeight: 'bold' }}>Email</Link>
              <Link to="/AppReviews" className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>AppReviews</Link>
              <Link to="/Review" className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>Count</Link>
              <Link to="/AdminLogout" className="nav-link active" href="#" style={{ fontWeight: 'bold' }}>Logout</Link>
            </div>
          </ul>
        </div>
      </nav>


      <Outlet />
    </div>
  );
}
 
export default NavbarA;
