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

const user = createSlice({
    name: 'user',
    initialState: { value: {name: "", email: "", profile_img: ""}},
    reducers: {
        changeUser(state, action) {
            state.value = action.payload
        }
    }
})

export const { changeUser } = user.actions;

export default configureStore({
    reducer: {
        login: login.reducer,
        user: user.reducer,
    }
})