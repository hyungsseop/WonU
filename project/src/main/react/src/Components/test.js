import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Test.js
function Test({ card }) {
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8080/cardInfo')
        .then(response => {
          setCards(response.data);
          localStorage.setItem('cardInfo', JSON.stringify(response.data));
        })
        .catch(error => {
          console.error('API 호출 중 에러 발생: ', error);
        });
    }, []);
  
    return (
      <div>
        {cards.length > 0 ? (
          <div>
            {cards
              .filter(cardInfo => cardInfo.cardName === card.cardName)  // 특정 cardName에 해당하는 카드만 필터링
              .map(cardInfo => (
                <div key={cardInfo.cardNo}>
                  {/* <div className='test2'> */}
                  <img className='test1'
                    src={cardInfo.card_image}
                    alt={cardInfo.cardName}
                  />
                {/* </div> */}
                </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default Test;
  