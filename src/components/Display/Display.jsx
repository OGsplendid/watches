import './Display.css'
import React, { Component } from 'react'
import Clock from '../Clock/Clock'

export default class Display extends Component {

  constructor(props) {
    super(props);
    this.props = props;

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div className='display-wrapper'>
        {this.props.clocks.map(clock => (
          <Clock onClick={this.handleClose} key={clock.city} city={clock.city} time={clock.time} id={clock.id} />
        ))}
      </div>
    )
  }
}
