//class/ function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Quang Anh",
    address: "Ha Noi",
    age: 20,
  };
  handleClick = (event) => {
    this.setState({
      name: "Bui Anh",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}
export default MyComponent;
