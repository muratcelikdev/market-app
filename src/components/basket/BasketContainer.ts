import { connect } from 'react-redux';

import Basket from 'components/basket/Basket';

const mapStateToProps = (state) => ({
  totalAmount: state.basket.totalAmount,
});

export default connect(mapStateToProps)(Basket);
