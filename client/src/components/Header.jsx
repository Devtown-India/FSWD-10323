import {useState} from 'react'

const Header = () => {

  const [todo,setTodo] = useState('')

  const handleSubmit = (e)=>{
    console.log(todo)
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  
  return (
    <header>
      <h1>Todo list</h1>
      <input onChange={handleChange} type="text" />
      <button onClick={handleSubmit} >Add</button>
    </header>
  );
};
export default Header;
