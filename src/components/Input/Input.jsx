import './Input.css'
import React, { Component } from 'react'

export default class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form onSubmit={this.props.onSubmit} className='input-wrapper'>
            <div className='input-container'>
                <label htmlFor='city'>Название</label>
                <input onChange={this.props.onChange} id='city' type='text' name='city' value={this.props.city} />
            </div>
            <div className='input-container'>
                <label htmlFor="timeZone">Временная зона</label>
                <input onChange={this.props.onChange} type='number' name='timeZone' value={this.props.timeZone} min='-12' max='14' />
            </div>
            <button className='button' type='submit'>Добавить</button>
        </form>
    )
  }
}
