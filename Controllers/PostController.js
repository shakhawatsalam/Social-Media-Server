import e from "express";
import mongoose from "mongoose";
import PostModel from "../Models/postModal.js";


//Create new Post 
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)
    try {
        await newPost.save()
        res.status(200).json("Post Created")
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get a post 
export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update a Post 
export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(postId);
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("post Updated")
        } else {
            res.status(403).json("Action forbidden");
        }
    } catch (error) {
        res.status(500).json(error)
    }


}