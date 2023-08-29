import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Credit from './pages/Credit';
import Header from './pages/Header';
import First from './pages/First';
import Card from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recommend from './pages/Recommend';

function App() {
    return (
              <Router>
                <Header />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/first" element={<First />} />
                  <Route path="/mypage" element={<Mypage />} />
                  <Route path="/credit" element={<Credit />} />
                  <Route path="/Card" element={<Card />} />
                  <Route path="/Credit/recommend" element={<Recommend />} />
              </Routes>
            </Router>
    );
}

export default App;