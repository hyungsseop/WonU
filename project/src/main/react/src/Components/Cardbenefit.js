import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Cardbenefit.css';

function CardBenefits({ cardName }) { // Receive cardName prop
  const [cardBenefit, setCardBenefit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/cardbenefit')
      .then(response => {
        // Filter the benefits for the specific cardName
        const specificBenefit = response.data.find(benefit => benefit.cardName === cardName);
        setCardBenefit(specificBenefit);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [cardName]);  // cardName is a dependency now, so if it changes, this useEffect will re-run

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {cardBenefit && (
        <>
          {/* <h3>{cardBenefit.cardName}</h3> */}
          {/* <p>{cardBenefit.cardCorp}</p> */}
          <p className='cardbenefit1'>{cardBenefit.cardIntroLine}</p>
          <div className="benefits-container">
            {cardBenefit.cardBenefit1 && cardBenefit.cardBenefit1 !== ' ' && <p className='cardbenefit2'>#{cardBenefit.cardBenefit1}</p>}
            {cardBenefit.cardBenefit2 && cardBenefit.cardBenefit2 !== ' ' && <p className='cardbenefit2'>#{cardBenefit.cardBenefit2}</p>}
        </div>
        </>
      )}
    </div>
  );
}

export default CardBenefits;

