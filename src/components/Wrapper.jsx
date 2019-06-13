import React from 'react';

// load components
import Search from './Search';

// load assets
import Logo from '../assets/logo.svg';

function Wrapper() {
  return (
    <div className="box wrapper">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <Search />
    </div>
  );
}

export default Wrapper;
