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
  
  const [password, setPassword] = useState("");
  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm({ mode: 'onChange' });
  const handleDelete = () => {
    const confirmed = window.confirm("정말 탈퇴하시겠습니까?");
    
    if (confirmed) {
      deleteUser();
    }
  };
  

  useEffect(() => {
    let completed = false;
    setValue("userPw", "");
    setValue("confirmUserPw", "");
    
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

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setUserData(prevState => ({ ...prevState, [id]: value }));
  };

    const onSubmit = async (data) => {
      try {
        const response = await axios.put(
          `http://localhost:8080/auth/mypage/mypageupdate`,
          {
            password: data.userPw,
            userId: userData.userId,
            username: userData.username,
            birthday: userData.userBirth,
            phoneNumber: userData.phoneNumber,
            gender: userData.gender
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        // ...
      } catch (error) {
        console.error("An error occurred", error);
      }
    };
  

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/auth/mypage/${userData.userId}/delete`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("User deleted successfully");
        localStorage.removeItem('login-token');
        localStorage.removeItem('login-id');
        alert("회원 탈퇴에 성공했습니다.");
        window.location.href = '/'; // 로그아웃 후 메인 페이지로 리다이렉트
      } else {
        console.log("User deletion failed");
        alert("회원 탈퇴에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("An error occurred while deleting user", error);
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
                onChange={handleInputChange}
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
                onChange={e => setPassword(e.target.value)}
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
              <span onClick={handleDelete} className="mypage14">회원 탈퇴하기</span>
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