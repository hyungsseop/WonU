import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/Modal1.css';
import Search from './Search';
import { ModalBody } from 'react-bootstrap';

function Modal1() {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="13" cy="13" r="8" stroke="#1C1B23" stroke-width="2" />
          <line x1="1" y1="-1" x2="9.30299" y2="-1" transform="matrix(0.753269 0.657713 -0.659317 0.751865 18.2393 19.2236)" stroke="#1C1B23" stroke-width="2" stroke-linecap="round" />
        </svg>
      </Button>
      <Modal show={show} onHide={handleCloseModal} className="custom-modal">
        <Modal.Header closeButton>
          <Search closeModal={handleCloseModal} />
        </Modal.Header>
        <ModalBody>추천 검색어 #우리카드 | # 사회초년생 | # 대학생 | # 혜택푸짐 | # 우리FIS</ModalBody>
      </Modal>
    </>
  );
}

export default Modal1;
