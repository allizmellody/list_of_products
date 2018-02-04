import React, { Component } from 'react'

class Input extends Component {
  state = {
    count: 1
  };

  onCountChange = (event) => {
    this.setState({ count: event.target.value })
  };

  increment = () => {
    let value = this.state.count;
    value++;
    this.setState({ count: value })
  };

  decrement = () => {
    let value = this.state.count;
    (value > 1) ? value-- : 1;
    this.setState({ count: value })
  };

  render() {
    const { count } = this.state;
    return (
        <div className='input'>
          <input type='number'
                 className='number'
                 value={ count }
                 onChange={ this.onCountChange }/>
          <div className='arrow arrow_up'
               onClick={ this.increment }>{ '˄' }
          </div>
          <div className='arrow arrow_down'
               onClick={ this.decrement }>{ '˅' }
          </div>
        </div>
    )
  }
}

export default Input