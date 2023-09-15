import React, { useState } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import './css/Star.css';

const Star = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const handleStarClick = (i) => {
    setRating(i);
    onRatingChange(i)
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <i key={i} onClick={() => handleStarClick(i)} className="fa fa-star star-icon star-filled"></i>
        );
      } else {
        stars.push(
          <i key={i} onClick={() => handleStarClick(i)} className="fa fa-star-o star-icon star-empty"></i>
        );
      }
    }
    return stars;
};

return (
  <div className="custom-font" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <label htmlFor="rating" className="modal-header">서비스 평점을 입력해주세요 </label>
    <div id="rating" name="rating">
      <br/>
      {renderStars()}
    </div>
    </div>
  );  
};

export default Star;
