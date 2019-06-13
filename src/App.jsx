import React, { Component } from 'react';

// load components
import Search from './components/Search';

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
        <Search />
      </div>
    );
  }
}

export default App;
