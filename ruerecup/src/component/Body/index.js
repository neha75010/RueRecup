import React from "react";
import './index.css';
import Map from "../map";
import Header from "../Header";
import Ticket from "../Ticket";

const Body = (props) => {
    return(
        <body className="App-header">
          <Header></Header>

           <Map></Map>

          <Ticket></Ticket>

      </body>
    )
}

export default Body 