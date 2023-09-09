import React, { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} onClick={() => handleStarClick(i)} style={{cursor: 'pointer'}}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} onClick={() => handleStarClick(i)} style={{cursor: 'pointer'}}>
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div>
      <label htmlFor="rating">Enter your rating: </label>
      <div id="rating" name="rating">
        {renderStars()}
      </div>
    </div>
  );
};

export default Star;
