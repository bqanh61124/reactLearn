//class/ function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Quang Anh",
    address: "Ha Noi",
    age: 20,
  };
  handleClick(event) {
    console.log("My name is", this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}
export default MyComponent;
