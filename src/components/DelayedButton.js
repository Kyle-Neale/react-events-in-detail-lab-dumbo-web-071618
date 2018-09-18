import React from 'react';
import ReactDOM from 'react-dom';

// Code DelayedButton Component Here

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      return this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button
      onClick={this.handleClick}
      >
      Delayed
      </button>
    )
  }
}
