import React, { Component } from "react";
import Info from "./Billing/Info";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:[
                {name:"usman", age:"30", belt:"black", id:1},
                {name:"Takmeela", age:"30", belt:"yello",  id:2},
                {name:"Haniya", age:"30", belt:"pink",  id:3}
            ]
          }
    }
    render() { 
        return ( 
            <div>
            <h1>Main Componenet</h1>
            <Info infolist={this.state.info}  />    
            </div>
         );
    }
}
 
export default App;