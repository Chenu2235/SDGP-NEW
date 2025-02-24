import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ServicePage.css'; // Ensure you have your CSS file for styles

const ServicePage = () => {
    const handleLoginClick = () => {
        alert('Login button clicked!');
    };

    return (
        <div>
            <section className="section">
                <nav className="nav-container">
                    <h1 className="logo">intX</h1>
                    <ul className="menu">
                        <li className="menu-item">
                            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/service" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</Link>
                        </li>
                    </ul>
                    <button className="login-button" onClick={handleLoginClick}>Log In</button>
                </nav>
            </section>
            <p id="line1">Hi There,</p>
            <p id="line2">What Service Would <br /> You Like To Have?</p>
            <div className="button-container">
                <Link to="/trainer-selection" style={{ textDecoration: 'none' }}>
                    <button className="service-button">
                        <img src="./Images/avatar1.png" alt="Personal Trainer" id='img1' />
                        <div className="button-text">
                            <span>Hire,</span>
                            A Personal Trainer
                        </div>
                    </button>
                </Link>
                <Link to="/upload-cv" style={{ textDecoration: 'none' }}>
                    <button className="service-button">
                        <img src="./Images/avatar2.png" alt=" Virtual Interview" id='img1' />
                        <div className="button-text">
                            <span>Continue With,</span>
                            A Virtual Interview
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServicePage;