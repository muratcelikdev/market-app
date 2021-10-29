import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from 'components/product/Product';

import { increaseProduct } from 'state/slices/basketSlice';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increaseProduct,
    },
    dispatch
  );

export default connect(undefined, mapDispatchToProps)(Product);
