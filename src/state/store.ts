import { configureStore } from '@reduxjs/toolkit';

import itemsSlice from 'state/slices/itemsSlice';
import companiesSlice from 'state/slices/companiesSlice';
import filterSlice from 'state/slices/filterSlice';

const store = configureStore({
  reducer: {
    items: itemsSlice,
    companies: companiesSlice,
    filter: filterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
