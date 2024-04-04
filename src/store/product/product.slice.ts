import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductState, ProductType } from '../../types/Interfaces';

const initialState: IProductState = {
  product: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<ProductType[]>) {
      state.product = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
