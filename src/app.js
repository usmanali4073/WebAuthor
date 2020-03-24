import React, { Component } from "react";
import Info from "./Billing/Info";
import AddInfo from "./Billing/AddInfo";
import { Link } from "react-router-dom";

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

  addBill = bill => {
    bill.id = Math.floor(Math.random() * 100);
    let billstate = [...this.state.info, bill];
    this.setState({
      info: billstate
    });
    console.log(billstate);
  };

  deleteBill = (id) => {
      console.log(id)
      let billsfilter = this.state.info.filter(x=> x.id !== id);
      this.setState({
        info: billsfilter
      });
      console.log(billsfilter)
    };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-5 card  bg-light">
            <AddInfo onNewBill={this.addBill} />
          </div>
          <div className="col-2 ">
          <Link className="btn btn-danger" to="/add">Add An Author</Link>
          </div>
          <div className="col-5 card  bg-light">
            {/* Billing Info List */}
            <h2>Billing Info</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Belt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <Info infolist={this.state.info} deleteBill={this.deleteBill} />
            </table>
            {/* Billing Info List */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
