import React from "react";
import ToDoItem from "./ToDoItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
        <ToDoItem />
      </div>
    );
  }
}

export default App;
