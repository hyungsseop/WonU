import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Credit from './pages/Credit';
import Header from './pages/Header';
import Header2 from './pages/Header2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
              <Router>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/mypage" element={<Mypage />} />
                  <Route path="/credit" element={<Credit />} />
                  <Route path="/header" element={<Header/>} />
                  <Route path="/header2" element={<Header2/>} />

              </Routes>
            </Router>
    );
}

export default App;