const root = ReactDOM.createRoot(document.getElementById("root"));

const ele = React.createElement(
  "div",
  { className: "shopping-list" },
  React.createElement(
    "h1",
    {
      onClick: () => {
        console.log("aaho");
      },
    },
    "heading is this"
  ),
  React.createElement(
    "ul",
    {
      count: 1,
    },
    `count is :`
  ),
  React.createElement(
    "li",
    {},
    `This is a list element 1`
  ),
  React.createElement(
    "li",
    {},
    `This is a list element 2`
  ),
  React.createElement(
    "li",
    {},
    `This is a list element 3`
  ),
);

// function Greeting({ name }) {
//   return React.createElement(
//     "h1",
//     { className: "greeting" },
//     "Hello ",
//     React.createElement("i", null, name),
//     ". Welcome!"
//   );
// }

// const ele1 = React.createElement(Greeting, { name: "Taylor" });

root.render(ele);
