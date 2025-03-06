import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reservation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: new Date().toISOString().split('T')[0],
    time: "",
    guest: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); 

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guest || isNaN(formData.guest) || formData.guest <= 0) newErrors.guest = "Valid guest number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Reservation successful!");
      setTimeout(() => {
        navigate("/home");
      }, 2000); 
    }
  };

  return (
    <div className='bg'>
      <div className='register-container'>
        <div className='register-form'>
          <h1>Reserve</h1>
          {successMessage && (
            <div className="success-box">
              <p>{successMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder='Name'
              className='form-control'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className='error'>{errors.name}</p>}
            
            <input
              type='date'
              name='date'
              placeholder='Date'
              className='form-control'
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className='error'>{errors.date}</p>}
            
            <input
              type='time'
              name='time'
              placeholder='Time'
              className='form-control'
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <p className='error'>{errors.time}</p>}
            
            <input
              type='number'
              name='guest'
              placeholder='Number of guests'
              className='form-control'
              value={formData.guest}
              onChange={handleChange}
            />
            {errors.guest && <p className='error'>{errors.guest}</p>}
            
            <button type='submit'>Reserve</button>
          </form>

        
        </div>
      </div>
    </div>
  );
}

export default Reservation;
