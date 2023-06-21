
const List = ({todos}) => {
    return (
      <section>
        <ul>
          {
            todos.map((todo, index) => {
              return <li key={index}>{todo}</li>
            })
          }
        </ul>
      </section>
    );
  };

  export default List;