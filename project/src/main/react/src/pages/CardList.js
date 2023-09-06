import React from 'react';
import './css/Credit.css';
import Detail from './Detail.js';

function CardList(props) {
  return (
    <div className="col-md-3">
      <div className='card_list'>
        <img src={props.card.card_image} alt={props.card.cardName} height="250px" width="158px" />
        <h4 className="card1">{props.card.cardName}</h4>
        <p>카드사: {props.card.cardCorp}</p>
        {/* <p>국내연회비: {props.card.domesticFee}</p> */}
        {/* <p>해외연회비: {props.card.overseasFee}</p> */}
        {/* <p>해외 사용 가능: {props.card.overseasYn ? "예" : "아니오"}</p> */}
        {/* <p>전월실적: {props.card.minLastMonth}</p> */}
        {/* <p>당월실적: {props.card.minThisMonth}</p> */}
        <p className="card2">혜택: {props.card.benefitMain}</p>
        {/* <p>혜택: {props.card.benefitMate}</p> */}
        {/* <p>카드정보: {props.card.cardUrl}</p> */}
        <Detail card={props.card}></Detail>
      </div>
    </div>
  );
}

export default CardList;
