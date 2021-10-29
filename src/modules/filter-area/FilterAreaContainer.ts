import { connect } from 'react-redux';

import FilterArea from 'modules/filter-area/FilterArea';

const mapStateToProps = (state) => ({
  items: state.items.itemList,
  tags: state.items.tagList,
  brands: state.items.brandList,
});

export default connect(mapStateToProps)(FilterArea);
