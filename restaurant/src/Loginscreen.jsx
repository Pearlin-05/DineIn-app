import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { FaLock } from 'react-icons/fa';

function Loginscreen({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validationForm = () => {
    let newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()) {
      const userData = {
        email: formData.email,
        username: formData.email.split('@')[0], 
      };

      setUser(userData); 
      setSuccessMessage('Logged in Successfully!');

     
      setTimeout(() => navigate('/profile'), 2000);
    } else {
      setSuccessMessage(''); 
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <div className="bg">
        <div className="register-container">
          <div className="register-form">
            <h1>Login</h1>

          
            {successMessage && (
              <div className="success-box">{successMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <div className="password-container">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <FaLock className="lock-icon" />
              </div>

              {errors.password && <p className="error">{errors.password}</p>}

              <div className="button-container">
                <button type="submit">Login</button>
                <button type="button" onClick={handleRegister}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
