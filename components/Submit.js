var React = require("react");
var ReactDOM = require("react-dom");
class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", displayText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ displayText: this.state.inputText });
    event.preventDefault();
  }
  render() {
    return (
      <div className="widget">
        <p>Type something in the box and hit enter</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>{this.state.displayText}</h3>
      </div>
    );
  }
}

module.exports = Submit;
