import React, { useEffect, useContext, useState } from 'react';
import h1 from './../src/images/h1.jpg';
import h3 from './../src/images/h3.jpg';
import h4 from './../src/images/h4.jpg';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const { user } = useContext(AuthContext);
  const [roomType,setRoomType]=useState('');
  const [cost,setCost]=useState('');
  // const [bookinginfo, setBookingInfo] = useState({ roomType: '', cost: '' });
  const navigate = useNavigate();

  const handleEvent = (roomType, cost) => (e) => {
    e.preventDefault();
    setCost(cost);
    setRoomType(roomType);
    // setBookingInfo({ roomType, cost });
    if (!user) {
      navigate("/login");
    } else {
      navigate("/form", { state:{room:roomType,costs:cost} });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid" id="booking_container">
        <a onClick={handleEvent('Deluxe Room', 1500)} id="booking_anuchor_tag">
          <div className="row" id="booking_rooms">
            <div className="col-md-6" style={{ padding: '10px' }}>
              <div id="hotel_rooms_carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={h3} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                  <div className="carousel-item">
                    <img src={h4} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                  <div className="carousel-item">
                    <img src={h1} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3 style={{ color: 'orange' }}><b><i>Deluxe Room</i></b></h3>
              <p>Our Standard Room offers a cozy retreat with modern furnishings and essential amenities...</p>
              <p>Our Standard Room offers a cozy retreat with modern furnishings and essential amenities...</p>
              <h5>Cost : 1500 ₹</h5>
            </div>
          </div>
        </a>

        <a onClick={handleEvent('Executive Room', 2500)} id="booking_anuchor_tag">
          <div className="row" id="booking_rooms">
            <div className="col-md-6" style={{ padding: '10px' }}>
              <div id="hotel_rooms_carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={h1} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                  <div className="carousel-item">
                    <img src={h4} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                  <div className="carousel-item">
                    <img src={h3} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3 style={{ color: 'orange' }}><b><i>Executive Room</i></b></h3>
              <p>The Deluxe Room elevates your stay with spacious luxury and added amenities...</p>
              <p>The Deluxe Room elevates your stay with spacious luxury and added amenities...</p>
              <h5>Cost : 2500 ₹</h5>
            </div>
          </div>
        </a>

        <a onClick={handleEvent('Suite', 3500)} id="booking_anuchor_tag">
          <div className="row" id="booking_rooms">
            <div className="col-md-6" style={{ padding: '10px' }}>
              <div id="hotel_rooms_carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={h3} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                  <div className="carousel-item">
                    <img src={h4} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                  <div className="carousel-item">
                    <img src={h1} className="d-block w-100" alt="..." height="350px" width="300px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3 style={{ color: 'orange' }}><b><i>Suite</i></b></h3>
              <p>The Suite epitomizes luxury, boasting separate living and sleeping areas for unparalleled comfort...</p>
              <p>The Suite epitomizes luxury, boasting separate living and sleeping areas for unparalleled comfort...</p>
              <h5>Cost : 3500 ₹</h5>
            </div>
          </div>
        </a>

        <footer className="footer mt-auto py-3" style={{ backgroundColor: 'black', borderRadius: '10px' }}>
          <div className="container text-center">
            <span style={{ color: 'white' }}>&copy; 2024 VJ Hotel. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Booking;
