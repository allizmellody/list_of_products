import React, { Component } from 'react'
import { newUrl } from '../utils/utils'
import Info from './Info'
import Price from './Price'
import Bucket from './Bucket'

class ProductInfo extends Component {
  render() {
    const { product, onMeterClick, onPackClick, goldAlt, retailAlt } = this.props;
    return (
        <div>
          <div className='img_container'>
            <img className='img'
                 src={ newUrl(product.primaryImageUrl) }/>
          </div>
          <Info code={ product.code }
                date={ product.modified }
                title={ product.title }
                assocProducts={ product.assocProducts }/>
          <div className='right'>
            <Price meters={ product.viewState.isMeters }
                   packs={ product.viewState.isPacks }
                   onMeterClick={ onMeterClick }
                   onPackClick={ onPackClick }
                   goldAlt={ goldAlt }
                   retailAlt={ retailAlt }/>
            <Bucket unit={ product.unit }
                    unitFull={ product.unitFull }
                    unitRatioAlt={ product.unitRatioAlt }
                    unitAlt={ product.unitAlt }
                    id={ product.id }/>
          </div>
        </div>
    )
  }
}

export default ProductInfo