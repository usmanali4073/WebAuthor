import React, { Component } from "react";

const Info =(props)=>{

    const { infolist } = props;
    const infolistdiv = infolist.map(x => {
        if (x.age > 20) {
            return (
                <div key={x.id}>
                  <h1>My Billing Info </h1>
                  <div>NAME: {x.name} </div>
                  <div>AGE: {x.age} </div>
                  <div>BELT: {x.belt} </div>
                </div>
              );
        }else{
            return null
        }
  
    });

    console.log(infolistdiv)
    return (
        <div> { infolistdiv }</div>
    );
}

export default Info;
