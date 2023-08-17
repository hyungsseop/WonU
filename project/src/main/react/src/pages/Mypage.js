import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import {} from "../App.css"
import { Link } from 'react-router-dom';

class Mypage extends Component {


// 렌더해서 출력되는 화면
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
          <div className="error-message">{this.state.joinConfirmPwError}</div>
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

        </Form.Group>
      </Form>
    );
  }
}

export default Mypage;
