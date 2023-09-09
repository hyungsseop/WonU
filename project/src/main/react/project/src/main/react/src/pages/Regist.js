<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import {} from "../App.css"
import { Link } from "react-router-dom"
import axios from "axios";
=======
import React, { Component, useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import {} from "./../App.css"
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
import React, { Component, useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import {} from "./../App.css"
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
import React, { Component, useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import {} from "./../App.css"
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js

class Regist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      joinNameError: "",
      joinIdError: "",
      joinPwError: "",
      joinPwConError: "",
      joinPhonenumError: "",
      birthDateError: "",
      genderError: "",
    };
  }

  // 모달 닫기 처리를 위한 메서드
  handleClose = () => {
    this.setState({ showModal: false });
  };

  join = async ({history}) => {
    const joinId = this.joinId.value;
    const joinName = this.joinName.value;
    const joinPw = this.joinPw.value;
    const joinConfirmPw = this.joinConfirmPw.value;
    const joinPhonenum = this.joinPhonenum.value;
    const birthDate = this.birthDate.value;
    const gender = this.gender.value;
    const regExp1 = /^[a-zA-Z0-9]{2,12}$/;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const regExp3 = /^[0-9]{10,14}$/;
    const regExp4 = /^[0-9]{6}$/;

    this.setState({
      joinNameError: "",
      joinIdError: "",
      joinPwError: "",
      joinPwConError: "",
      joinPhonenumError: "",
      birthDateError: "",
      genderError: "",
      showModal: false,
      isChecked: false, 
    });

    if (joinName === "") {
      this.setState({ joinNameError: "이름을 입력해주세요. 이름은 영어, 숫자를 섞어 최소 2자, 최대 12자 작성가능합니다." });
      this.joinName.focus();
      return;
    } else if (joinId === "" ) {
      this.setState({ joinIdError: "아이디를 입력해주세요." });
      this.joinId.focus();
      return;
    } else if (!regExp1.test(joinId)) {
      this.setState({ joinIdError: "ID 양식에 맞게 입력해주세요. ID는 숫자와 영소문자 혼합 4~12자 입니다." });
      this.joinId.value = "";
      this.joinId.focus();
      return;
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
    } else if (joinPw === "") {
      this.setState({ joinPwError: "비밀번호를 입력해주세요. 비밀번호는 영어,숫자,특수문자를 섞어 8자 이상 16자 미만으로 작성해주세요." });
=======
    } else if (joinPw === "" || joinPw === undefined) {
      this.setState({ joinPwError: "비밀번호를 입력해주세요." });
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
      this.joinPw.focus();
      return;
    } else if (!regExp2.test(joinPw)) {
      this.setState({ joinPwError: "비밀번호의 양식에 맞게 입력해주세요." });
      this.joinPw.value = "";
      this.joinPw.focus();
      return;
    } else if (joinConfirmPw !== joinPw) {
      this.setState({ joinPwConError: "비밀번호가 맞지 않습니다. 다시 입력해주세요." });
      this.joinConfirmPw.value = "";
      this.joinConfirmPw.focus();
      return;
    } else if (joinPhonenum === "") {
      this.setState({ joinPhonenumError: "휴대전화 번호를 입력해주세요." });
      return;
    } else if (!regExp3.test(joinPhonenum)) {
      this.setState({ joinPhonenumError: "휴대전화 번호는 기호 없이 숫자만 입력해주세요." });
      this.joinPhonenum.value = "";
      this.joinPhonenum.focus();
      return;
    } else if (birthDate === "") {
      this.setState({ birthDateError: "생년월일을 입력해주세요." });
      this.birthDate.focus();
      return;
    } else if (!regExp4.test(birthDate)) {
      this.setState({ birthDateError: "EX) 230423 6개의 숫자로 입력해주세요." });
      this.birthDate.value = "";
      this.birthDate.focus();
      return;
    } else if (gender === "" || gender === undefined) {
      this.setState({ genderError: "성별을 입력해주세요. (남/여)" });
      return;
    } else if (!this.state.isChecked) {
      alert("이용약관에 동의해주세요.");
      return;
    } else {
      const API = "http://localhost:8080/auth/regist";
    
      try {
        const response = await axios.post(API, {
          userId: joinId,
          username: joinName,
          password: joinPw,
          passwordCheck: joinConfirmPw,
          gender: gender,
          birthday: birthDate,
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
    
        if (response.status === 200) {
          this.setState({ showModal: true });
        }
      } catch (error) {
        console.error("회원가입에 문제가 발생했습니다.", error);
      }
    }
    this.setState({ showModal: true });
    <a href="/login"></a>
  };

// 렌더해서 출력되는 화면
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
  render() {    
=======
=======
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
  render() {
    const formStyle = {
      margin: 50,
    };
    const buttonStyle = {
      marginTop: 10,
    };

>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
    return (
      <Form>
        <div style={{ width: "100%", textAlign: "center", color: "black", fontSize: 32, fontFamily: "Inter", fontWeight: 900, lineHeight: 2, wordWrap: "break-word" }}>가입정보 입력</div>
        <br />
        <div style={{ width: "60%" , color: "black", fontSize: 20, fontFamily: "Roboto", fontWeight: 600, lineHeight: 3, wordWrap: "break-word",  margin: 'auto' }}>회원정보를 입력해주세요.</div>
        <Form.Group controlId="joinForm">
          <div>
            <Form.Control
              type="text"
              maxLength="20"
              ref={(ref) => (this.joinName = ref)}
              placeholder="이름"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%', height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinNameError: '' })}
            />
            <div className="error-message">{this.state.joinNameError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="12"
              ref={(ref) => (this.joinId = ref)}
              placeholder="아이디"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinIdError: '' })}
            />
            <div className="error-message">{this.state.joinIdError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="password"
              maxLength="16"
              ref={(ref) => (this.joinPw = ref)}
              placeholder="비밀번호"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinPwError: '' })}
            />
            <div className="error-message">{this.state.joinPwError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="password"
              maxLength="16"
              ref={(ref) => (this.joinConfirmPw = ref)}
              placeholder="비밀번호 확인"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinConfirmPw: '' })}
            />
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
            <div className="error-message">{this.state.joinPwConError}</div>
=======
            <div className="error-message">{this.state.joinConfirmPwError}</div>
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
            <div className="error-message">{this.state.joinConfirmPwError}</div>
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
            <div className="error-message">{this.state.joinConfirmPwError}</div>
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="14"
              ref={(ref) => (this.joinPhonenum = ref)}
              placeholder="전화번호"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ joinPhonenumError: '' })}
            />
            <div className="error-message">{this.state.joinPhonenumError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="6"
              ref={(ref) => (this.birthDate = ref)}
              placeholder="생년월일"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ birthDateError: '' })}
            />
            <div className="error-message">{this.state.birthDateError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="1"
              ref={(ref) => (this.gender = ref)}
              placeholder="성별"
              className="custom1-style"
              style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
              onChange={() => this.setState({ genderError: '' })}
            />
            <div className="error-message">{this.state.genderError}</div>
          </div>
        
          <br></br>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="이용약관 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다."
              style={{ margin: 'auto', height: '60%', width: '60%', fontSize:'17px'}}
              onChange={(e) => this.setState({ isChecked: e.target.checked })}
            />
          </Form.Group>
          <br />

          <Button
            className="custom1-button"
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
            style={{width: '60%', margin: 'auto', display:'block', fontSize: '25px'}}
=======
            style={{...buttonStyle, width: '60%', margin: 'auto', display:'block', fontSize: '25px'}}
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
            style={{...buttonStyle, width: '60%', margin: 'auto', display:'block', fontSize: '25px'}}
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
            style={{...buttonStyle, width: '60%', margin: 'auto', display:'block', fontSize: '25px'}}
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
            onClick={this.join}
            variant="primary"
            type="button"
            block
          >
            가입하기
          </Button>
          <br/>
        </Form.Group>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>가입 성공</Modal.Title>
          </Modal.Header>
          <Modal.Body>회원 가입이 정상적으로 완료되었습니다.</Modal.Body>
          <Modal.Footer>
          <Button
            variant="primary"
            type="button"
            as={Link}
            to="/login"
            block
          > 로그인 하기
          </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    );
  }
}

<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js
<<<<<<< Updated upstream:project/src/main/react/project/src/main/react/src/pages/Regist.js

export default Regist;
=======
export default Regist;
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
export default Regist;
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
=======
export default Regist;
>>>>>>> Stashed changes:project/src/main/react/src/pages/Regist.js
