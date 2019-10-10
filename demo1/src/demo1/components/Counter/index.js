import React, {Component} from 'react';
import './index.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 1
     };
  }
  render() {
    return (
      <div className="my-list">
        {true ? 'hello' : 'Jeffery'}
        <span>{this.state.counter}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
  add = () => {
    this.setState({
      counter: ++this.state.counter
    })
  }
}

export default Counter;