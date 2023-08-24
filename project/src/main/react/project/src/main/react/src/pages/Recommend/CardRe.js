
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './CardRe.css';
import '../../App.css';
function CardRe() {
  return (
    <>
    <h5>카드사</h5>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1}>
          우리카드 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2}>
          국민카드
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3}>
          신한카드 (pre-checked)
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
      <h5>혜택</h5>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Radio 1 (pre-checked)
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default CardRe;