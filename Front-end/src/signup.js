import React, { useEffect, useState } from 'react';
import './home.css';
import Home from './home'; 
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function Signup() {
    const navigate = useNavigate();
    const [sigin, setSigin] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const location = useLocation();
    const loginresult = location.state || {};

    useEffect(() => {
        if (loginresult && loginresult.status) {
            alert(loginresult.status);
        }
    }, [loginresult]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSigin({
            ...sigin,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
  
        try {
            const response = await fetch("http://localhost:8080/Hotel_Management/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sigin),
            });

            const result = await response.text(); // Assuming the response is a plain text
            if (result) {
                navigate("/login", { state: { sigin, status: result } });
            }
        
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="login_content">
                <form onSubmit={handleSubmit} id="login_form">
                    <header id="login_header">
                        <h1>Signup</h1>
                    </header>
                    <label htmlFor="name">User Name:</label>
                    <input type="text" id="name" name="name" value={sigin.name} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={sigin.email} onChange={handleChange} required />
                
                    <label htmlFor="password">Create Password:</label>
                    <input type="password" id="password" name="password" value={sigin.password} onChange={handleChange} required />

                    <p style={{ float: 'left' }}>Already have an account? <a onClick={() => navigate("/login")} style={{ textDecoration: 'none', color: 'red', cursor: 'pointer' }}>Login</a></p>
                    <input type="submit" value="Register" />
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </>
    );
}

export default Signup;
