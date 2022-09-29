import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { publicPost } from "../../utilities";

export const createPost = createAsyncThunk(
    "Post/create",
    async( post, { rejectWithValue } ) => {
        try{
            const url = 'http://localhost:5000/posts';
            const body = {
                post
            };
            console.log(post);

            return await axios.post(url, post);
            // return await publicPost("", body);
        }catch(err){
            return rejectWithValue(err);
        }
    }
)