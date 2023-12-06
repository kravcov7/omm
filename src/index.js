const React = require("react");
const ReactDOM = require("react-dom/client");
const ReactApp = require("./App.js").App; // ошибка была в маленькой букве

// const el = document.getElementById("root");
// ReactDOM.render(<ReactApp />, el);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>
);
