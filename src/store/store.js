import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './apis/userApis';

const store = configureStore({
  reducer: {
    user : userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store