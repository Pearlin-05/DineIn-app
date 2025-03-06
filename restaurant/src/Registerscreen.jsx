import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { FaLock } from 'react-icons/fa';

function Registerscreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.phone.length < 10)
      newErrors.phone = "Phone number must be at least 10 digits";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(formData));

      setSuccessMessage("Registered Successfully!");
      
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
  };

  return (
    <div className="bg">
      <div className="register-container">
        <div className="register-form">
          <h1>Register</h1>
          {successMessage && (
            <div className="success-box">
              <p>{successMessage}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

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

            <button type="submit">Register</button>
          </form>

         
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
