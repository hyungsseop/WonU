import { useState } from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Container, ToggleButtonGroup, ToggleButton, button } from 'react-bootstrap';
import Header from './Header';
import card_info from './data.js';

function Credit() {

  let [card] = useState(card_info)

  return (
    <div>
      <div className="container">
        <br></br>
        <>
          <p>카드사</p>
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton id="tbg-check-0" value={0}>
              전체
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={2}>
              국민카드
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={3}>
              신한카드
            </ToggleButton>
            <ToggleButton id="tbg-check-4" value={4}>
              현대카드
            </ToggleButton>
            <ToggleButton id="tbg-check-5" value={5}>
              삼성카드
            </ToggleButton>
            <ToggleButton id="tbg-check-6" value={6}>
              삼성카드
            </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <p>혜택</p>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-0" value={0}>
              전체
            </ToggleButton>
            <ToggleButton id="tbg-radio-1" value={1}>
              Radio 1
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              Radio 2
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              Radio 3
            </ToggleButton>
            <ToggleButton id="tbg-radio-4" value={4}>
              Radio 4
            </ToggleButton>
            <ToggleButton id="tbg-radio-5" value={5}>
              Radio 5
            </ToggleButton>
            <ToggleButton id="tbg-radio-6" value={6}>
              Radio 6
            </ToggleButton>
            <ToggleButton id="tbg-radio-7" value={7}>
              Radio 7
            </ToggleButton>
            <ToggleButton id="tbg-radio-8" value={8}>
              Radio 8
            </ToggleButton>
            <ToggleButton id="tbg-radio-9" value={9}>
              Radio 9
            </ToggleButton>
            <ToggleButton id="tbg-radio-10" value={10}>
              Radio 10
            </ToggleButton>
            <ToggleButton id="tbg-radio-11" value={11}>
              Radio 11
            </ToggleButton>

          </ToggleButtonGroup>
        </>

        <div className="row">
          {
            card.map((a, i)=>{
              return (
                <Card_list card={card[i]} i={i}></Card_list>
              )
            })
          }
        </div>
      </div>
    </div>

  );
}

function Card_list(props) {
  return (
    <div className="col-md-3">
      <img src={'./images/samsung'+ (props.i+1) +'.png'} 
      width="80%" />
      <h4>{props.card.card_name}</h4>
      <p>연회비</p>
      <p>{props.card.domestic_fee}</p>
      <p>주요혜택</p>
      <p>{props.card.benefit_cate}</p>
      <button className='btn btn-danger'>상세 보기</button>
    </div>
  )
}
export default Credit;