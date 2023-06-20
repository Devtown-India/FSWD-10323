
const List = () => {
    const todos = ['todo 1', 'todo 2', 'todo 3']
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