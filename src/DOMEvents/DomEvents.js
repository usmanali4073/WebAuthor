import React, { Component } from 'react'


class DomEvents extends Component {
    constructor(props) {
        super(props);
        this.state = { info:{
            name:"Usman",
            age:30
        }  }
    }

    domClickEvent = (e) => {
        this.setState({
           info:{
            name:"Haniya",
            age: 25
           }
        })

        console.log(this.state)
        console.log(e.target)
    }
    domMouseOverEvent(e){
        console.log(e.target, e.pageX)
    }
    handleCopy(e){
        console.log("you copied and i know it")
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.domClickEvent} > clickc Me</button>
              <button onMouseOver={this.domMouseOverEvent} > Hover Me</button>
              <p onCopy={this.handleCopy} >don't copy, if you do i will know</p>
              <p>my name is {this.state.info.name} and age is {this.state.info.age}</p>
            </div>
         );
    }
}
 

export default DomEvents;