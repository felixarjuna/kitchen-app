import React, { useState } from "react";

function InputArea(props) {
  const [itemName, setInputText] = useState("");

  function handleItemName(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const [itemAmount, setItemAmount] = useState("");
  function handleItemAmount(event) {
    const newValue = event.target.value;
    setItemAmount(newValue);
  }

  return (
    <div>
      <div className="form container">
        <p className="subtitle">Item's Name</p>
        <input
          onChange={handleItemName}
          type="text"
          value={itemName}
          placeholder="Gula"
        />
        <p className="subtitle">Item's Amount</p>
        <input
          onChange={handleItemAmount}
          type="text"
          value={itemAmount}
          placeholder="100 gr"
        />
        <button
          onClick={() => {
            setInputText("");
            setItemAmount("");
            return props.addItem([itemName, itemAmount]);
          }}
        >
          <span className="button">Add</span>
        </button>
      </div>
    </div>
  );
}

export default InputArea;
