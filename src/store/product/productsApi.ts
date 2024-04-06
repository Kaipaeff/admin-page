import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../../types/Interfaces';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://fakestoreapi.com/',
    baseUrl: 'http://localhost:3000',
  }),
  refetchOnFocus: true,

  endpoints: builder => ({
    getProducts: builder.query<ProductType[], string>({
      query: () => ({
        url: 'products',
      }),
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: 'Products' as const, id })), { type: 'Products', id: 'LIST' }]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    addProduct: builder.mutation<ProductType, Partial<ProductType>>({
      query: product => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;
