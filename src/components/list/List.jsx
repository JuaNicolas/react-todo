import ListItem from "../list-item/ListItem";

function List({ value, deleteTodo }) {
  return (
    <ol>
      {value.map(({ key, value }) => (
        <ListItem
          key={key}
          value={value}
          date={key}
          deleteTodo={deleteTodo}
        ></ListItem>
      ))}
    </ol>
  );
}

export default List;
