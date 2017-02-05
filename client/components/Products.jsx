import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  favs: PropTypes.array,
  cart: PropTypes.array,
  products: PropTypes.array,
  user: PropTypes.object,
  addToCart: PropTypes.func,//you can mark as .isRequired
  addToFav: PropTypes.func
};

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: () => dispatch({type: 'UPDATE_FILTER'})
  };
}

//remove default key word makes products the named export
export class Products extends Component {
  render() {
    const { addToCart, addToFav, products } = this.props;
    return (
      <div className='products'>
        <div className='products-search'>
          <input
            onChange={ (e) => this.props.updateFilter(e.target.value) }
            value={ this.props.filter }
            className='products-search_input'
          />
        </div>
        <ul className='products-lists'>
          { products.map((product) => (
            <li
              className='products-item'
              key={ product.id }
              >
              <img
                className='products-item-stock-photo'
                src={ `/images/products/${product.image}` }
              />
              <div className='products-item-name'>
                { product.name }
              </div>
              <div className='products-item-descriptions'>
                { product.description }
              </div>
              <div className='products-item-footer'>
                <div className='products-item-cart'>
                  <button
                    onClick={ () => addToCart(product.id) }
                    >
                    <img
                      src={
                        `/images/AddToCart${product.isInCart ? 'Selected' : 'Unselected' }.png`
                      }
                    />
                  </button>
                </div>
                <div className='products-item-favorite'>
                  <button onClick={ () => addToFav(product.id) }>
                    <img
                      src={ `/images/HeartItem${product.isFav ? 'Selected' : 'Unselected' }.png`}
                    />
                  </button>
                </div>
              </div>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

//this looks funky, we're passing in the second function returned with Products, wild;
const ConnectedProducts = connect(mapStateToProps, mapDispatchToProps)(Products);
export default ConnectedProducts;

Products.displayName = 'Products';
Products.propTypes = propTypes;
