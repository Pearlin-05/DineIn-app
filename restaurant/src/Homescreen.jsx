import React, { useState } from 'react';
import './index.css';
import TableMangement from './TableMangement';
import { FaSearch } from "react-icons/fa";

function Homescreen() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const restaurant = [
    {
      name: 'The Golden Spoon',
      image: 'https://images.pexels.com/photos/1841184/pexels-photo-1841184.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4
    },
    {
      name: 'Flavors & Fire',
      image: 'https://images.pexels.com/photos/2894275/pexels-photo-2894275.jpeg?auto=compress&cs=tinysrgb&w=6000',
      rating: 3
    },
    {
      name: 'Urban Bites',
      image: 'https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4
    },
    {
      name: 'Savory Street',
      image: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'The Rustic Fork',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Midnight Munchies',
      image: 'https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4
    },
    {
      name: 'Harvest Table',
      image: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 3
    },
    {
      name: 'Spice & Sizzle',
      image: 'https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star' : 'star-empty'}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = () => {
    console.log('Search clicked with query:', searchQuery);
  };

  const filteredRestaurants = restaurant.filter((rest) =>
    rest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg'> 
      {!selectedRestaurant && (
        <center>
          <div className="search-box2">
            <input
              className="search-input2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-button2" type="submit" onClick={handleClick}>
              <FaSearch className="search-icon2" />
            </button>
          </div>
        </center>
      )}
  
      {!selectedRestaurant ? (
        <div className="restaurant-container">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className="restaurant-card"
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                <img src={restaurant.image} alt={restaurant.name} />
                <p className="name">{restaurant.name}</p>
                <p className="ratings">{renderStars(restaurant.rating)}</p>
              </div>
            ))
          ) : (
            <p className="not-found">No restaurants found</p>
          )}
        </div>
      ) : (
        <TableMangement restaurant={selectedRestaurant} />
      )}
    </div>
  );
}

export default Homescreen;
