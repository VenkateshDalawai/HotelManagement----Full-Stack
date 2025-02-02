import React, { useEffect, useState, useContext } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';

function Login() {
    const location = useLocation();
    const { sigin, status } = location.state || {};
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser, setEmail , setPassword } = useContext(AuthContext);
    const [login, setLogin] = useState({
        email: sigin?.email || '',
        password: ''
    });

    useEffect(() => {
        if (status === 'Account created') {
            alert("Account Created Successfully");
        } else if (status === 'Email already in use') {
            alert("Email already exists");
        }
    }, [status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch("http://localhost:8080/Hotel_Management/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
            });

            if (response.ok) {
                const result = await response.json();
                setUser(result.name);
                setEmail(result.email);
                setPassword(result.password);
                navigate("/");
            } else {
                const result = await response.text();
                if (result === 'Incorrect Password') {
                    alert("Incorrect password");
                } else if (result === 'Account Does not Exits please create an account') {
                    navigate("/signup", { state: { status: result } });
                }
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
                        <h1>Login</h1>
                    </header>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={login.email} onChange={handleChange} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={login.password} onChange={handleChange} required />

                    <a href="home" style={{ float: 'right', textDecoration: 'none', color: 'red' }}>Forget Password?</a><br />
                    <p style={{ float: 'left' }}>Don't have an account <a onClick={() => navigate("/signup")} style={{ textDecoration: 'none', color: 'red', cursor: 'pointer' }}>Create account</a></p>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    );
}

export default Login;
