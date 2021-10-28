import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getItems as fetchItems } from 'api/http/commonApi';

export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await fetchItems();
  return response.data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: { itemList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.itemList = action.payload;
    });
  },
});

export default itemsSlice.reducer;
