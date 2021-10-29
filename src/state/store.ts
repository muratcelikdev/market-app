import { configureStore } from '@reduxjs/toolkit';

import itemsSlice from 'state/slices/itemsSlice';
import companiesSlice from 'state/slices/companiesSlice';
import filterSlice from 'state/slices/filterSlice';
import basketSlice from 'state/slices/basketSlice';

const store = configureStore({
  reducer: {
    items: itemsSlice,
    companies: companiesSlice,
    filter: filterSlice,
    basket: basketSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
