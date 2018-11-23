var React = require("react");
var ReactDOM = require("react-dom");

const list = ["some", "real", "cool", "words", "to", "loop"];

class Loop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayItem: list[0] };
  }

  getNextItem(array, currentElement) {
    var currentIndex = array.indexOf(currentElement);
    if (currentIndex === array.length - 1) {
      return currentElement;
    }
    var nextItem = array[currentIndex + 1];
    return nextItem;
  }

  flip() {
    var nextItem = this.getNextItem(list, this.state.displayItem);
    if (this.state.displayItem === nextItem) {
      var nextItem = list[0];
    }
    this.setState({
      displayItem: nextItem
    });
  }

  componentDidMount() {
    this.flipper = setInterval(() => this.flip(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.flipper);
  }

  render() {
    return <h1>The loop {this.state.displayItem} </h1>;
  }
}

module.exports = Loop;
