import './index.css';
import React, { useState } from "react";
import dechet_sauvage from '../../assets/dechet_sauvage.jpg';

function Addcont({ conteneurs, ajouterConteneur}) {
 
  return (
    <div className="App">
      <div className="container">{conteneurs} 
      
      <div className="left">
        <img className="imgticket" url='../../assets/dechet_sauvage.jpg'/>
      </div>

      <div className="middle">
        <nav>
          <form>
            <input type="text" disabled="disabled" placeholder="Armoire en bois / 1" />
          </form>
        </nav>
      </div>

      <div className="right">
        <div className="dropdown">
            <option value="option2">Etat moyen 🟠</option>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Addcont;


