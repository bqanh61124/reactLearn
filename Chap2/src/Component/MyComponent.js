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
    console.log(event.pageX);
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
