import React, { Component } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import {} from "../App.css"

class Regist extends Component {
  join = () => {
    const joinId = this.joinId.value;
    const joinName = this.joinName.value;
    const joinPw = this.joinPw.value;
    const joinPhonenum = this.joinPhonenum.value;
    const regExp1 = /^[a-zA-Z0-9]{4,12}$/;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const regExp3 = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;

    if (joinName === "" || joinName === undefined) {
      alert("이름을 입력해주세요.");
      this.joinName.focus();
      return;      
    } else if (joinId === "" || joinId === undefined) {
      alert("아이디를 입력해주세요.");
      this.joinId.focus();
      return;
    } else if (!regExp1.test(joinId)) {
      alert("아이디 형식이 올바르지 않습니다.");
      this.joinId.value = "";
      this.joinId.focus();
      return;
    } else if (joinPw === "" || joinPw === undefined) {
      alert("비밀번호를 입력해주세요.");
      this.joinPw.focus();
      return;
    } else if (!regExp2.test(joinPw)) {
      alert("비밀번호 형식이 올바르지 않습니다.");
      this.joinPw.value = "";
      this.joinPw.focus();
      return;
    } else if (joinPhonenum === "" || joinPhonenum === undefined) {
      alert("전화번호를 입력해주세요.");
      return;
    } else if (!regExp3.test(joinPhonenum)) {
      alert("전화번호 형식이 올바르지 않습니다.");
      this.joinPhonenum.value = "";
      this.joinPhonenum.focus();
      return;
    }

  };
  
  state = {
    buttonDisplay: "True"
  };


  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay
    };

  return (
    <div>
      <Navbar>
      <Navbar.Brand href="/"><div style={{width: '100%', textAlign: 'center', color: '#0066FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>WON</div></Navbar.Brand>
      </Navbar>
    </div>
  );
  }

  render() {
    const formStyle = {
      margin: 50,
    };
    const buttonStyle = {
      marginTop: 10,
    };

    return (
      <Form style={formStyle}>
        <div style={{ width: "100%", textAlign: "center", color: "black", fontSize: 32, fontFamily: "Inter", fontWeight: 900, lineHeight: 2, wordWrap: "break-word" }}>가입정보 입력</div>
        <br />
        <div style={{ width: "100%", textAlign: "left", color: "black", fontSize: 16, fontFamily: "Roboto", fontWeight: 530, lineHeight: 3, wordWrap: "break-word" }}>회원정보를 입력해주세요.</div>
        <Form.Group controlId="joinForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <Form.Control
              type="text"
              maxLength="20"
              ref={(ref) => (this.joinName = ref)}
              placeholder="이름"
              className="custom1-style"
            />
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="12"
              ref={(ref) => (this.joinId = ref)}
              placeholder="아이디"
              className="custom1-style"
            />
          </div>
          <br />
          <div>
            <Form.Control
              type="password"
              maxLength="16"
              ref={(ref) => (this.joinPw = ref)}
              placeholder="비밀번호"
              className="custom1-style"
            />
          </div>
          <br />
          <div>
            <Form.Control
              type="password"
              maxLength="16"
              ref={(ref) => (this.joinConfirmPw = ref)}
              placeholder="비밀번호 확인"
              className="custom1-style"
            />
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="12"
              ref={(ref) => (this.joinPhonenum = ref)}
              placeholder="전화번호"
              className="custom1-style"
            />
          </div><br></br>
          <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="이용약관 및 개인정보 수집에 동의합니다." />
            </Form.Group>
          <br />
          <Button
            className="custom1-button"
            style={buttonStyle}
            onClick={this.join}
            variant="primary"
            type="button"
            block
          >
            가입하기
          </Button>
          <br />
        </Form.Group>
      </Form>
    );
  }
}

export default Regist;
