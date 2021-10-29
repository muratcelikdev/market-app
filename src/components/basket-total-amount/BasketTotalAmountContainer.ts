import { connect } from 'react-redux';

import BasketTotalAmount from 'components/basket-total-amount/BasketTotalAmount';

const mapStateToProps = (state) => ({
  totalAmount: state.basket.totalAmount,
});

export default connect(mapStateToProps)(BasketTotalAmount);
