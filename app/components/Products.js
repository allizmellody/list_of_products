import React, { Component } from 'react'
import '../containers/index.css'
import products from '../products'
import Pagination from './Pagination'
import ProductInfo from './ProductInfo'

const PAGE_SIZE = 10;
const getViewState = (isMeters, isAlt, isPacks) => ({
  isMeters,
  isAlt,
  isPacks
});

const defaultViewState = getViewState(true, true, false);

const getProductsByPage = pageNumber => {
  const from = PAGE_SIZE * (pageNumber - 1);
  return products.slice(from, from + PAGE_SIZE);
};

const wrapProducts = products =>
    products.map(product => ({ viewState: defaultViewState, ...product }));

class Products extends Component {

  state = {
    products: wrapProducts(getProductsByPage(1))
  };

  handleMeterClick = index => {
    const { products } = this.state;
    products[index].viewState = getViewState(true, true, false);
    this.setState({ products })
  };

  handlePackClick = index => {
    const { products } = this.state;
    products[index].viewState = getViewState(false, false, true);
    this.setState({ products });
  };

  getAltPrice = product => {
    const { priceGoldAlt, priceGold } = product;
    return (product.viewState.isAlt ? priceGold : priceGoldAlt).toFixed(2);
  };

  getRetailPrice = product => {
    const { priceRetailAlt, priceRetail } = product;
    return (product.viewState.isAlt ? priceRetail : priceRetailAlt).toFixed(2);
  };

  onChangePage = pageNumber => {
    const products = getProductsByPage(pageNumber, PAGE_SIZE);
    this.setState({ products: wrapProducts(products) })
  };

  render() {
    return (
        <div>
          <ul className='container'>
            { this.state.products.map((product, index) =>
                <li key={ index } className='component'>
                  <ProductInfo product={ product }
                               index={ index }
                               onMeterClick={ this.handleMeterClick.bind(this, index) }
                               onPackClick={ this.handlePackClick.bind(this, index) }
                               goldAlt={ this.getAltPrice(product) }
                               retailAlt={ this.getRetailPrice(product) }/>
                </li>) }
          </ul>
          <Pagination count={ products.length }
                      pageSize={ PAGE_SIZE }
                      onChange={ this.onChangePage }/>
        </div>
    )
  }
}

export default Products