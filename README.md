# Spring Boot와 React.js 연동

## Front-end

### React.js 프로젝트 생성
```bash
# 프로젝트 생성 및 실행
npx create-react-app react-app
cd react-app
npm start

# 필요한 모듈 설치
npm install react-router-dom --save # 라우터 모듈
npm install axios --save # 서버와 통신하기 위한 모듈
npm install http-proxy-middleware --save # CORS 모듈
# npm install react-cookie
# npm i redux react-redux @reduxjs/toolkit
```

#### npm version
```
  npm: '8.5.0',
  node: '16.14.2',
  react: '18.2.0'
```

#### Package.json에 추가
```json
"proxy":"http://localhost:8080
```

## Back-end
### SpringBoot 프로젝트 생성

#### sdkman 
```
1. 설치할 경로 이동
2. sudo apt-get update
3. sudo apt-get install unzip
4. sudo apt-get install zip
5. curl -s https://get.sdkman.io | bash
6. source "$HOME/.sdkman/bin/sdkman-init.sh"
7. sdk list java 
8. sdk install java 17.0.8-amzn
9. java -version 으로 확인 -> 오류시 bash 새로 열기
10. sdk install springboot 3.0.9
-------------------------------------설정
11. 폴더에 들어가서 - ./gradlew bootRun 실행
```

