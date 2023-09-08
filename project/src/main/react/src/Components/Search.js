import React, { useEffect, useState } from 'react';
import './css/Search.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Search = ({ closeModal }) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [cardInfo, setCardInfo] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/cardInfo')
            .then(response => {
                setCardInfo(response.data);
            })
            .catch(error => {
                console.error('API 호출 중 에러 발생: ', error);
            });
    }, []);

    const handleSearch = () => {
        localStorage.setItem('searchTerm', inputValue);
        closeModal();
        navigate(`/searchcardlist`);
    };
    
    

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="header">
            <input
                type="text"
                className="Search"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder='상품명을 입력해주세요.'
            />
            <button
                type="button"
                className="search"
                onClick={handleSearch}
                style={{ animation: 'yourAnimation 1s forwards' }} 
            >
                <div className="svg-container">
                <svg xmlns="http://wwwvscode-file://vscode-app/c:/Users/%EA%B3%B0/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="13" cy="13" r="8" stroke="#1C1B23" strokeWidth="2" />
                    <line x1="1" y1="-1" x2="9.30299" y2="-1" transform="matrix(0.753269 0.657713 -0.659317 0.751865 18.2393 19.2236)" stroke="#1C1B23" strokeWidth="2" strokeLinecap="round" />
                </svg>
                </div>
            </button>
        </div>
    );
};

export default Search;
