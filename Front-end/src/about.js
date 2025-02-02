import React from 'react';
import Home from './home';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useNavigate } from 'react-router-dom';
import './home.css';
import h1 from './../src/images/h1.jpg';
import p1 from './../src/images/SHRAVAN.jpeg';
import p2 from './../src/images/VENKY.jpeg';
import p3 from './../src/images/RAHUL.jpeg';
import Navbar from './Navbar';
function About() {
  return (
    <>
    <Navbar />
    <div className="container-fluid" style={{marginTop:'80px',background:'white'}}>
      <div className="row">
        <div className="col-12 text-center">
          <h1>About VJ Hotel</h1>
          <p className="lead">Welcome to VJ Hotel, where luxury meets comfort.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={h1} className="img-fluid rounded" alt="Hotel" />
        </div>
        <div className="col-md-6">
          <h2>Our Story</h2>
          <p>
            VJ Hotel has been a beacon of luxury and comfort since its establishment in 1990. Located in the heart of the city,
            our hotel offers top-notch services and amenities to ensure a memorable stay for our guests. Whether you are here
            for business or leisure, we provide an unparalleled experience with our elegantly designed rooms, exquisite dining
            options, and exceptional hospitality.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide our guests with an unforgettable experience by offering the highest standards of service
            and comfort. We strive to create a welcoming atmosphere where every guest feels valued and cared for.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2>Meet Our Team</h2>
        </div>
        <div className="col-md-4 text-center">
          <img src={p1} className="img-fluid rounded-circle" alt="Team Member 1" />
          <h3>Shravan</h3>
          <p>General Manager</p>
        </div>
        <div className="col-md-4 text-center">
          <img src={p2} className="img-fluid rounded-circle" alt="Team Member 2" />
          <h3>Venky</h3>
          <p>Head of Hospitality</p>
        </div>
        <div className="col-md-4 text-center">
          <img src={p3} className="img-fluid rounded-circle" alt="Team Member 3" />
          <h3>Rahul</h3>
          <p>Executive Chef</p>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-dark text-white text-center">
        <div className="container">
          <span>&copy; 2024 VJ Hotel. All rights reserved.</span>
        </div>
      </footer>
    </div>
    </>
  );
}

export default About;
