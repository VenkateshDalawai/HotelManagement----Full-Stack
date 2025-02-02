import React, { useContext, useState, useEffect } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useLocation, useNavigate } from 'react-router-dom';
import './home.css';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';

function Form() {
  const location = useLocation();
  const { room, costs } = location.state || {};
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { user, email } = useContext(AuthContext);
  const [bookingInfo, setBookingInfo] = useState({
    name: user, 
    email: email,
    roomType: room,
    cost: costs, 
  });
  
  useEffect(() => {
    setBookingInfo(prevState => ({
      ...prevState,
      name: user,
      email: email,
      roomType: room,
    cost: costs,
    }));
  }, [user, email]);

  const handleEvent = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch("http://localhost:8080/Hotel_Management/RoomBookings", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingInfo),
      });
  
      if (!response.ok) {
        alert("Could not book the Room") 
      } else {
        alert("Booked successfully")
        navigate("/")
      }
  
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />
      <div className="form_content">
        <form onSubmit={handleEvent} id="form_form">
          <header id="form_header">
            <h1>Room Booking Form</h1>
          </header>
          <label htmlFor="guest_name">Guest Name:</label>
          <input type="text" id="guest_name" name="guest_name" value={bookingInfo.name} onChange={handleChange} required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={bookingInfo.email} onChange={handleChange} readOnly />
  
          <label htmlFor="check_in">Check-in Date:</label>
          <input type="date" id="check_in" name="checkIn" value={bookingInfo.checkIn}  min={new Date().toISOString().split('T')[0]} onChange={handleChange} required />
  
          <label htmlFor="check_out">Check-out Date:</label>
          <input type="date" id="check_out" name="checkOut" value={bookingInfo.checkOut}  min={new Date().toISOString().split('T')[0]} onChange={handleChange} required />
  
          <label htmlFor="room_type">Room Type:</label>
          <select id="room_type" name="roomType" value={bookingInfo.roomType} onChange={handleChange} required>
            <option value="Standard Room">Standard Room</option>
            <option value="Executive Room">Executive Room</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Suite">Suite</option>
          </select>
          
          <label htmlFor="num_guests">Number of Guests:</label>
          <input type="number" id="num_guests" name="numOfGuests" min="1" max="4" value={bookingInfo.numOfGuests} onChange={handleChange} required />
  
          <label htmlFor="special_requests">Special Requests:</label>
          <textarea id="special_requests" name="splRequest" value={bookingInfo.splRequest} onChange={handleChange}></textarea>
          
          <label htmlFor="cost">Cost Per Night:</label>
          <input type="text" name="cost" value={bookingInfo.cost} readOnly />
          <input type="submit" value="Book Room" />
        </form>
      </div>
      <footer className="footer mt-auto py-3" style={{ backgroundColor: 'black', borderRadius: '10px' }}>
        <div className="container text-center">
          <span style={{ color: 'white' }}>&copy; 2024 VJ Hotel. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default Form;
