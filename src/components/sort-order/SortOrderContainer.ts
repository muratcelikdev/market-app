import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SortOrder from 'components/sort-order/SortOrder';

import { setSorting } from 'state/slices/filterSlice';

const mapStateToProps = (state) => ({
  sorting: state.filter.sorting,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSorting,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SortOrder);
