import { configureStore } from '@reduxjs/toolkit';
import { fakeApi } from './fakeApi/fakeApi.api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [fakeApi.reducerPath]: fakeApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fakeApi.middleware),
});


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
