import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from "./categories/categoriesSlise";
import productsSlice from "./products/productsSlise";
import {apiSlice} from "./api/apiSlice";
import userSlice from "./user/userSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: productsSlice,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})