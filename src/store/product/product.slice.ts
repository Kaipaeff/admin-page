import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductState } from '../../types/Interfaces';

const initialState: IProductState = [];

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
