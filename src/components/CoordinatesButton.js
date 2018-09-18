import React from 'react';
import ReactDOM from 'react-dom';

// Code CoordinatesButton Component Here

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button
      onClick={this.handleClick}
      >
      Coordinates Button
      </button>

    )
  }
}
