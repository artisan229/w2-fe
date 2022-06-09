import { configureStore, createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        changeState(state) {
            return !state;
        }
    }
})

export const { changeState } = login.actions;

export default configureStore({
    reducer: {
        login: login.reducer
    }
})