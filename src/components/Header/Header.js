import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className= 'header'>
        <div className='header-logo'>
            <h3>Youtube</h3>
        </div>

        <div>
            <div className="header-input">
                <input type="text" placeholder="Search" className="search-input"/>
                {/* 아이콘 및 추가 컴포넌트 삽입 가능 */}
            </div>
        </div>

        <div className='header-user'>
            <h4>Make Video/</h4>
            <h4>Alarm/</h4>
            <h4>User</h4>
        </div>
        
   
    </div>

  );
}

export default Header;
