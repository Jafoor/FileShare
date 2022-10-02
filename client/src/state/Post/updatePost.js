import { createSlice } from "@reduxjs/toolkit";
import { updatePost } from "./action";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const initialState = {
    status: STATUSES.IDLE,
    data: {},
};

export const updatePostSlice = createSlice({
    name: "newPost",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(updatePost.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.ERROR;
            });
    }
});

export default NewPostSlice.reducer;