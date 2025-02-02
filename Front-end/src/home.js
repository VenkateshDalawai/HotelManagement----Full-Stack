import React,{useContext} from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Carousel, Container, Row, Col, Button, Card, Navbar } from 'react-bootstrap';
import room1 from './images/room1.jpg';
import room2 from './images/room2.jpg';
import room3 from './images/room3.jpg';
import './home.css';

import Navbarr from './Navbar';
function Home() {

  const footerStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
  };

  const logoStyle = {
    borderRadius: '50%',
  };
  return (
    <>
    <Navbarr />
    <header id="home_Header">
        <div className="container">
          <h1>Welcome to VJ Hotel</h1>
          <p className="lead">Experience luxury and comfort at its best</p>
        </div>
      </header>

      <Container id="home" className="my-5">
        <Row className="mb-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={room1} alt="Room 1" />
                <Carousel.Caption>
                  <h3>Deluxe Room</h3>
                  <p>Experience the luxury and comfort of our Deluxe Rooms.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={room2} alt="Room 2" />
                <Carousel.Caption>
                  <h3>Executive Room</h3>
                  <p>Enjoy the spacious and well-appointed Executive Rooms.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={room3} alt="Room 3" />
                <Carousel.Caption>
                  <h3>Suite</h3>
                  <p>Indulge in the opulence of our luxurious Suites.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row id="rooms">
          <Col md={4}>
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src={room1} />
              <Card.Body>
                <Card.Title style={{color: '#007bff'}}>Deluxe Room</Card.Title>
                <Card.Text>Spacious and elegant rooms with all modern amenities.</Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src={room2} />
              <Card.Body>
                <Card.Title style={{color: '#007bff'}}>Executive Room</Card.Title>
                <Card.Text>Comfort and style for our business travelers.</Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{height: '100%'}}>
              <Card.Img variant="top" src={room3} />
              <Card.Body>
                <Card.Title style={{color: '#007bff'}}>Suite</Card.Title>
                <Card.Text>Luxury and space for a memorable stay.</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section id="contact" className="py-5">
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>For reservations and inquiries, please contact us at:</p>
              <ul>
                <li>Email: info@vjhotel.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Luxury St, City, Country</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <footer style={{backgroundColor: '#343a40',color: '#fff',textAlign: 'center',padding: '20px 0'}}>
        <Container>
          <p>&copy; 2024 VJ Hotel. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
  
}

export default Home;
