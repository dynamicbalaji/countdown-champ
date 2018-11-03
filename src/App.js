import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
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
        <Form inline>
          <FormControl type="text" 
          name="inpDate" id="inpDate" 
          placeholder="New Date"
          className="App-deadline-input"/>
          <Button onClick={() => this.changeDeadlineHandler()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
