function ListItem({ value, date, deleteTodo }) {
  return (
    <li>
      {value} - {new Date(date).toLocaleString("en-GB", { timeZone: "UTC" })}
      <button onClick={() => deleteTodo(date)}>borrar</button>
    </li>
  );
}

export default ListItem;
