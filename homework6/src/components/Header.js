import React from 'react';
import "./Header.css";

const Header=()=>{
    return(
        <div className="header">
        <div className="header-logo">
            <h2>Youtube</h2>
        </div>
        <div className="header-input">
            <input type="text" placeholder="검색"></input>
        </div>
        </div>
    );
}

export default Header;