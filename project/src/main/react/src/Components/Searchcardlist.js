import React, { useEffect, useState } from 'react';
import axios from "axios";
import './css/Searchlist.css'
import Search from './Search';
import Detail from '../pages/Detail.js';

const Searchcardlist = () => {
    const searchTerm = localStorage.getItem('searchTerm');
    const [searchCardResults, setSearchCardResults] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cardInfo')
            .then(response => {
                if (searchTerm) {
                    const filteredResults = response.data.filter(card => card.cardName.includes(searchTerm));
                    setSearchCardResults(filteredResults);
                } else {
                    setSearchCardResults(response.data);
                }
            })
            .catch(error => {
                console.error('API 호출 중 에러 발생: ', error);
            });
    }, [searchTerm]);

    const searchResultsCount = searchCardResults.length;

    if (searchCardResults.length === 0) return <div>검색된 상품이 없습니다.</div>;

    return (
        <div className="page-container">
            <h2 className='searchlist6'>통합 검색 결과</h2>
            <hr />
            <h5 className='searchlist7'>상품 총 {searchResultsCount}건 </h5>
            <hr />
            <div className="grid-container">
                {searchCardResults.map((card, index) => (
                    <div className="grid-item" key={card.id}>
                        <h4 className="searchlist2">{`${index + 1}. ${card.cardName}`}</h4>
                        <img src={card.card_image} alt={card.cardName} height="250px" width="158px" />
                        <div className='searchlist3'>
                            <p>국내 연회비: {card.domesticFee}</p>
                            <p>해외 연회비: {card.overseasFee}</p>
                            <p>전월 실적: {card.minLastMonth}</p>
                            <p>당월 실적: {card.minThisMonth}</p>
                            <p>혜택: {card.benefitMate}</p>
                            <p>주요 혜택: {card.benefitMain}</p>
                        </div>
                        <div className='searchlist8'><Detail card={card}></Detail></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Searchcardlist;
