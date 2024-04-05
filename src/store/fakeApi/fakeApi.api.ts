import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../../types/Interfaces';

export const fakeApi = createApi({
  reducerPath: 'fakeApi/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], string>({
      query: () => ({
        url: 'products',
      }),
    }),
  }),
});

export const { useGetProductsQuery } = fakeApi;
