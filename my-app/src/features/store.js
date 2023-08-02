import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reduser: {
        categories: 'cat',
    },
    devTools: true,
})