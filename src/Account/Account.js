import React, { Component }  from 'react';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <button onClick={(c)=>{console.log("A")}}>A</button>
            <button onClick={(c)=>{console.log("B")}}>B</button>
            <p>{Math.random() * 10}</p>
        </div> 
          );
    }

}
 
export default Account;