import React from "react";

function Ingredients(props) {
  const name = props.itemName.name;
  const amount = props.itemName.amount;
  const id = props.itemName._id;

  return (
    <tr
      onClick={() => {
        return props.deleteItem(id);
      }}
    >
      <td>{name}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Ingredients;
