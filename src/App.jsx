import Form from "./components/form/Form";
import List from "./components/list/List";

import { useState } from "react";

function App() {
  const [listValue, setListValue] = useState([]);

  const handleAddTodo = (newTodo) =>
    setListValue((v) => [newTodo, ...v].sort((a, b) => a.key - b.key));

  const deleteTodo = (todoKey) =>
    setListValue((v) =>
      v.filter((t) => t.key !== todoKey).sort((a, b) => a.key - b.key)
    );

  return (
    <div>
      <Form handleAdd={handleAddTodo}></Form>
      {listValue.length ? (
        <List value={listValue} deleteTodo={deleteTodo}></List>
      ) : (
        <p>No hay valor</p>
      )}
    </div>
  );
}

export default App;
