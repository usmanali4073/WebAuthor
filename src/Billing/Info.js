import React, { Component } from "react";

const Info = props => {
  const { infolist } = props;
  const infolistdiv = infolist.map(x => {
    if (x.age > 20) {
      return (
        <tr key={x.id}>
          <td>{x.name}</td>
          <td>{x.age}</td>
          <td>{x.belt}</td>
        </tr>
      );
    } else {
      return null;
    }
  });
  return <tbody>{infolistdiv}</tbody>;
};

export default Info;
