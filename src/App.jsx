import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'Erdem',
    age: 29,
  }

  render() {
    const { name, age } = this.state;

    return (
      <div role="main">
        { name }
        { age }
      </div>
    );
  }
}

export default App;
