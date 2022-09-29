import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./action";

const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const initialState = {
    status: STATUSES.IDLE,
    data: {},
};

export const NewPostSlice = createSlice({
    name: "newPost",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.ERROR;
            });
    }
});

export default NewPostSlice.reducer;