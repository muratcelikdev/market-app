import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SortOrder from 'components/sort-order/SortOrder';

import { setSorting } from 'state/slices/filterSlice';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSorting,
    },
    dispatch
  );

export default connect(undefined, mapDispatchToProps)(SortOrder);
