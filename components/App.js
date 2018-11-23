var React = require("react");
var ReactDOM = require("react-dom");
var About = require("./About");
var Loop = require("./Loop");
var Submit = require("./Submit");
function App() {
  return (
    <div className="App">
      <About name="Cuz" />
      <Submit />
      <Loop />
    </div>
  );
}

module.exports = App;
