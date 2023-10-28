import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet,  } from "react-router-dom";
//import './NavbarA.css';


function Layout() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', color: 'rgb(205, 125, 50)' }}>App Survey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls='navigation'></button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
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

     
      <img
        src="https://i.pinimg.com/originals/8c/fa/a8/8cfaa8b13b853e3f9c941e3da69008c5.png"
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />


      


      <Outlet />
    </div>
  );
}

export default Layout;
