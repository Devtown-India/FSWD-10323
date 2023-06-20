const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <header>
      <h1>Todo list</h1>
      <input type="text" />
      <button onClick={handleSubmit}>Add</button>
    </header>
  );
};
export default Header;
