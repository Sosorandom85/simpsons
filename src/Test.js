// Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
  state = {
      on: false
    };
  
  handleClick = () => {
    this.setState({
       on: !this.state.on });
    console.log('Button clicked');
  };
  render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button
          onClick={() => alert('Button clicked')}
          className={light}
        >
          {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;
