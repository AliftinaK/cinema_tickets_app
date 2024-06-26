import { configureStore } from '@reduxjs/toolkit';
import { orderReducer, moviesReducer } from '../slices'; 
import { rtkApi } from '../api';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    order: orderReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
