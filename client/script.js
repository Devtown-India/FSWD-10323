console.log(React);
console.log(ReactDOM);

const Navbar = React.createElement(
  "nav",
  {},
  React.createElement(
    "ul",
    { className: "nav-links" },
    React.createElement(
      "li",
      {
        onClick: () => console.log("clicked"),
        className: "nav-link",
      },
      "Home"
    ),
    React.createElement("li", {}, "About"),
    React.createElement("li", {}, "Contact")
  )
);

const Content = ({ data }) => React.createElement("div", {}, data);

const Footer = React.createElement("div", {}, "footer");

const App = React.createElement(
  "div",
  {},
  Navbar,
  React.createElement(Content, { data: "lorem ipsum" }),
  Footer
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
