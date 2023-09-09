import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/Signup.css";
import Modal from 'react-bootstrap/Modal';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const [isUserIdAvailable, setUserIdAvailable] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    document.location.href = '/login';
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

//   const getAgeRange = (birthYear) => {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - birthYear;

//     if (age >= 0 && age <= 9) return '0';
//     if (age >= 10 && age <= 19) return '10';
//     if (age >= 20 && age <= 29) return '20';
//     if (age >= 30 && age <= 39) return '30';
//     if (age >= 40 && age <= 49) return '40';
//     if (age >= 50 && age <= 59) return '50';
//     if (age >= 60 && age <= 69) return '60';
//     if (age >= 70 && age <= 79) return '70';
//     if (age >= 80 && age <= 89) return '80';
//     if (age >= 90 && age <= 99) return '90';
// }

  const onSubmit = async ({ userId, userPw, userName, userBirth, phoneNumber, gender }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        {
          userId:userId,
          password:userPw,
          username:userName,
          phoneNumber:phoneNumber,
          birthday:userBirth,
          gender: gender,
          // ageRange: ageRange,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("회원가입에 성공했습니다.", response.data);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("회원가입에 실패했습니다. 잠시후 다시 시도해주세요.", error);
      setShowErrorModal(true);
      if (error.response) {
        console.log('Error response:', error.response); 
        if (error.response.data === 'Duplicate ID' || error.response.status === 400) {
          setShowErrorModal(true);
        }
      }
    }
  }


  return (
    <div>
    <section className="col-4 offset-md-4 signup2">
      <div className="signup-card">
      <div className="signup6">가입 정보 입력</div>
      <p className="signup5">회원정보를 입력해주세요</p>
        <form onSubmit={handleSubmit(onSubmit)} className="signup4">
  
          <div className="mb-3">
            <label htmlFor="userId" className="signup11">
              아이디
            </label>
            <input
              type="text"
              id="userId"
              className={`signup10 ${errors.userId || !isUserIdAvailable ? 'is-invalid' : ''}`}
              {...register("userId", {
                required: "아이디 항목은 필수 입력 정보입니다",
                pattern: {
                  value: /^[A-Za-z0-9]{2,12}$/,
                  message: "영문자와 숫자로 이루어진 2~12글자여야 합니다.",
                },
              })}
              placeholder="아이디를 입력해주세요"
            />
            {!isUserIdAvailable && (
              <div className="signup3">이미 사용 중인 아이디입니다.</div>
            )}
            {errors.userId && (
              <div className="signup3">{errors.userId.message}</div>
            )}
          </div>


          <div className="mb-3">
            <label htmlFor="userName" className="signup11">이름</label>
            <input
              type="text"
              id="userName"
              className={`signup10 ${errors.userName ? 'is-invalid' : ''}`}
              {...register('userName', {
                required: '이름 항목은 필수 입력 정보입니다',
                minLength: {
                  value: 2,
                  message: '2글자 이상이 필요합니다.'
                }
              })}
                placeholder="이름을 입력해주세요"
            />
            {errors.userName &&
              <div className="signup3">
                {errors.userName.message}
              </div>
            }
          </div>

          <div className="mb-3">
            <label htmlFor="userPw" className="signup11">비밀번호</label>
            <input
              type="password"
              id="userPw"
              className={`signup10 ${errors.userPw ? 'is-invalid' : ''}`}
              {...register('userPw', {
                required: '비밀번호 항목은 필수 정보입니다',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
                  message: '영문자, 숫자, 특수문자를 포함한 8~16글자여야 합니다.'
                }
              })}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.userPw &&
              <div className="signup3">
                {errors.userPw.message}
              </div>
            }
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="signup11">전화번호</label>
            <input
              type="text"
              id="phoneNumber"
              className={`signup10 ${errors.phoneNumber ? 'is-invalid' : ''}`}
              {...register('phoneNumber', {
                required: '휴대폰 번호 항목은 필수 입력 정보입니다.',
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: '-없이 입력해주세요.'
                }
              })}
                placeholder= "휴대전화번호를 입력해주세요"
            />
            {errors.phoneNumber &&
              <div className="signup3">
                {errors.phoneNumber.message}
              </div>
            }
          </div>


          <div className="mb-3">
            <label htmlFor="userBirth" className="signup11">생년월일</label>
            <input
              type="text"
              id="userBirth"
              className={`signup10 ${errors.userBirth ? 'is-invalid' : ''}`}
              {...register('userBirth', {
                required: '생년월일 항목은 필수 입력 정보입니다',
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: '숫자 8글자여야 합니다.'
                }
              })}
                placeholder="생년월일을 입력해주세요"
            />
            {errors.userBirth &&
              <div className="signup3">
                {errors.userBirth.message}
              </div>
            }
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="signup11">성별</label>
            <div>
              <div className="signup9">
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register('gender', {
                    required: '성별을 선택해주세요.'
                  })}
                /> 남성
              </label><br></br>
              <label >
                <input
                  type="radio"
                  value="female" 
                  {...register('gender', {
                    required: '성별을 선택해주세요.'
                  })}
                /> 여성
              </label>
              </div>
            </div>
            {errors.gender &&
              <div className="signup3">
                {errors.gender.message}
              </div>
            }
          </div>
            
          <div className="mb-3">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                {...register("agreement", { required: "이용약관에 동의해야 가입이 가능합니다." })}
              />
              이용약관 개인정보 수집 및 이용에 동의합니다.
              {errors.agreement && (
                <div className="signup3">{errors.agreement.message}</div>
              )}
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="signup7"
            >
              회원 가입하기
            </button>
          </div>
            <br/><br/>
        </form>
      </div>
    </section>
    <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} >
        <Modal.Header closeButton>
          <Modal.Title>회원가입 성공</Modal.Title>
        </Modal.Header>
        <Modal.Body>회원가입에 성공했습니다.</Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseSuccessModal}>확인</button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>회원가입 오류</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          중복된 아이디가 존재하여 회원가입이 불가능합니다.
          <br/> 
          다른 ID를 입력해주세요.
          </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseErrorModal}>확인</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Signup;
