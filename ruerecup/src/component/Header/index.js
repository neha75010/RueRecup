import './index.css';
import { useState } from "react";
import logoo from '../../assets/logoo.png';

function Header() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  }

  const closePopup = () => {
    setPopupVisible(false);
  }

  return (
    <header className="header">

      <div className="header-logo">
      <img src={logoo} alt="Logo RueRecup" />
      </div>

      <div className="header-title">
        <h1>RueRecup</h1>
      </div>

      <div className="header-login">
        <button onClick={openPopup}>Login</button>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close header-login" onClick={closePopup}>&times;</span>
            <h2>Login</h2>

            <form>
              <input type="text" placeholder="Nom d'utilisateur" required />
              <input type="password" placeholder="Mot de passe" required />
              <button type="submit">Se connecter</button>
            </form>
            
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;
