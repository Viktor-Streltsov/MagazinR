import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from "./categories/categoriesSlise";
import productsSlice from "./products/products";


export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
        products: productsSlice,
    },
    devTools: true,
})