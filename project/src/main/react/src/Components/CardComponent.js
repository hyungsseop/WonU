import React from 'react';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <div className="card">
      <img src={props.card_image} alt={props.card_name} />
      <h2>{props.card_name}</h2>
      <p><strong>Domestic Fee:</strong> {props.domestic_fee}</p>
      <p><strong>Overseas Fee:</strong> {props.overseas_fee}</p>
      <p><strong>Benefits:</strong> {props.benefit_cate}</p>
      <a href={props.card_url}>More Info</a>
    </div>
  );
}

export default CardComponent;
