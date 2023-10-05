import React from "react";
import './index.css';
import Map from "../map";
import Tickets from "../Ticket";
import Header from "../Header";

const Body = (props) => {
    return(
        <body className="App-header">
          
            <div className="iconback"></div>

          <Header></Header>

           <Map></Map>

        <Tickets></Tickets>

      </body>
    )
}

export default Body 