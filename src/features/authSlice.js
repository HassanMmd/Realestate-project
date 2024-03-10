import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false
}
export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        checkAuth(state, actions) {
            state.auth = actions.payload;
        }
    }
})

export const { checkAuth } = authSlice.actions;

export default authSlice.reducer;