import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {} from "../App.css"
import { Link } from 'react-router-dom';
class Login extends Component {
  

  login = () => {
    const loginId = this.loginId.value;
    const loginPw = this.loginPw.value;

    if (loginId === "" || loginId === undefined) {
      alert("아이디를 입력해주세요.");
      this.loginId.focus();
      return;
    } else if (loginPw === "" || loginPw === undefined) {
      alert("비밀번호를 입력해주세요.");
      this.loginPw.focus();
      return;
    } else if (loginId === "사용자가입력한아이디" && loginPw === "사용자가입력한비밀번호") {
      // 아이디와 비밀번호가 맞는 경우에만 다음 페이지로 이동하는 로직
      alert("로그인 성공!");
      // 서버에서 코드 유효성 검증을 하는게 좋을거같아서 일단 남겨둘게요.
      // 로그인이 성공적으로 되면 홈으로 돌아가도록 만들었슴당
      this.props.history.push("/");
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  render() {
    const formStyle = {
      margin: 100,
    };

    return (
      <Form style={formStyle}>
      <div style={{width: '100%', height: "100%", textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>WON ID 로그인</div><br></br>  

        <Tabs defaultActiveKey="개인회원" id="justify-tab-example" className="mb-4 custom-tabs" justify>
          <Tab eventKey="개인회원" title="개인회원 로그인">
          </Tab>
          <Tab eventKey="기업회원" title="기업회원 로그인" disabled>
          </Tab>
        </Tabs>

        <Form.Group controlId="loginForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Form.Control
            type="id"
            maxLength="100"
            ref={ref => (this.loginId = ref)}
            placeholder="아이디"
            style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto' }}
          /><br></br>
          <Form.Control
            type="password"
            maxLength="20"
            ref={ref => (this.loginPw = ref)}
            placeholder="비밀번호"
            style={{background: '#F5F5F8', fontSize: 20, width: '60%',height: '60px', margin: 'auto'}}
          /><br></br>
         <Button
            className="custom1-button"
            style={{  width: '60%', margin: 'auto', display: 'block', fontSize: '25px' }}
            variant="primary"
            type="button"
            onClick={this.login}
            block
          > 로그인  
          </Button>
          <br></br>
          <Button
            className="custom2-button"
            style={{ width: '60%', margin: 'auto', display: 'block', fontSize: '25px', backgroundColor: 'black' }}
            variant="primary"
            type="button"
            as={Link}
            to="/regist"
            block
          > 회원가입 하기
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
//
export default Login;
