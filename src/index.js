import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Box1 name="jack" age={18} />
    </div>
  );
}

class Box1 extends React.Component{
  constructor(props){
    super()
    this.state = {
      number: 0
    }
  }
  add(){
    this.setState({
      number: this.state.number + 1
    })
  }
  minus(){
    this.setState({
      number: this.state.number - 1
    })
  }
  render(){
    return(
      <div>
        <div>
          我是{this.props.name}，
          年龄{this.props.age}
        </div>
        <div className="parent">
          <span>{this.state.number}</span>
          <button onClick={this.add.bind(this)}>+</button>
          <button onClick={this.minus.bind(this)}>-</button> 
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
