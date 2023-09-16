import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Credit from './pages/Credit';
import Header from './pages/Header';
import Footer from './pages/Footer';
import First from './pages/First';
import Recommend from './pages/Recommend';
import Wandb from './Components/Wandb';
import Cardlist from './pages/CardList';
import CardDisplay from './pages/CardDisplay';
import Service from './pages/Service';
import Elastic from './Components/Elastic';
import Test2 from './Components/test2';
import Admin from './pages/Admin';
import Searchcardlist from './Components/Searchcardlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('login-token')); // Check initial state with localStorage

    const handleLogin = (token) => {
      localStorage.setItem('login-token', token);
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('login-token');
      setIsLoggedIn(false);
    };
    return (
        <Router>
        {
            !['/admin', '/user_info', '/card_info'].includes(window.location.pathname) 
            && <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        }
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login onLogin={handleLogin} />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/first" element={<First />} />
                  <Route path="/mypage" element={<Mypage onLogout={handleLogout} />} />
                  <Route path="/credit" element={<Credit />} />
                  <Route path="/credit/recommend" element={<Recommend />} />
                  <Route path="/wandb" element={<Wandb />} />
                  <Route path="/elastic" element={<Elastic />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/cardlist" element={<Cardlist />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/carddisplay" element={<CardDisplay />} />
                  <Route path="/searchcardlist" element={<Searchcardlist />} />
                  <Route path="/test2" element={<Test2 />} />
              </Routes>
              {
                !['/admin', '/user_info', '/card_info'].includes(window.location.pathname) 
                && <Footer />
            }
            </Router>
    );
}

export default App;