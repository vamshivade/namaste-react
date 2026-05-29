const parent = React.createElement(
  "h1",
  { id: "heading-id", key: "heading-key" },
  "Hello React",
);

/*
const parent = React.createElement("div", { id: "parent", key: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { id: "h1", key: "h1" }, "Heading 1"),
    React.createElement("h2", { id: "h2", key: "h2" }, "Heading 2"),
  ]),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    React.createElement("h1", { id: "h1", key: "h1" }, "Heading 1"),
  ),
]);
*/

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
