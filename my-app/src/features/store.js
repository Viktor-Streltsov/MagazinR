import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from "./categories/categoriesSlise";


export const store = configureStore({
    reducer: {
        categories: categoriesSlise,
    },
    devTools: true,
})