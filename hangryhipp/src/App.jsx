import React, { Component } from 'react';
import './App.css';
import Display from './display'; 
import IncrementButton from './IncrementButton';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleCountChange =()=>{
    const newCount = this.state.count +1;
    this.setState(
      {
        count: newCount,
      }
    );
  };

  render() {
      return ( 
        <div className="App">
          <Display count={this.state.count} />
          <IncrementButton onClick={this.handleCountChange}/>
        </div>
      );
  }
}
export default App;