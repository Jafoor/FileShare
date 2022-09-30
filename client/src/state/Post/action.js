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

            const response =  await axios.post(url, post);
            return response.data;
            // return await publicPost("", body);
        }catch(err){
            return rejectWithValue(err);
        }
    }
);

export const getPosts = createAsyncThunk(
    "Posts/get",
    async() => {
        try{
            const url = 'http://localhost:5000/posts';
            const response = await axios.get(url);
            return response.data;
        }catch(err){
            return err;
        }
        
    }
)