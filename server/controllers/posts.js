import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const post = await PostMessage.find({_id:id});
        res.status(200).json(post);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, message, selectedFile, creator, tags } = req.body;
        console.log(req);
        console.log(req.body);
        const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
        console.log(newPostMessage);
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch(error) {
        res.status(401).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    try{
        const {id} = req.params;
        const { title, message, selectedFile, creator, tags } = req.body;
        if(! mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

        const updatePost = { creator, title, message, tags, selectedFile, _id: id};
        await PostMessage.findByIdAndUpdate(id, updatePost, {new: true});
        
        res.json(updatePost);
    } catch(err){
        res.status(401).json({message: error.message});
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted Successfully!"})

}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


// export default router;
