import React from 'react';

const Header = () => {
    return (
      <header className="main-header">
        <div className="container group">
          <h3 className="website-title">Website Title / Logo</h3>
          <ul className="main-nav">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
          </ul>
          <div className="manu_btn"></div>
          <div className="cross"></div>
        </div>
      </header>
    );
  }

  export default Header;