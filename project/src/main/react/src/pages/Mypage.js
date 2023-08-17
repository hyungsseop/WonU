<<<<<<< HEAD:project/src/main/react/src/pages/Mypage.js
<<<<<<<< HEAD:project/src/main/react/src/pages/Mypage.js
=======
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Mypage.js
function Mypage() {
    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <h2>마이페이지</h2>
        </div>
    )
  }

<<<<<<< HEAD:project/src/main/react/src/pages/Mypage.js
  export default Mypage
========
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {} from "../App.css"
class Login extends Component {
  join = () => {
    // Join logic
  };

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
    }

    // Login logic
  };

  render() {
    const formStyle = {
      margin: 50,
    };
    const buttonStyle = {
      marginTop: 10,
    };

    return (
      <Form style={formStyle}>
      <div style={{width: '100%', height: "100%", textAlign: 'center', color: 'black', fontSize: 30, fontFamily: 'Inter', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>WON ID 로그인</div><br></br>  

        <Tabs defaultActiveKey="개인회원" id="justify-tab-example" className="mb-3" justify>
          <Tab eventKey="개인회원" title="개인회원 로그인">
            {/* ... */}
          </Tab>
          <Tab eventKey="기업회원" title="기업회원 로그인" disabled>
            {/* ... */}
          </Tab>
        </Tabs>

        <Form.Group controlId="loginForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Form.Control
            type="id"
            maxLength="100"
            ref={ref => (this.loginId = ref)}
            placeholder="아이디"
            style={{ width: '60%', textAlign: 'left', color: 'black', fontSize: 15, fontFamily: 'Roboto', fontWeight: '600'}}
          /><br></br>
          <Form.Control
            type="password"
            maxLength="20"
            ref={ref => (this.loginPw = ref)}
            placeholder="비밀번호"
            style={{ width: '60%', textAlign: 'left', color: 'black', fontSize: 15, fontFamily: 'Roboto', fontWeight: '600'}}
          /><br></br>
          <Button className="custom1-button" style={buttonStyle} onClick={this.login} variant="primary" type="button" block>
            로그인
          </Button>
          <Button className="custom2-button" style={buttonStyle} onClick={this.join} variant="primary" type="button" block>
            회원가입 하기
          </Button>
          {/* ... */}
        </Form.Group>
      </Form>
    );
  }
}

export default Login;
>>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Login.js
=======
  export default Mypage
>>>>>>> 42e8b9acaf35e5de51cacbacb5103d4a60a0f7f2:react-project/react-app/src/pages/Mypage.js
