import React from "react";

function Ingredients(props) {
  return (
    <tr
      onClick={() => {
        return props.deleteItem(props.id);
      }}
    >
      <td>{props.itemName[0]}</td>
      <td>{props.itemName[1]}</td>
    </tr>
  );
}

export default Ingredients;
