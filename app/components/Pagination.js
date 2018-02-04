import React, { Component } from 'react'
import range from 'lodash.range'

const defaultProps = {
  initialPage: 1
};

class Pagination extends Component {
  state = {
    pager: {}
  };

  componentWillMount() {
    // set page if items array isn't empty
    const { count, initialPage } = this.props;
    if (count) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    const { count, initialPage } = this.props;
    if (count !== prevProps.count) {
      this.setPage(initialPage);
    }
  }

  setPage = page => {
    const { count, onChange } = this.props;
    let { pager } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }
    // get new pager object for specified page
    pager = this.getPager(count, page);

    onChange(pager.currentPage);
    // update state
    this.setState({ pager: pager });
  };

  getPager = (totalItems, currentPage) => {
    const { pageSize } = this.props;
    // default to first page
    currentPage = currentPage || 1;
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    const pages = range(1, totalPages + 1);
    return {
      totalPages,
      currentPage,
      pages
    };
  };

  render() {
    const pager = this.state.pager;
    const currentPage = pager.currentPage;

    if (!pager.pages || pager.pages.length <= 1) {
      return null
    }
    return (
        <ul className='container pagination'>
          <li className={ `pager ${currentPage === 1 ? 'disabled' : '' }` }>
            <a onClick={ () => this.setPage(currentPage - 1) }>{ 'Назад' }</a>
          </li>
          { pager.pages.map((page, index) =>
              <li key={ index }
                  className={ `pager ${ currentPage === page ? 'active'
                      : '' }` }
                  onClick={ () => this.setPage(page) }>{ page }
              </li>) }
          <li className={ `pager ${currentPage === pager.totalPages ? 'disabled'
              : '' }` }>
            <a onClick={ () => this.setPage(currentPage + 1) }>{ 'Вперед' }</a>
          </li>
        </ul>
    );
  }
}

Pagination.defaultProps = defaultProps;
export default Pagination;