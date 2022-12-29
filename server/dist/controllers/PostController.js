"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get all posts endpoint
const getAllPosts = (req, res) => {
    res.send('Posts');
};
// Get one post endpoint
const getPost = (req, res) => {
    res.send('Post');
};
// Create a post endpoint
const createPost = (req, res) => {
    res.send('Create Post');
};
// Update a post endpoint
const updatePost = (req, res) => {
    res.send('Update Post');
};
// Delete a post endpoint
const deletePost = (req, res) => {
    res.send('Delete Post');
};
// Routes export
exports.default = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};
