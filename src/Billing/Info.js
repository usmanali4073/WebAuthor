import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { infolist } = this.props;
    const infolistdiv = infolist.map(x => {
      return (
        <div key={x.id}>
          <h1>My Billing Info </h1>
          <div>NAME: {x.name} </div>
          <div>AGE: {x.age} </div>
          <div>BELT: {x.belt} </div>
        </div>
      );
    });

    console.log(infolistdiv)
    return (
        <div> { infolistdiv }</div>
    );
  }
}

export default Info;
