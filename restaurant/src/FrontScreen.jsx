import React from 'react';
import { useNavigate } from 'react-router-dom';

function FrontScreen() {
  const navigate = useNavigate();

  return (
    <div className="front-screen-container">
      <div className="content-container">
        <h1 className="front-screen-heading">Restaurant Reservation</h1>
        <p className="front-screen-paragraph">
          Welcome to our restaurant reservation system. Book a table easily and enjoy a seamless dining experience.
        </p>
        <button 
          onClick={() => navigate('/home')} 
          className="front-screen-button"
        >
          Let's Get Started
        </button>
      </div>

 
    </div>
  );
}

export default FrontScreen;
