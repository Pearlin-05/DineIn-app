import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TableManagement({ restaurant }) {
    const totalTables = 10;
    const [availableTables] = useState(totalTables); 
    const navigate = useNavigate();

    const handleClick = () => {
        if (availableTables > 0) {
            navigate('/reserve', { state: { restaurant } }); 
        }
    };

    return (
        <div className='bg'>
            <div className='register-container'>
                <div className='register-form'>
                    <h2>Table Availability at {restaurant.name}</h2>
                    <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
                    <p>Total Tables: {totalTables}</p>
                    <p>Available Tables: {availableTables}</p>
                    <p>Cost: 1000</p>

                    <button 
                        className="reserve-btn" 
                        onClick={handleClick} 
                        disabled={availableTables === 0}
                    >
                        {availableTables > 0 ? 'Reserve a Table' : 'No Tables Available'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TableManagement;
