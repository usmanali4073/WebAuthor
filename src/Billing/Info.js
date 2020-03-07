import React, { Component } from "react";
import PropTypes from 'prop-types'

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
     const  {name, age, belt} = this.props

    return (
      <div>
        <h1>My Billing Info </h1>
        <div>Name: {name} </div>
        <div>Age: {age} </div>
        <div>Belt: {belt} </div>
      </div>
    );
  }
}

export default Info;
