"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts = [
    {
        'id': 1,
        'title': 'my blog',
        'content': 'this is my first blog',
        'datePublished': '2 January 2023',
        'published': true
    },
    {
        'id': 2,
        'title': 'my blog 2',
        'content': 'this is my second blog',
        'datePublished': '7 January 2023',
        'published': true
    },
    {
        'id': 3,
        'title': 'my blog 3',
        'content': 'this is my third blog',
        'datePublished': '12 January 2023',
        'published': true
    },
    {
        'id': 4,
        'title': 'my blog 4',
        'content': 'this is my fourth blog',
        'datePublished': '19 January 2023',
        'published': true
    },
    {
        'id': 5,
        'title': 'my blog 5',
        'content': 'this is my fifth blog',
        'datePublished': '28 January 2023',
        'published': true
    }
];
// Get all posts endpoint
const getAllPosts = (req, res) => {
    res.status(200).json(posts);
};
// Get one post endpoint
const getPost = (req, res) => {
    const post = posts[req.params.id];
    res.status(200).json(post);
};
// Create a post endpoint
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Create Post');
});
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
