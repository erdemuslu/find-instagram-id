import React from 'react';

// load store Wrapper
import Store from './store/Store';

// load components
import Wrapper from './components/Wrapper';
import Card from './components/Card';

function App() {
  return (
    <Store>
      <div className="app">
        <Wrapper />
        <Card />
      </div>
    </Store>
  );
}

export default App;
