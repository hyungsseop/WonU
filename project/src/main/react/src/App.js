import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Regist from './pages/Regist';
import Mypage from './pages/Mypage';
import Credit from './pages/Credit';
import CardRe from './pages/Recommend/CardRe';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
              <Router>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/regist" element={<Regist />} />
                  <Route path="/mypage" element={<Mypage />} />
                  <Route path="/credit" element={<Credit />} />
                  <Route path="/credit/recommend/cardre" element={<CardRe/>} />
              </Routes>
            </Router>
    );
}

export default App;