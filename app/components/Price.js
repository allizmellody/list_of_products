import React, { Component } from 'react'

const RUB = '₽';

class Price extends Component {

  getActive = (meters, packs) => {
    return (meters || packs) ? 'active' : ''
  };

  render() {
    const { goldAlt, retailAlt, meters, packs, onMeterClick, onPackClick } = this.props;
    return (
        <div className='price'>
          <span className='bold'>{ 'По карте клуба' }</span>
          <span className='cost'>
            <span className='gold_cost'>
            { `${goldAlt} ${RUB}` }</span><br/>
            { `${retailAlt} ${RUB}` }</span><br/>
          <span className={ `unit ${this.getActive(meters)}` }
                onClick={ onMeterClick }>
            { 'За м. кв.' }</span>
          <span className={ `unit pack ${this.getActive(packs)}` }
                onClick={ onPackClick }>
            { 'За упак.' }</span>
        </div>
    )
  }
}

export default Price