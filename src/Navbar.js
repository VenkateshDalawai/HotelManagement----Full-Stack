import React,{useContext} from 'react';
import logo from './../src/images/i1.jpeg';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './home.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Navbar() {
    const navigate = useNavigate();
  const location=useLocation();
  const { user } = useContext(AuthContext);
  
  return (
    
    <>
    <nav className="navbar navbar-expand-lg fixed-top" id="header">
      <div className="container-fluid" id="navhome">
        <a className="navbar-brand me-auto" href='#navhome'>
          <img src={logo} width="50px" height="50px" id="logo" alt="VJ Hotel Logo" style={{ borderRadius: '50px' }} />
          &nbsp;VJ Hotel
        </a>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={logo} width="50px" height="50px" id="logo" alt="VJ Hotel Logo" style={{ borderRadius: '50px' }} />
              &nbsp;VJ Hotel
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" id="offcanvas">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" onClick={() => navigate("/")}>
                  &nbsp;Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/hotel_rooms' ? 'active' : ''}`} onClick={() => navigate("/hotel_rooms")}>
                  &nbsp;Hotel Rooms
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/bookings' ? 'active' : ''}`} onClick={() => navigate("/bookings")}>
                  &nbsp;Bookings
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => navigate("/about")}>
                  &nbsp;About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {!user ? (
          <button onClick={() => navigate('/login')} id="login">Login</button>
        ) : (
          <div className="navbar-text">
            <button onClick={() => navigate('/dashboard')} id="username">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>  {user}
            </button>
          </div>
        )}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
      </div>
    </nav>
    </>
  )
}

export default Navbar
