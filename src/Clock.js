import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000); // Milliseconds
    }

    getTimeUntil(deadline){
        const timeRem = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((timeRem/1000) % 60);
        const minutes = Math.floor((timeRem/1000/60) % 60);
        const hours = Math.floor((timeRem/(1000*60*60)) % 24);
        const days = Math.floor(timeRem/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds});
    }

    render(){
        return (
            <div>
              <div className="Clock-days">{this.state.days} days</div>
              <div className="Clock-hours">{this.state.hours} hours</div>
              <div className="Clock-minutes">{this.state.minutes} minutes</div>
              <div className="Clock-seconds">{this.state.seconds} seconds</div>          
            </div>
        );
    }
}

export default Clock;