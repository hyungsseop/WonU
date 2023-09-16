//mypage
import React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/Mypage.css";

const Mypage = () => {
  const [userData, setUserData] = useState({
    id: localStorage.getItem('id'),
    userId: localStorage.getItem('login-id'),
    userName: localStorage.getItem('userName'),
    userPw: '',
    phoneNumber: localStorage.getItem('phoneNumber'),
    userBirth: localStorage.getItem('userBirth'),
    gender: localStorage.getItem('gender'),
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
          gender: response.data.gender.toString(),
          phoneNumber: response.data.phone
        });
        
        console.log('회원 정보 가져오기는 성공')
        console.log('id:', userData.id);
        console.log('userid:', response.data.userId);
        console.log('userName:', userData.userName);
        console.log('userPw:', userData.userPw);
        console.log('phoneNumber:', response.data.phone);
        console.log('userBirth:', response.data.birthday);
        console.log('gender:', response.data.gender.toString());
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

  const onSubmit = async ({ id, userId, userPw, userName, userBirth, phoneNumber, gender }) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/auth/mypage/${userData.userId}/update`,
        {
          id: localStorage.getItem('id'),
          userId: localStorage.getItem('login-id'),
          userName: localStorage.getItem('userName'),
          password: userPw,
          birthday: localStorage.getItem('userBirth'),
          phone: localStorage.getItem('phoneNumber'),
          gender:localStorage.getItem('gender')
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) { 
        alert("회원정보 수정이 완료했습니다.");
        window.location.href = '/'; 
      } else {
        alert("회원정보 수정에 실패했습니다. 다시 시도해주세요.");
        window.location.href = '/'; 
      }
  
    } catch (error) {
      console.error("An error occurred", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
      console.log('id:', localStorage.getItem('id'));
      console.log('userId:',  localStorage.getItem('login-id')); 
      console.log('userName:', localStorage.getItem('userName')); 
      console.log('password:', userPw); 
      console.log('phoneNumber:', localStorage.getItem('phoneNumber'));
      console.log('userBirth:', localStorage.getItem('userBirth'));
      console.log('gender:',  localStorage.getItem('gender'));
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
                name="userPw"
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
                value="0"
                checked={userData.gender === '0'}
                disabled
              /> 남성
                </label><br></br>
                <label>
                  <input
                    type="radio"
                    value="1"
                    checked={userData.gender === '1'}
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