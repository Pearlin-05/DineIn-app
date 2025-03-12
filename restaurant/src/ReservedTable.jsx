import React, { useEffect, useState } from "react";
import "./index.css";

function ReservedTable() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  const handleCancel = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  return (
    <div>
      <div className="reserved-container">
        <h1>Your Reserved Tables</h1>
        {reservations.length === 0 ? (
          <p>No tables reserved yet.</p>
        ) : (
          reservations.map((res, index) => (
            <div key={index} className="reserved-card">
              <img src={res.restaurantImage} alt={res.restaurantName} className="restaurant-img" />
              <div className="reserved-details">
                <h3>{res.restaurantName}</h3> 
                <p>Name: {res.name}</p> 
                <p>Reservation Time: {res.time}</p>
                <button className="cancel-button" onClick={() => handleCancel(index)}>
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReservedTable;
