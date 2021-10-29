import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BasketListItem from 'components/basket-list-item/BasketListItem';

import { increaseProduct, decreaseProduct } from 'state/slices/basketSlice';

const mapStateToProps = (state) => ({
  products: state.basket.products,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increaseProduct,
      decreaseProduct,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BasketListItem);
