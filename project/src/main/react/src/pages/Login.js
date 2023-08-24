import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/Login.css";
import Header2 from './Header2';


const API = "http://localhost:8080/auth/login";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(API, data, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        if (response.data.success) {
          alert("로그인 성공");
          document.location.href = '/';
        } else {
          alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
        }
      } else {
        alert("서버 오류. 나중에 다시 시도해주세요.");
      }
    } catch (error) {
      if (error.response) {
        alert("요청 오류: " + error.response.data.message);
      } else {
        alert("오류가 발생했습니다. 나중에 다시 시도해주세요.");
      }
    }
  }

  return (
    <div>
      <Header2  />
    
    <section className="col-4 offset-md-4 login2">
      <div className="login-card">
      <div className="login6">로그인</div>
        <p className="login5">아이디와 비밀번호를 입력해주세요</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 login9">
            <label htmlFor="userId" className="login11">
              아이디
            </label>
            <input
              type="text"
              id="userId"
              className={`login10 ${errors.userId ? 'is-invalid' : ''}`}
              {...register("userId", { required: "아이디 항목은 필수 정보입니다" })}
              placeholder="아이디를 입력해주세요"
            />
            {errors.userId && <div className="login3">{errors.userId.message}</div>}
          </div>

          <div className="mb-3 login9">
            <label htmlFor="userPw" className="login11">
              비밀번호
            </label>
            <input
              type="password"
              id="userPw"
              className={`login10 ${errors.userPw ? 'is-invalid' : ''}`}
              {...register("userPw", { required: "비밀번호 항목은 필수 정보입니다" })}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.userPw && <div className="login3">{errors.userPw.message}</div>}
          </div>

          <div className="text-center">
            <button type="submit" className="login7">
              로그인
            </button>
          </div>

          <p className="login12">
            아직 회원이 아니신가요?{" "}
            <a href="/signup" className="login-link-text">
              회원 가입하러 가기
            </a>
          </p>
        </form>
      </div>
    </section>
  </div>
  );
};

export default Login;
