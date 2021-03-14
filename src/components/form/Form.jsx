import Button from "../button/Button";
import Input from "../input/Input";
import { useState } from "react";

function Form({ handleAdd }) {
  const [formValue, setformValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(formValue).length) return;
    e.target.reset();
    handleAdd(formValue);
    setformValue({});
  };

  const handleInput = (e) => {
    setformValue({ key: Date.now(), value: e });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input handleInput={handleInput}></Input>
      <Button></Button>
    </form>
  );
}

export default Form;
