// Libraries
import React, { useState } from 'react';

function InputArea(props) {
  //state
  const [inputText, setInputText] = useState("");

  //helper function
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  //return
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
