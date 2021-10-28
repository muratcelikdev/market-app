import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCompanies as fetchCompanies } from 'api/http/commonApi';

export const getCompanies = createAsyncThunk('companies/getCompanies', async () => {
  const response = await fetchCompanies();
  return response.data;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState: { companyList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.companyList = action.payload;
    });
  },
});

export default companiesSlice.reducer;
