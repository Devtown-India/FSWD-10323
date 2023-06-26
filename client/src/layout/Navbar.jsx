const Navbar = ({ changeView }) => {
  return (
    <ul className="flex justify-center">
      <li
        onClick={() => changeView("home")}
        className="text-indigo-500 hover:cursor-pointer underline mx-4"
      >
        Home
      </li>
      <li
        onClick={() => changeView("posts")}
        className="text-indigo-500 hover:cursor-pointer underline mx-4"
      >
        Posts
      </li>
      <li
        onClick={() => changeView("timer")}
        className="text-indigo-500 hover:cursor-pointer underline mx-4"
      >
        Timer
      </li>
      <li
        onClick={() => changeView("clicks")}
        className="text-indigo-500 hover:cursor-pointer underline mx-4"
      >
        Clicks
      </li>
    </ul>
  );
};

export default Navbar;
