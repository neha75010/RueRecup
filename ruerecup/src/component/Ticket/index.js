import React from "react";
import "./index.css";

function Tickets() {
  return (
    <div className="container">
      <div className="left">
        {/* Emplacement pour l'image */}
        <img url='../../assets/dechet_sauvage'/>
      </div>
      <div className="middle">
        {/* Barre de navigation avec un formulaire */}
        <nav>
          <form>
            <input type="text" placeholder="Type de meuble / Nombre" />
          </form>
        </nav>
      </div>

      <div className="right">
        {/* Menu déroulant */}
        <div className="dropdown">
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          
        </div>
      </div>

    </div>
  );
}

export default Tickets;
