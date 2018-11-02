import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadlineHandler(){
    const deadline = document.getElementById('inpDate').value;
    this.setState({ deadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <div>
          <input type="text" name="inpDate" id="inpDate" placeholder="New Date"/>
          <button onClick={() => this.changeDeadlineHandler()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
