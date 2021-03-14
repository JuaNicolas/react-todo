import Form from "./components/form/Form";
import List from "./components/list/List";

import { useState } from "react";

function App() {
  const [listValue, setListValue] = useState([]);

  const handleAddTodo = (newTodo) =>
    setListValue((v) => [newTodo, ...v].sort((a, b) => a.key - b.key));

  return (
    <div>
      <Form handleAdd={handleAddTodo}></Form>
      {listValue.length ? <List value={listValue}></List> : <p>No hay valor</p>}
    </div>
  );
}

export default App;
