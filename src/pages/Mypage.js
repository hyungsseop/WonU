import React from "react";
import { useForm } from "react-hook-form";
import "./css/Mypage.css";
import Header2 from "./Header2";

const Mypage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' });

  const userData = {
    userId: "예시 사용자",
    userPw: "********",
    phoneNumber: "1234567890",
    userBirth: "010203",
    gender: "남성"
  };

  const onSubmit = (data) => {
    // 서버에서 사용자 데이터를 업데이트하는 로직을 여기에 구현
    console.log("사용자 데이터가 업데이트되었습니다:", data);
    reset();
  };

  return (
    <div>
      <Header2 />
      <section className="col-4 offset-md-4 mypage2">
        <div className="mypage-card">
          <div className="mypage6">About ME</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 mypage9">
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

            <div className="mb-3 mypage9">
              <label htmlFor="prevUserPw" className="mypage11">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="prevUserPw"
                className={`mypage10 ${errors.prevUserPw ? 'is-invalid' : ''}`}
                {...register("prevUserPw", {
                  required: "현재 비밀번호를 입력해주세요.",
                  // 이전 비밀번호 일치 여부를 서버에서 확인할 로직 추가하면 됨
                })}
              />
              {errors.prevUserPw && <div className="mypage3">{errors.prevUserPw.message}</div>}
            </div>


            <div className="mb-3 mypage9">
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
            
            {/* 전화번호, 성별 및 생년월일 변경을 위한 필드 추가 */}
            <div className="mb-3 mypage9">
              <label htmlFor="phoneNumber" className="mypage11">
                전화번호
              </label>
              <input
                type="text"
                id="phoneNumber"
                className={`mypage10 ${errors.phoneNumber ? 'is-invalid' : ''}`}
                {...register('phoneNumber', {
                  required: '휴대폰 번호 필드는 필수 입력 정보입니다.',
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: '숫자 10~11자여야 합니다.'
                  }
                })}
                defaultValue={userData.phoneNumber}
              />
              {errors.phoneNumber && <div className="mypage3">{errors.phoneNumber.message}</div>}
            </div>

            <div className="mb-3 mypage9">
              <label htmlFor="userBirth" className="mypage11">
                생년월일
              </label>
              <input
                type="text"
                id="userBirth"
                className={`mypage10 ${errors.userBirth ? 'is-invalid' : ''}`}
                {...register('userBirth', {
                  required: '생년월일 필드는 필수 정보입니다',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: '숫자 6자여야 합니다.'
                  }
                })}
                defaultValue={userData.userBirth}
              />
              {errors.userBirth && <div className="mypage3">{errors.userBirth.message}</div>}
            </div>

            <div className="mb-3 mypage9">
              <label htmlFor="gender" className="mypage11">
                성별
              </label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="male"
                    {...register('gender', {
                      required: '성별을 선택해주세요.'
                    })}
                    defaultChecked={userData.gender === '남성'}
                  /> 남성
                </label><br></br>
                <label>
                  <input
                    type="radio"
                    value="female"
                    {...register('gender', {
                      required: '성별을 선택해주세요.'
                    })}
                    defaultChecked={userData.gender === '여성'}
                  /> 여성
                </label>
              </div>
              {errors.gender && <div className="mypage3">{errors.gender.message}</div>}
            </div>
            
            <div className="text-center">
              <button type="submit" className="mypage7">
                회원 정보 수정
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Mypage;
