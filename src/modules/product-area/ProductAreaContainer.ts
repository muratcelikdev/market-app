import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductArea from 'modules/product-area/ProductArea';

import { setItemType } from 'state/slices/filterSlice';

const mapStateToProps = (state) => {
  const sliceItemListIntoChunks = () => {
    const list = [...state.items.itemList];

    const chunkArr: any[] = [];

    for (let i = 0; i < list.length; i += 16) {
      const chunk = list.slice(i, i + 16);
      chunkArr.push(chunk);
    }

    return chunkArr;
  };

  return {
    pages: sliceItemListIntoChunks(),
    itemTypes: state.items.itemTypes,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setItemType,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductArea);
