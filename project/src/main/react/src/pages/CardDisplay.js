import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Test from '../Components/test';
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
            <h2 className='recommended-title'>WONU {localStorage.getItem('login-id')} 님을 위한 추천 신용카드</h2>
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
                    <div key={cardName}>
                        <ul>
                            <MDBCardTitle className='modal-title'>{cardName}</MDBCardTitle>
                            <MDBCard style={{ maxWidth: '740px', marginBottom: '20px' }}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='3'>
                                        <Test card={{ cardName: cardName }} />
                                    </MDBCol>
                                    <MDBCol md='9'>
                                        <MDBCardBody style={{ padding: '20px' }}>
                                            <MDBCardText>
                                                <small className='text-muted'>
                                                    <CardBenefits cardName={cardName} />
                                                    <li>WONU만의 피킹률: {isNaN(할인율) ? "N/A" : `${할인율}%`}</li>
                                                    <li>총사용금액: {cardDetails["총사용금액"]}</li>
                                                    <li>할인합계: {cardDetails["할인합계"]}</li>
                                                    {Object.entries(cardDetails)
                                                        .filter(([detailName, detailValue]) => detailValue !== 0 && detailName !== "할인합계" && detailName !== "총사용금액")
                                                        .map(([detailName, detailValue]) => (
                                                            <li key={detailName}>
                                                                {detailName}: {detailValue}
                                                            </li>
                                                        ))}
                                                </small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </ul>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}

            {cardData && (
                            <Link 
                                to="#" 
                                className="recommend1" 
                                onClick={(e) => {
                                    e.preventDefault();  // Prevent default behavior of the link
                                    handleButtonClick();  // handleButtonClick 함수 호출
                                }}
                            >
                                {visibleCards === 3 ? '카드 더 보기↓': '간략히 보기↑' }
                            </Link>
                        )}
                        <br />
                    </div>
                );
            };

export default CardDisplay;
