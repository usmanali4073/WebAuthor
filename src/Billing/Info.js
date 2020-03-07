import React from "react";

const Info = props => {
  const { infolist, deleteBill } = props;
  const infolistdiv = infolist.map(x => {
    if (true) {
      return (
        <tr key={x.id}>
          <td>{x.name}</td>
          <td>{x.age}</td>
          <td>{x.belt}</td>
          {/* Use Arrow Function Because we Can't Invlode the Method inSide */}
          <td onClick={() => deleteBill(x.id)} ><button type="button" className="btn btn-outline-danger">Delete</button></td>
        </tr>
      );
    } else {
      return null;
    }
  });
  return <tbody>{infolistdiv}</tbody>;
};

export default Info;
