import React from "react";

function Input({ handleInput }) {
  return (
    <>
      <label htmlFor="input"></label>
      <input
        type="text"
        placeholder="Create new todo"
        onChange={(e) => handleInput(e.target.value)}
      />
    </>
  );
}

export default Input;
