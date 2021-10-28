import { configureStore } from '@reduxjs/toolkit';

import itemsSlice from 'state/slices/itemsSlice';
import companiesSlice from 'state/slices/companiesSlice';

const store = configureStore({
  reducer: {
    items: itemsSlice,
    companies: companiesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
