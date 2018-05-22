import React, { Component } from 'react';
import '../css/buttons.css';

class Buttons extends Component {  
  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.save}>Save it</button>
        <button onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}

export default Buttons;
