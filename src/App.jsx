import './App.css'
import moment from 'moment-timezone';
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react'
import Input from './components/Input/Input'
import Display from './components/Display/Display'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocks: [],
      city: '',
      timeZone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { city, timeZone } = this.state;
    if (!city || !timeZone) return;

    const greenwichTime = moment().tz("Europe/London");
    const time = greenwichTime.add(timeZone, 'hours');

    const clock = {
      id: uuidv4(),
      city,
      time,
    }

    this.setState({
      ...this.state,
      clocks: [...this.state.clocks, clock],
      city: '',
      timeZone: 0,
    })
  }

  handleClose(e) {
    this.setState({
      ...this.state,
      clocks: this.state.clocks.filter(c => c.id !== e.target.id),
    })
  }

  render() {
    return (
      <div className='common-container'>
        <Input city={this.state.city} timeZone={this.state.timeZone} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display clocks={this.state.clocks} onClick={this.handleClose} />
      </div>
    )
  }
}
