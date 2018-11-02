import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to December 25, 2018</div>
        <div>
          <div className="App-clock-days">14 days</div>
          <div className="App-clock-hours">14 hours</div>
          <div className="App-clock-minutes">14 minutes</div>
          <div className="App-clock-seconds">14 seconds</div>          
        </div>
        <div>
          <input type="text" name="inpDate" placeholder="New Date"/>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
