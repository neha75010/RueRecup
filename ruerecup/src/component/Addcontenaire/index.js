import './index.css';
import React, { useState } from "react";

function Addcont({ conteneurs, ajouterConteneur}) {
 
  return (
    <div className="App">
      <div className="container">{conteneurs}</div>
    </div>
  );
}

export default Addcont;


