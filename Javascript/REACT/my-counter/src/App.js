//Class Component

import React from "react";
import {Component} from "react";

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  //function
  incrementCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Add to Cart</button>
        </div>
    )}
}

export default Counter;








//Functional Component
// import React, {useState} from "react";

// function Counter(){
//   const [count, setCount] = useState(0);

//   //Initial variable, setCount stores the data which will be updated

//   return(
//     <div>
//       <h1>Counter:{count}</h1>
//       <button onClick={()=>setCount(count + 1)}>Increment</button>
//     </div>
//   )

// }

// export default Counter;


