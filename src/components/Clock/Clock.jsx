import './Clock.css'
import { Component } from "react";

// interface IClockProps {
//   time: string,
//   timerId: string,
// }

// interface IClock {
//   timerId: string | number,
  
// }

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      time: props.time,
    };
  }

  componentDidMount() {
    
    this.timerId = setInterval(() => {
      this.setState({
        time: this.state.time.add(1, 'seconds'),
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div className='clock-name'>{this.state.city}</div>
        <button id={this.props.id} onClick={this.props.onClick} className='close' type='button'></button>
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${this.state.time.hour() * 30}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${this.state.time.minute() * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${this.state.time.second() * 6}deg)`
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
    );
  }
}
