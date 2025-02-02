import React from 'react';
import Home from './home';
import './home.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import h1 from './../src/images/h1.jpg';
import h2 from './../src/images/h2.jpg';
import h3 from './../src/images/h3.jpg';
import h4 from './../src/images/h4.jpg';
import h5 from './../src/images/h5.jpg';
import h6 from './../src/images/h6.jpg';
import r1 from './../src/images/room1.jpg';
import r2 from './../src/images/room2.jpg';
import r3 from './../src/images/room3.jpg';
import Navbar from './Navbar';
function Hotel_rooms() {
  return (
    <>
      <Navbar />
      <div id="hotel_rooms_carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style={{ marginTop: '75px' }}>
          <div class="carousel-item active">
            <img src={h3} class="d-block w-100" alt="..." height="800px" width="700px" />
          </div>
          <div class="carousel-item">
            <img src={h4} class="d-block w-100" alt="..." height="800px" width="700px" />
          </div>
          <div class="carousel-item">
            <img src={h1} class="d-block w-100" alt="..." height="800px" width="700px" />
          </div>
        </div>
      </div>
      <div class="container-fluid" style={{ backgroundColor: 'white' }}>
        <div class="row">
          <div class="col">
            <h1 style={{ textAlign: 'center' }}>Our Interiors</h1><br />
            <p style={{ paddingLeft: '50px', paddingRight: '50px', textAlign: 'center' }}>
              Indulge in the epitome of luxury at our hotel, where every corner exudes elegance and sophistication. Our well-appointed interiors boast a harmonious blend of contemporary design and timeless charm, ensuring a truly unforgettable stay. Sink into the comfort of our meticulously maintained bedrooms, where plush beds promise a restful night's sleep.
            </p>
          </div>
          <div class="w-100"></div>
          <div class="col-md-6">
            <img src={r1} height="500px" width="700px" id="hotel_rooms_img" />
          </div>
          <div class="col-md-6" style={{ marginBottom: '10px' }}>
            <img src={r2} height="500px" width="700px" id="hotel_rooms_img" />
          </div>
          <div class="col">
            <p style={{ paddingLeft: '50px', paddingRight: '50px', textAlign: 'center'}}>
              As our esteemed guest, you'll be treated to a plethora of services designed to exceed your every expectation. Delight your palate with delectable culinary creations crafted by our talented chefs, offering a tantalizing array of flavors to satisfy every palate. Take a refreshing dip in our pristine swimming pools, where azure waters beckon you to unwind and relax amidst serene surroundings.
            </p>
          </div>
          <div class="w-100"></div>
          <div class="col-md-6">
            <img src={r3} height="500px" width="700px" id="hotel_rooms_img" />
          </div>
          <div class="col-md-6" style={{ marginBottom: '10px' }}>
            <img src={h2} height="500px" width="700px" id="hotel_rooms_img" />
          </div>
          <div class="col">
            <p style={{ paddingLeft: '50px', paddingRight: '50px', textAlign: 'center' }}>
              Whether you're here for business or leisure, our hotel is dedicated to providing you with unparalleled comfort and convenience. Experience the pinnacle of hospitality as we cater to your every need with warmth and efficiency, ensuring that your stay with us is nothing short of exceptional.
            </p>
          </div>
          <div class="w-100"></div>
          <div class="col-md-6">
            <img src={h5} height="500px" width="700px" id="hotel_rooms_img" />
          </div>
          <div class="col-md-6">
            <img src={h6} height="500px" width="700px" id="hotel_rooms_img" />
          </div>
        </div>
      </div>
      <footer class="footer mt-auto py-3" style={{ backgroundColor: 'black', borderRadius: '10px' }}>
        <div class="container text-center">
          <span style={{ color: 'white' }}>&copy; 2024 VJ Hotel. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default Hotel_rooms;
