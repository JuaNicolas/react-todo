import { useState } from "react";

function App() {
  const [formValue, setformValue] = useState({});
  const [listValue, setListValue] = useState([]);

  const handleAddTodo = (newTodo) =>
    setListValue((v) => [newTodo, ...v].sort((a, b) => a.key - b.key));

  const deleteTodo = (todoKey) =>
    setListValue((v) =>
      v.filter((t) => t.key !== todoKey).sort((a, b) => a.key - b.key)
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(formValue).length) return;
    e.target.reset();
    handleAddTodo(formValue);
    setformValue({});
  };

  const handleInput = (e) => {
    setformValue({ key: Date.now(), value: e });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input"></label>
        <input
          type="text"
          placeholder="Create new todo"
          onChange={(e) => handleInput(e.target.value)}
        />
        <button type="submit">Boton de ejemplo</button>
      </form>

      {listValue.length ? (
        <ol>
          {listValue.map(({ key, value }) => (
            <li key={key}>
              {value} -{" "}
              {new Date(key).toLocaleString("en-GB", { timeZone: "UTC" })}
              <button onClick={() => deleteTodo(key)}>borrar</button>
            </li>
          ))}
        </ol>
      ) : (
        <p>No hay valores para mostrar</p>
      )}
    </div>
  );
}

export default App;
