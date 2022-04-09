import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: JSON.parse(localStorage.getItem("user")) || {},
    },
    reducers: {
        setUserInStore: (state, action) => {
            state.value = action.payload;
        },

        removeUserInStore: (state) => {
            state.value = {};
        },
    },
});

export const { setUserInStore, removeUserInStore } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
