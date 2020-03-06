import React,  { Component } from "react";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:""
          }
    }

    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    hanleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state.name)
    }
    

    render() { 
        return (
            <div>
                <h1>My Name is {this.state.name}</h1>
                <form onSubmit={this.hanleSubmit} >
                    <input onChange={this.handleChange} type="text"/>
                    <button>Submit</button>
                </form>
            </div>
          );
    }
}
 
export default Info;