import ListItem from "../list-item/ListItem";

function List({ value }) {
  return (
    <>
      <ol>
        {value.map(({ key, value }) => (
          <ListItem key={key} value={value}></ListItem>
        ))}
      </ol>
    </>
  );
}

export default List;
