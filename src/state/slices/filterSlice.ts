import { createSlice } from '@reduxjs/toolkit';

interface StateProps {
  sorting: 'low' | 'high' | 'new' | 'old' | null;
  brands: Array<string>;
  tags: Array<string>;
  itemType: string | null;
}

const state: StateProps = {
  sorting: null,
  brands: [],
  tags: [],
  itemType: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: state,
  reducers: {
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setItemType: (state, action) => {
      state.itemType = action.payload;
    },
  },
});

export const { actions } = filterSlice;
export const { setSorting, setItemType } = actions;

export default filterSlice.reducer;
