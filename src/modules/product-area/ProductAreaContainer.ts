import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductArea from 'modules/product-area/ProductArea';

import { setItemType } from 'state/slices/filterSlice';

const mapStateToProps = (state) => {
  const sliceItemListIntoChunks = () => {
    const filterProducts = () => {
      const { sorting, brands, tags, itemType } = state.filter;
      const list = [...state.items.itemList];

      let filtered: any[] = [];

      filtered = list.filter(
        (item) =>
          (itemType && item.itemType === itemType) ||
          (brands.length > 0 && brands.includes(item.manufacturer)) ||
          (tags.length > 0 && item.tags.some((tag) => tags.includes(tag)))
      );

      filtered = filtered.length > 0 ? filtered : list;

      if (sorting === 'low') {
        filtered.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
      } else if (sorting === 'high') {
        filtered.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
      }
      if (sorting === 'new') {
        filtered.sort((firstProduct, secondProduct) => secondProduct.added - firstProduct.added);
      }
      if (sorting === 'old') {
        filtered.sort((firstProduct, secondProduct) => firstProduct.added - secondProduct.added);
      }

      return filtered;
    };

    const list = filterProducts();

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
