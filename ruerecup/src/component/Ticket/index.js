import React from "react";
import "./index.css";

function Tickets() {
  return (
    <div className="container">

      <div className="left">
        <img className="imgticket" url='../../assets/dechet_sauvage'/>
      </div>
      <div className="middle">
      
        <nav>
          <form>
            <input type="text" placeholder="Type de meuble / Nombre" />
          </form>
        </nav>

      </div>

      <div className="right">
      
        <div className="dropdown">
          <select>
            <option value="option1">Bon état 🟢</option>
            <option value="option2">Etat moyen 🟠</option>
            <option value="option3">Mauvais état 🔴</option>
            <option value="option4">Etat déplorable ⚫</option>
          </select>
          
        </div>
      </div>

    </div>
  );
}

export default Tickets;
