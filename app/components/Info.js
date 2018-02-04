import React, { Component } from 'react'

class Info extends Component {
  render() {
    const { code, date, title, assocProducts } = this.props;
    return (
        <div className='info'>
          <span className='code'>{ `Код: ${ parseInt(code) }` }</span>
          <span className='code date'>{ `Обновлено: ${ date }` }</span><br/>
          <title className='title'>{ title }</title><br/>
          <span className='assocProducts'>
            { `Могут понадобиться: ${ assocProducts }` }
          </span>
        </div>
    )
  }
}

export default Info