import React, { Component } from "react";

class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:null,
        age:null,
        belt:null
    };
  }

  handleChange =(e)=> {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e)=> {
    
    e.preventDefault();
    this.props.onNewBill(this.state)
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            onChange={this.handleChange}
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="belt">Belt</label>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="belt"
            placeholder="Enter your belt type"
            required
          />
        </div>
        <button  onSubmit={this.handleSubmit} className="btn btn-primary float-left">Submit</button>
        <button type="reset" className="btn btn-outline-warning  float-right">Clear</button>
      </form>
    );
  }
}

export default AddInfo;
