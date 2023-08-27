import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/Signup.css";

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });
  const [isUserIdAvailable, setUserIdAvailable] = useState(true);
  const checkUserIdAvailability = async (userId) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/auth/check-userId?userId=${userId}`
        );
        return response.data.available; 
      } catch (error) {
        console.error("아이디 가용성을 확인중입니다.", error);
        return false;
      }
    };

  const onSubmit = async ({ userId, userPw, userName, userBirth, phoneNumber, gender }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        {
          userId:userId,
          password:userPw,
          username:userName,
          birthday:userBirth,
          gender: gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("회원가입에 성공했습니다.", response.data);
      alert("회원가입 성공");
      document.location.href = '/login';
  
    } catch (error) {
      console.error("회원가입에 실패했습니다. 잠시후 다시 시도해주세요.", error);
    }
  };



  return (
    <div>
    <section className="col-4 offset-md-4 signup2">
      <div className="signup-card">
      <div className="signup6">가입 정보 입력</div>
      <p className="signup5">회원정보를 입력해주세요</p>
        <form onSubmit={handleSubmit(onSubmit)} className="signup4">
  
          <div className="mb-3 signup9">
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


          <div className="mb-3 signup9">
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

          <div className="mb-3 signup9">
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
                  message: '숫자 10~11글자여야 합니다.'
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


          <div className="mb-3 signup9">
            <label htmlFor="userBirth" className="signup11">생년월일</label>
            <input
              type="text"
              id="userBirth"
              className={`signup10 ${errors.userBirth ? 'is-invalid' : ''}`}
              {...register('userBirth', {
                required: '생년월일 항목은 필수 입력 정보입니다',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: '숫자 6글자여야 합니다.'
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

          <div className="mb-3 signup9">
            <label htmlFor="gender" className="signup11">성별</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register('gender', {
                    required: '성별을 선택해주세요.'
                  })}
                /> 남성
              </label><br></br>
              <label>
                <input
                  type="radio"
                  value="female" 
                  {...register('gender', {
                    required: '성별을 선택해주세요.'
                  })}
                /> 여성
              </label>
            </div>
            {errors.gender &&
              <div className="signup3">
                {errors.gender.message}
              </div>
            }
          </div>
            
          <div className="mb-3 signup9">
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
    </div>
  );
};

export default Signup;
