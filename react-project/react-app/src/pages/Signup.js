import axios from 'axios';


let data = {
    "username": "hshs@gmail.com",
    "password": "123456"
}
axios
.post("http://localhost:8080/auth/signup",  JSON.stringify(data), {
  headers: {
    "Content-Type": `application/json`,
  },
})
.then((res) => {
  console.log(res);
});


function Signup() {

  }

export default Signup