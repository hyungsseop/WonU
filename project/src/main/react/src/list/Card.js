import React, { useState } from 'react';
import './CardComponent.css';
import CardComponent from './CardComponent';



function Card() {

    const [searchTerm, setSearchTerm] = useState('');

    <input 
        className="search-input"
        type="text" 
        placeholder="검색할 카드명을 입력해주세요." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />



    const cards = [
        {
            card_no: 1,
            card_corp: '삼성',
            card_name: '삼성카드_taptap_O',
            domestic_fee: 10000,
            overseas_yn: 1,
            overseas_fee: 10000,
            min_last_month: 300000,
            min_this_month: 0,
            benefit_main: '할인',
            benefit_cate: '통신,포인트/캐시백,카페/베이커리,쇼핑,대중교통',
            card_url: 'https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1483',
            card_image: 'https://static11.samsungcard.com/wcms/home/scard/image/personal/b_AAP1483.png'
        },
        {
            card_no: 2,
            card_corp: '삼성',
            card_name: '삼성카드_&_MILEAGE_PLATINUM(스카이패스)',
            domestic_fee: 47000,
            overseas_yn: 1,
            overseas_fee: 49000,
            min_last_month: 0,
            min_this_month: 0,
            benefit_main: '적립',
            benefit_cate: '항공마일리지,프리미엄,쇼핑,주유,카페/베이커리',
            card_url: 'https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1452',
            card_image: 'https://static11.samsungcard.com/wcms/home/scard/image/personal/b_AAP1452_03.png'
        },
        {
            card_no: 10,
            card_corp: '삼성',
            card_name: '삼성_iD_PET_카드',
            domestic_fee: 15000,
            overseas_yn: 1,
            overseas_fee: 15000,
            min_last_month: 400000,
            min_this_month: 0,
            benefit_main: '할인',
            benefit_cate: '반려동물,쇼핑,간편결제,금융,문화',
            card_url: 'https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1773',
            card_image: 'https://vertical.pstatic.net/vertical-cardad/creatives/SS/10184/SS_10184_20221004-224031_ver.png'
        }
    ];
    

  return (
    <div className="Card">
    <input 
        type="text" 
        placeholder="검색할 카드명을 입력해주세요." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    /><br></br>

    {cards.filter(card => card.card_name.toLowerCase().includes(searchTerm.toLowerCase())).map(card => (
        <CardComponent key={card.card_name} {...card} />
    ))}
</div>
  );
}

export default Card;
