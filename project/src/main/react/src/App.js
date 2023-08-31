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
import Wandb from './Components/Wandb';
import Detail from './pages/Detail';
import Service from './pages/Service';

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
                  <Route path="/card" element={<Card />} />
                  <Route path="/credit/recommend" element={<Recommend />} />
                  <Route path="/wandb" element={<Wandb />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/credit/detail" element={<Detail />} />
              </Routes>
            </Router>
    );
}

export default App;