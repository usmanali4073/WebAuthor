import React, { Component } from "react";
import Info from "./Billing/Info";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h1>Main Componenet</h1>
            <Info name="usman" age="30" belt="black" />    
            <Info name="Haniya" age="2" belt="Yellow" />
            </div>
         );
    }
}
 
export default App;