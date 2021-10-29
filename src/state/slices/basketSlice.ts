import { createSlice, current } from '@reduxjs/toolkit';

import { ProductProps } from 'common/interfaces';

export interface BasketItemProps extends ProductProps {
  count: number;
}

interface StateProps {
  products: Array<BasketItemProps>;
}

const state: StateProps = {
  products: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: state,
  reducers: {
    increaseProduct: (state, action) => {
      const { slug, productName, price } = action.payload;

      if (state.products.some((product) => product.slug === slug)) {
        const index = state.products.findIndex((product) => product.slug === slug);
        state.products[index].count += 1;
      } else {
        state.products.push({
          productName,
          price,
          slug,
          count: 1,
        });
      }
    },
    decreaseProduct: (state, action) => {
      const slug = action.payload;
      const index = current(state).products.findIndex((product) => product.slug === slug);
      const { count } = current(state).products[index];

      if (count === 1) {
        state.products.splice(index, 1);
      } else {
        state.products[index].count -= 1;
      }
    },
  },
});

export const { actions } = basketSlice;
export const { increaseProduct, decreaseProduct } = actions;

export default basketSlice.reducer;
