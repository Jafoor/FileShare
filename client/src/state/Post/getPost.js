import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "./action";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const initialState = {
    status: STATUSES.IDLE,
    data: null,
};

export const GetPostSlice = createSlice({
    name: "getpost",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.ERROR;
            });
    }
});

export default GetPostSlice.reducer;