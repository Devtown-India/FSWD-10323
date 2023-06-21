import '../css/List.css'

const List = ({todos}) => {
    return (
      <section>
        <ul className="todos" >
          {/* {
            todos.map((todo, index) => {
              return <li style={{
                color:"red",
                backgroundColor:"yellow",
                margin:'10px auto',
                width:'50%',
              }} key={index}>{todo}</li>
            })
          } */}
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