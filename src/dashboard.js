import React, { useContext, useState, useEffect } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';

function Dashboard() {
  const { user, email, password, logout } = useContext(AuthContext);
  const { setUser, setEmail, setPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState([]);
  const data = { name: user, email: email, password: password };
  const cancelBooking = { email: email, id: '' };
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchBookingData();
  }, [email]);

  const fetchBookingData = async () => {
    setError('');
    try {
      const response = await fetch(`http://localhost:8080/Hotel_Management/RoomBookingsData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setBookingData(result);
      } else {
        setError('Could not fetch booking data');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };


  const handleLogout = () => {
    setUser('');
    setEmail('');
    setPassword('');
    navigate('/login');
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    const updatedName = e.target.elements.name.value;
    const updatedPassword = e.target.elements.password.value;

    try {
      const response = await fetch(`http://localhost:8080/Hotel_Management/UpdateProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, name: updatedName, password: updatedPassword }),
      });

      if (response.ok) {
        setUser(updatedName);
        setPassword(updatedPassword);
        alert("Profile Updated Successfully");
      } else {
        setError('Could not update your profile');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleCancelBooking = (id) => async (e) => {
    e.preventDefault();
    const ids = id;
    try {
      const response = await fetch(`http://localhost:8080/Hotel_Management/CancelBooking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...cancelBooking, email: email, uid: ids }),
      });

      if (response.ok) {
        fetchBookingData();
        alert("Canceled Booking Successfully");
      } else {
        setError('Could not cancel your booking');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

 
  

  return (
    <>
      <Navbar />
      <div className="dashboard" style={{ marginTop: '100px' }} id="Dashboard">
        <h1>Hotel Management Dashboard</h1>
        <div className="user-info" id="Dashboard_user-info">
          <form onSubmit={handleUpdateProfile}>
            <h2>User Information</h2>
            <div className='row'>
              <div className='col-md-1'>
                <label htmlFor="name">Name:</label>
              </div>
              <div className='col-md-1'>
                <input type="text" name="name" defaultValue={user || ''} required /><br />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1'>
                <label htmlFor="email">Email:</label>
              </div>
              <div className='col-md-1'>
                <input type="email" name="email" value={email} readOnly /><br />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1'>
                <label htmlFor="password">Password:</label>
              </div>
              <div className='col-md-1'>
                <input type="text" name="password" defaultValue={password || ''} required /><br />
              </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Save Profile" />
          </form>
        </div>
        <div className="bookings" id="Dashboard_bookings">
          <h2>Bookings</h2>
          <div className="booking-info" id="Dashboard_booking-info">
            {bookingData.map((booking, index) => (
              <div key={index} className="booking">
                <h3>Booking #{index + 1}</h3>
                <p><strong>Check-in Date:</strong> {booking.checkIn}</p>
                <p><strong>Check-out Date:</strong> {booking.checkOut}</p>
                <p><strong>Room Type:</strong> {booking.roomType}</p>
                <p><strong>Number of Guests:</strong> {booking.numOfGuests}</p>
                <p><strong>Cost:</strong> {booking.cost}</p>
                <button className="btn btn-danger" onClick={handleCancelBooking(booking.id)}>Cancel Booking</button>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
    </>
  );
}

export default Dashboard;
