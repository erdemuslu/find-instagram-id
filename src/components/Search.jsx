import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  state = {
    data: null,
    error: null,
  }

  // componentDidMount() {
  //   axios.get('https://www.instagram.com/aysencirak/?__a=1')
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error.message));
  // }

  render() {
    return (
      <div role="main">
        Search component
      </div>
    );
  }
}

export default Search;
