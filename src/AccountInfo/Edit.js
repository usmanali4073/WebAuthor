import React, { Component } from "react";

export default class Edit extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName:""
        };

        this.OnFieldChange = this.OnFieldChange.bind(this)
      }

OnFieldChange(e){
    
    this.setState({
        [e.target.name]: e.target.value
    })
console.log(this.state)
}

OnSubmit = (e) =>{
  e.preventDefault()
  console.log(this.state)
}



  render() {
    return (
      <div>
        <form className="form-check" onSubmit={this.OnSubmit}>

        {/* FirstName */}
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-1-12 col-form-label">Account First Name</label>
            <div className="col-sm-1-12">
              <input
                onChange={this.OnFieldChange}
                value={this.state.firstName}
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                placeholder="Account First Name"
              />
            </div>
          </div>
          {/* FirstName */}
          {/* LastName */}
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-1-12 col-form-label">Account Last Name</label>
            <div className="col-sm-1-12">
              <input
                onChange={this.OnFieldChange}
                value={this.state.lastName}
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                placeholder="Account Last Name"
              />
            </div>
          </div>
        {/* LastName */}

         
          <div className="form-group">
            <div>
              <button type="submit" onSubmit={this.OnSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
       
      </div>
    );
  }
}
