console.log(React);
console.log(ReactDOM);

const reactElement = React.createElement(
  "div",
  {},
  React.createElement('h1', {}, "Hello World!"),
  React.createElement(
    "ul",
    {},
    React.createElement("li", {}, "One"),
    React.createElement("li", {}, "Two"),
    React.createElement("li", {}, "Three")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);
