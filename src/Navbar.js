//user navbar

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link, Outlet } from "react-router-dom";
//import './Navbar.css'; // You might want to create a single CSS file for styling

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', color: 'rgb(205, 125, 50)' }}>App Survey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to="/HomeUser" className="nav-link" style={{ fontWeight: 'bold' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/GetAppImages" className="nav-link" style={{ fontWeight: 'bold' }}>Review</Link>
              </li>
              <li className="nav-item">
                <Link to="/EmailForm1" className="nav-link" style={{ fontWeight: 'bold' }}>Email</Link>
              </li>
              <li className="nav-item">
                <Link to="/UserLogout" className="nav-link" style={{ fontWeight: 'bold' }}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  



      <Outlet />
    </div>
  );
}

export default Navbar;
