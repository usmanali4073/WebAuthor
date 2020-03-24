import React, { Component } from "react";
import Edit from "./Edit";
import Add from "./Add";

export default class Account extends Component {

    render() {
        return (
            <div>
               <div className="row">
               <div className="col-4">

                <Edit />
                </div>
                <div className="col-4">
                <Add />
                </div>
                <div className="col-4">

                </div>
               </div>
            </div>
        )
    }
}

 
