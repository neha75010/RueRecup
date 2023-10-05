import React from "react";
import './index.css';
import Map from "../map";
import Tickets from "../Ticket";

const Body = (props) => {
    return(
        <body className="App-header">
            <div className="iconback"></div>

           <Map>
           </Map>

        <Tickets></Tickets>

      </body>
    )
}

export default Body 