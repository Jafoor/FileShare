import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./action";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const initialState = {
    status: STATUSES.IDLE,
    data: [],
};

export const GetPostsSlice = createSlice({
    name: "getposts",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.ERROR;
            });
    }
});

export default GetPostsSlice.reducer;