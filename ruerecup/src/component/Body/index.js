import React, { useState } from "react";
import './index.css';
import Map from "../map";
import Tickets from "../Ticket";
import Header from "../Header";
import Addcont from "../Addcontenaire";

const Body = (props) => {
  const [conteneurs, setConteneurs] = useState([]);

  const ajouterConteneur = () => {
    const nouveauConteneur = <div className="container">Nouveau Conteneur</div>;
    setConteneurs([...conteneurs, nouveauConteneur]);
  };

    return(
        <body className="App-header">
          
            <div className="iconback"></div>

          <Header></Header>

           <Map
             conteneurs={conteneurs} 
             ajouterConteneur={ajouterConteneur}
           >
          

           </Map>

        <Tickets></Tickets>

        <Addcont
        conteneurs={conteneurs}
        ajouterConteneur={ajouterConteneur}
        ></Addcont>

      </body>
    )
}

export default Body 