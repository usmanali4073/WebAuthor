import React, { Component } from "react";
import Info from "./Billing/Info";
import AddInfo from "./Billing/AddInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { name: "usman", age: "27", belt: "black", id: 1 },
        { name: "Takmeela", age: "26", belt: "yellow", id: 2 },
        { name: "Haniya", age: "2", belt: "pink", id: 3 }
      ]
    };
  }

  addBill = (bill) => {
    bill.id = Math.floor(Math.random() * 100); 
    let billstate = [...this.state.info, bill];
    this.setState({
        info: billstate
    })
    console.log(billstate);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <AddInfo onNewBill={this.addBill} />
          </div>
          <div className="col-6">
            {/* Billing Info List */}
            <h2>Billing Info</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Belt</th>
                </tr>
              </thead>
              <Info infolist={this.state.info} />
            </table>
            {/* Billing Info List */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
