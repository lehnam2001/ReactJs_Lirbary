import React from "react";
import "./Countdown.css"
class CountdownTimer extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 300 };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let divisorMinutes = secs % (60 * 60);
      let minutes = Math.floor(divisorMinutes / 60);
  
      let divisorSeconds = divisorMinutes % 60;
      let seconds = Math.ceil(divisorSeconds);
  
      let obj = {
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      // clear event mỗi khi component re-render
      clearInterval(this.timer);
    }
  
    startTimer() {
        this.timer = setInterval(this.countDown, 1000);
    }

    resetTimer = () => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState(this.state = {timer: {}, seconds : 300 });
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        clearInterval(this.timer);
    }
  
    countDown() {
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      if (seconds === 0) { 
          clearInterval(this.timer);
          alert('Hết giờ')
      }
    }
  
    render() {
      return(
        <div className="container-countdown">
            <div className="screen-countdown">
                <h1>{this.state.time.m}m  {this.state.time.s}s</h1>
            </div>
            <div className="control-countdown">
                <button className="btn-start" onClick={this.startTimer}>Start</button>
                <button className="btn-reset" onClick={this.resetTimer}>Reset</button>
            </div>
        </div>
      );
    }
  }

export default CountdownTimer;