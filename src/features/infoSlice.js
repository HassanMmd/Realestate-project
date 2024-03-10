import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:[]
}
export const infoSlice = createSlice({
    name: "Info",
    initialState,
    reducers: {
        addInfo(state, actions) {
            state.info = actions.payload;
        }
    }
}
)

export const { addInfo } = infoSlice.actions;

export default infoSlice.reducer;