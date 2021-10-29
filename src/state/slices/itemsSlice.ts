import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getItems as fetchItems } from 'api/http/commonApi';

export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await fetchItems();
  return response.data;
});

export interface ItemProps {
  tags: Array<string>;
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

interface StateProps {
  itemList: Array<ItemProps>;
  tagList: Array<string>;
  itemTypes: Array<string>;
  brandList: Array<string>;
}

const state: StateProps = {
  itemList: [],
  tagList: [],
  itemTypes: [],
  brandList: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: state,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      const tagList = Array.from(
        new Set([].concat.apply([], Array.from(action.payload.map((item) => item.tags))))
      ) as Array<string>;

      const itemTypes = Array.from(
        new Set(action.payload.map((item) => item.itemType))
      ) as Array<string>;

      const brandList = Array.from(
        new Set(action.payload.map((item) => item.manufacturer))
      ) as Array<string>;

      state.itemList = action.payload;
      state.tagList = tagList;
      state.itemTypes = itemTypes;
      state.brandList = brandList;
    });
  },
});

export default itemsSlice.reducer;
