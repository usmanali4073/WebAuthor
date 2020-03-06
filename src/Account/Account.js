import React, { Component }  from 'react';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'usman ali',
            age: 40
          }
    }
    render() { 
        return (
            <div>
            <button onClick={(c)=>{console.log("A")}}>A</button>
            <button onClick={(c)=>{console.log("B")}}>B</button>
            <p>{Math.random() * 10}</p>

            <p> {this.state.name} is going to be {this.state.age}</p>
        </div> 
          );
    }

}
 
export default Account;