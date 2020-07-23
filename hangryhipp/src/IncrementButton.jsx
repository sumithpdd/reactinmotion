import React, { Component } from 'react'; 

class IncrementButton extends Component{

render() {
    return ( 
      <button onClick={this.props.onClick}>
          Learned another thing!
      </button>
    );
}
}
export default IncrementButton;