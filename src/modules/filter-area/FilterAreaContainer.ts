import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterArea from 'modules/filter-area/FilterArea';
import { setBrands, setTags } from 'state/slices/filterSlice';

const mapStateToProps = (state) => ({
  items: state.items.itemList,
  tags: state.items.tagList,
  brands: state.items.brandList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setBrands,
      setTags,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FilterArea);
