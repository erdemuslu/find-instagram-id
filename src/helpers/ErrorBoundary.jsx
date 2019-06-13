import React, { Component } from 'react';
import { node } from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    console.log(error);
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
};

ErrorBoundary.propTypes = {
  children: node,
};

export default ErrorBoundary;
