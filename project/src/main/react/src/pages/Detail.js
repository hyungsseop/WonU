import { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import './css/Detail.css';
import card_info from './data.js';
import { useNavigate } from "react-router-dom";

function Detail(props) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
        <button className='btn btn-outline-primary' onClick={handleShowModal}>상세 보기</button>
    <div className="col-md-3">
      <div className='card_list'>

        <Modal show={showModal} onHide={handleCloseModal} dialogClassName='modal3_1' size="lg">
          <Modal.Header className='modal_header' closeButton>
            <Modal.Title> 상세 보기</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal_body'>
            <div className='modal_parent'> 
              <div className='modal_child'> 
              <img src="https://static11.samsungcard.com/wcms/home/scard/image/personal/b_AAP1483.png" 
                height="250px" width="158px" alt='card'/>
              </div>
              <div className='modal_child'>
                <h4>삼성카드 taptap-o</h4>
                <p>연회비: 10,000원</p>
                <p>혜택: #교통 #외식 #주유 #문화</p>
                <button className='btn btn-primary'>카드 신청</button>
              </div>
            </div>
            <div className='modal_parent'>
            <div className='modal_child'>
                <h4>이용 안내</h4>
            </div>
            <div className='modal_child'>
                <p>이용 안내 내용을 추가하세요. 예를 들어, 카드의 사용 가능한 가맹점, 혜택 설명 등을 여기에 추가할 수 있습니다.
                  배고픈데 무엇을 먹을지를 모르겠습니다. 3시에 회의해야해
                </p>
            </div>
          </div>
          <div> 
        <div> 
      </div>
    </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>닫기</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    </>
  )
}

export default Detail;