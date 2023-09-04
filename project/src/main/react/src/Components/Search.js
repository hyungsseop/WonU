import React, { useState } from "react";
import './css/Search.css';

const Search = () => {
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        console.log(inputValue);
    };

    return (
        <div className="header">
            <input
                type="text"
                className="Search"
                value={inputValue} 
                onChange={handleInputChange} 
            />
            <button type="button" className="search" onClick={handleSearchClick}>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="13" cy="13" r="8" stroke="#1C1B23" stroke-width="2"/>
                <line x1="1" y1="-1" x2="9.30299" y2="-1" transform="matrix(0.753269 0.657713 -0.659317 0.751865 18.2393 19.2236)" stroke="#1C1B23" stroke-width="2" stroke-linecap="round"/>
                </svg></div>
            </button>
        </div>
        
    );
};

export default Search;
