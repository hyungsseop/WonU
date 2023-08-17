import React, { Component, useState } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {} from "./../App.css"

class Regist extends Component {
  join = () => {
    const joinId = this.joinId.value;
    const joinName = this.joinName.value;
    const joinPw = this.joinPw.value;
    const joinConfirmPw = this.joinConfirmPw.value;
    const joinPhonenum = this.joinPhonenum.value;
    const regExp1 = /^[a-zA-Z0-9]{4,12}$/;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const regExp3 = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;

    if (joinName === "" || joinName === undefined) {
      this.setState({ joinNameError: "이름을 입력해주세요." });
      this.joinName.focus();
      return;
    } else if (joinId === "" || joinId === undefined) {
      this.setState({ joinIdError: "아이디를 입력해주세요." });
      this.joinId.focus();
      return;
    } else if (!regExp1.test(joinId)) {
      this.setState({ joinIdError: "ID 양식에 맞게 입력해주세요. ID는 숫자와 영소문자 혼합 4~12자 입니다." });
      this.joinId.value = "";
      this.joinId.focus();
      return;
    } else if (joinPw === "" || joinPw === undefined) {
      this.setState({ joinPwError: "비밀번호를 입력해주세요." });
      this.joinPw.focus();
      return;
    } else if (!regExp2.test(joinPw)) {
      this.setState({ joinPwError: "비밀번호의 양식에 맞에 입력해주세요." });
      this.joinPw.value = "";
      this.joinPw.focus();
      return;
    } else if (joinConfirmPw !== joinPw) {
      this.setState({ joinPwConError: "위의 비밀번호와 틀립니다. 다시 입력해주세요." });
      this.joinConfirmPw.value = "";
      this.joinConfirmPw.focus();
      return;
    } else if (joinPhonenum === "" || joinPhonenum === undefined) {
      this.setState({ joinPhonenumError: "휴대전화 번호를 입력해주세요." });
      return;
    } else if (!regExp3.test(joinPhonenum)) {
      this.setState({ joinPhonenumError: "휴대전화 번호는 기호 없이 숫자만 입력해주세요." });
      this.joinPhonenum.value = "";
      this.joinPhonenum.focus();
      return;
    }

    // 모든 유효성 검사를 통과하면 추가로 로직을 진행할 수 있습니다.
  };

  // 달력 양식
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null, // 선택된 날짜 상태 초기화
      selectedGender: '', // 선택된 성별 상태 초기화
    };
  }
  
  handleDateChange = (date) => {
    this.setState({
      selectedDate: date,
    });
  };


  handleCheckboxChange = (event) => {
    const selectedGender = event.target.value;
    this.setState({
      selectedGender: selectedGender,
    });
  };

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
        <div style={{ width: "100%", textAlign: "left", color: "black", fontSize: 20, fontFamily: "Roboto", fontWeight: 600, lineHeight: 3, wordWrap: "break-word" }}>회원정보를 입력해주세요.</div>
        <Form.Group controlId="joinForm">
          <div>
            <Form.Control
              type="text"
              maxLength="20"
              ref={(ref) => (this.joinName = ref)}
              placeholder="이름"
              className="custom1-style"
              style={{ width: '60%', margin: 'auto' }}
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
              style={{ width: '60%', margin: 'auto' }}
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
              style={{ width: '60%', margin: 'auto' }}
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
              style={{ width: '60%', margin: 'auto' }}
              onChange={() => this.setState({ joinPwConError: '' })}
            />
            <div className="error-message">{this.state.joinPwConError}</div>
          </div>
          <br />
          <div>
            <Form.Control
              type="text"
              maxLength="12"
              ref={(ref) => (this.joinPhonenum = ref)}
              placeholder="전화번호"
              className="custom1-style"
              style={{ width: '60%', margin: 'auto' }}
              onChange={() => this.setState({ joinPhonenumError: '' })}
            />
            <div className="error-message">{this.state.joinPhonenumError}</div>
          </div>
          <br />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center' }}>
          <label>생년월일:</label>
          <br />
          <DatePicker
            selected={this.state.selectedDate}
            onChange={this.handleDateChange}
            dateFormat="yyyy/MM/dd" // 원하는 날짜 형식 설정
            className="custom-datepicker"
          />
        </div>
        
        <div>
        <h2>Gender Selection</h2>
        <label>
          <input
            type="checkbox"
            value="Male"
            checked={this.state.selectedGender === 'Male'}
            onChange={this.handleCheckboxChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Female"
            checked={this.state.selectedGender === 'Female'}
            onChange={this.handleCheckboxChange}
          />
          Female
          </label>
          <br />
        {this.state.selectedGender && (
          <p>You have selected: {this.state.selectedGender}</p>
        )}
      </div>

          <br></br>
          <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="이용약관 및 개인정보 수집에 동의합니다." />
            </Form.Group>
          <br />
          <Button
            className="custom1-button"
            style={{...buttonStyle, width: '60%', margin: 'auto', display:'block'}}
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