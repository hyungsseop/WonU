import React from "react";
import { useForm } from "react-hook-form";
import "./css/Mypage.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const First = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const onSubmit = async ({prevUserPw}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/mypagelogin",
        {
          userId: localStorage.getItem("login-id"),
          password: prevUserPw
        }, {
            headers: { 'Content-Type': 'application/json' }
      });
        console.log(response);
      if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(response.data)); //이거 고침
        navigate('/mypage');  
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
        if (error.response) {
        } else {
          console.log(error);
          alert("오류가 발생했습니다. 나중에 다시 시도해주세요.");
          document.location.href = '/mypage';
        }
      }
  };

  return (
    <div>
      <section className="mypage2">
        <div className="mypage-card">
          <div className="mypage6">About ME</div>
          <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-3">
              <label htmlFor="userId" className="mypage11">
                아이디
              </label>
              <input
                type="text"
                id="userId"
                className={`mypage10 ${errors.userId ? 'is-invalid' : ''}`}
                defaultValue={localStorage.getItem("login-id")}
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="prevUserPw" className="mypage11">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="prevUserPw"
                className={`mypage10 ${errors.prevUserPw ? 'is-invalid' : ''}`}
                {...register("prevUserPw", {
                  required: "현재 비밀번호를 입력해주세요.",
                })}
              />
              {errors.prevUserPw && <div className="mypage3">{errors.prevUserPw.message}</div>}
            </div>

            <div className="text-center">
              <button type="submit" className="mypage7">
                회원 정보 수정하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
 );
};

export default First;