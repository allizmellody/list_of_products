import React, { Component } from 'react'
import hint from '../utils/icons/Tag.png'
import bucket from '../utils/icons/Empty-cart.png'
import Input from './Input'

class Bucket extends Component {

  correction = unitFull => {
    if (unitFull === 'упаковка' || unitFull === 'штука') {
      return unitFull + 'ми'
    } else if (unitFull === 'метр погонный') {
      return 'метрами'
    }
  };

  render() {
    const { unit, unitFull, unitRatioAlt, unitAlt, id } = this.props;
    const fixUnit = unitRatioAlt.toFixed(2);
    return (
        <div className='bucket'>
          <div className='hint'>
            <img className='icon' src={ hint }/>
            <span className='hint_text'>
              { `Продается ${ this.correction(unitFull) }: ` }<br/>
              { `1 ${ unit } = ${ fixUnit } ${ unitAlt }` }
            </span>
          </div>
          <Input/>
          <button className='button'>
            <img className='icon' src={ bucket }/>
            <span id={ id } className='button_text'>{ 'в корзину' }</span>
          </button>
        </div>
    )
  }
}

export default Bucket