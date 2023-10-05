import './index.css';
import React from "react";
import logoo from '../../assets/logoo.png';

function Header() {
  return (
    <header className="header">

      <div className="header-logo">
      <img src={logoo} alt="Logo RueRecup" />
      </div>

      <div className="header-title">
        <h1>RueRecup</h1>
      </div>

      <div className="header-login">
        <button>Login</button>
      </div>

    </header>
  );
}

export default Header;
