import React from 'react';


function Display(props) {
    return (
      <div>
        <div>Number of things we've learned about react</div>
        {props.count}
      </div>
    );
  }
  
  export default Display;