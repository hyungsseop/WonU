import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/Mypage.css";

const Mypage = () => {
  const [userData, setUserData] = useState({
    id: localStorage.getItem('login-token'),
    userId: localStorage.getItem('login-id'),
    userPw: '',
    phoneNumber: '',
    userBirth: '',
    gender: ''
  });
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' });

  useEffect(() => {
    let completed = false;
    
    const get = async () => {
      const response = await axios.get(`http://localhost:8080/auth/mypage/${userData.userId}`);
      
      if (!completed) {
        setUserData({
          userId: response.data.userId,
          userBirth: response.data.birthday,
          gender: response.data.gender,
          phoneNumber: response.data.phoneNumber
        });
        
        console.log('Update successful');
      }
    };
    get();
    return () => {
      completed = true;
    };
  }, []);

    const onSubmit = async ({userId}) => {
    try {
      const response = axios.put(
        `http://localhost:8080/auth/mypageupdate`,
        {
          id: userData.id,
          userId:userData.userId,
          password:userData.userPw,
          username:userData.userName,
          birthday:userData.userBirth,
          gender: userData.gender,
          phoneNumber: userData.phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        });

      if (response.status === 200) {
        console.log("Update successful");
        alert("회원정보 업데이트에 성공했습니다.");
        window.location.href = '/';

       } else {
        console.log("Update failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
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
                defaultValue={userData.userId}
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userPw" className="mypage11">
                수정할 비밀번호
              </label>
              <input
                type="password"
                id="userPw"
                className={`mypage10 ${errors.userPw ? 'is-invalid' : ''}`}
                {...register("userPw", {
                  required: "비밀번호 항목은 필수 입력 정보입니다.",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
                    message: '영문자, 숫자, 특수문자를 포함한 8~16글자여야 합니다.'
                  }
                })}
              />
              {errors.userPw && <div className="mypage3">{errors.userPw.message}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="prevUserPw" className="mypage11">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmUserPw"
                className={`mypage10 ${errors.confirmUserPw ? 'is-invalid' : ''}`}
                {...register("confirmUserPw", {
                  validate: value => value === watch('userPw') || '비밀번호가 일치하지 않습니다',
                  required: "비밀번호 확인을 위해 다시 입력해주세요.",
                })}
              />
              {errors.confirmUserPw && <div className="mypage3">{errors.confirmUserPw.message}</div>}
            </div>
            
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="mypage11">
                전화번호
              </label>
              <input
                type="text"
                id="phoneNumber"
                disabled
                defaultValue={userData.phoneNumber}
                className={`mypage10 ${errors.phoneNumber ? 'is-invalid' : ''}`}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userBirth" className="mypage11">
                생년월일
              </label>
              <input
                type="text"
                id="userBirth"
                defaultValue={userData.userBirth}
                disabled
                className={`mypage10 ${errors.userBirth ? 'is-invalid' : ''}`}
              />              
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="mypage11">
                성별
              </label>
              <div className="mypage9">
                <label>
                <input
                type="radio"
                value="male"
                checked={userData.gender === 'male'}
                disabled
              /> 남성
                </label><br></br>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={userData.gender === 'female'}
                    disabled
                  /> 여성
                </label>
              </div>
            </div>  

            <div className="mypage13">
              <span onClick={() => window.confirm("정말 탈퇴하시겠습니까?")} className="mypage14">회원 탈퇴하기</span>
            </div><br/>

            <div className="text-center">
              <button type="submit" className="mypage7">
                변경 사항 확정
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Mypage;