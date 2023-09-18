import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Test from '../Components/test';
import Test2 from '../Components/test2';
import CardBenefits from '../Components/Cardbenefit';
import { Link } from 'react-router-dom'; 
import './css/Carddisplay.css';

const CardDisplay = (props) => {
    const [cardData, setCardData] = useState(null);
    const [visibleCards, setVisibleCards] = useState(3);  // 초기에 표시할 카드 수

    useEffect(() => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('cardData'));
        setCardData(dataFromLocalStorage);
    }, []);

    const handleButtonClick = () => {
        if (visibleCards === 3) {
            setVisibleCards(6);
        } else {
            setVisibleCards(3);
        }
    };

    return (
        <div>
           <h2 className='recommended-title'>WONU 회원 {localStorage.getItem('login-id')}님을 위한 추천 신용카드</h2>
            <div className='card-container'>
            {cardData ? (
                Object.entries(cardData)
                .map(([cardName, cardDetails]) => {
                    const 총사용금액 = cardDetails["총사용금액"];
                    const 할인합계 = cardDetails["할인합계"];
                    const 할인율 = 할인합계 === 0 ? 0 : ((할인합계 / 총사용금액)*100).toFixed(2);

                    return {
                        cardName,
                        할인율,
                        cardDetails
                    };
                })
                .sort((a, b) => b.할인율 - a.할인율) 
                .slice(0, visibleCards)
                .map(({ cardName, 할인율, cardDetails }) => (
                    <div key={cardName} className='card-item'>
                        <div className="container text-center" >
                            <MDBCardTitle className='modal-title'>{cardName}</MDBCardTitle>
                            <MDBCard style={{ maxWidth: '1240px', marginBottom: '20px', minHeight: "420px" }}>
                                {/* <MDBRow className='g-0'> */}
                                    {/* <MDBCol md='3'> */}
                                        {/* <Test card={{ cardName: cardName }} className='carddisplay3'/> */}
                                    {/* </MDBCol> */}
                                    {/* <MDBCol md='8'> */}
                                    <div className='carddisplay4'>
                                    <Test card={{ cardName: cardName }} className='carddisplay3'/>
                                    </div>
                                    <div classname="cardbodydisplay">
                                        <MDBCardBody classname="cardbodydisplay">
                                            <MDBCardText className='carddisplay1'>
                                                <small className='carddisplay1'>
                                                    <div className='carddisplay8'>
                                                    <CardBenefits cardName={cardName} />
                                                    </div>
                                                    {/* <br/> */}
                                                    <li className='carddisplay9'>WONU만의 피킹률: {isNaN(할인율) ? "N/A" : `${할인율}%`}</li>
                                                    <li className='carddisplay7'>총사용금액: {cardDetails["총사용금액"]}</li>
                                                    <li className='carddisplay7'>할인합계: {cardDetails["할인합계"]}</li>
                                                    {Object.entries(cardDetails)
                                                        .filter(([detailName, detailValue]) => detailValue !== 0 && detailName !== "할인합계" && detailName !== "총사용금액")
                                                        .map(([detailName, detailValue]) => (
                                                            <li className='carddisplay7' key={detailName}>
                                                                {detailName}: {detailValue}
                                                            </li>
                                                        ))}
                                                    <Test2 className='carddisplay7' card={{ cardName: cardName }} />
                                                </small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    {/* </MDBCol> */}
                                {/* </MDBRow> */}
                                </div>
                            </MDBCard>
                            </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
             </div>
    <div className='carddisplay2'>
      {cardData && (
        <Link
          to="#"
          className="recommend1"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior of the link
            handleButtonClick(); // handleButtonClick 함수 호출
          }}
        >
          {visibleCards === 3 ? '카드 더 보기↓' : '간략히 보기↑'}
        </Link>
      )}
    </div>
    <br /><br />
  </div>
);
}
export default CardDisplay;