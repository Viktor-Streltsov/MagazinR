import axios from 'axios';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from '../../utils/constanstans';

export const createUser = createAsyncThunk(
    'categories/getCategories', async(_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`);
            return res.data;
        }catch(err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: [],
        cart: [],
        isLoading: false,
    },
    reducers: {
        addItemToCart: (state, {payload}) => {
            let newCart = [...state.cart];

            const found = state.cart.find(({id}) => id === payload.id);

            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id
                        ? {...item, quantity: payload.quantity || item.quantity + 1} : item;
                });
            } else newCart.push({...payload, quantity: 1});

            state.cart = newCart;
        },
    },
    extraReducers: (builder) => {

        // // TODO При ожидании появляется isLoading
        //
        // builder.addCase(getCategories.pending, (state) => {
        //     state.isLoading = true;
        // });
        //
        // // TODO После вывод данных
        //
        // builder.addCase(getCategories.fulfilled, (state, { payload }) => {
        //     state.list = payload;
        //     state.isLoading = false;
        // });
        //
        // // TODO Вывод ошибок (если они есть)
        //
        // builder.addCase(getCategories.rejected, (state) => {
        //     state.isLoading = false;
        // });
    },
});


export const { addItemToCart } = userSlice.actions;
export default userSlice.reducer;