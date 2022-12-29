// Package imports
import { Request, Response } from 'express'

const posts: any = [
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
]

// Get all posts endpoint
const getAllPosts = (req: Request, res: Response) => {
    res.status(200).json(posts)
}

// Get one post endpoint
const getPost = (req: Request, res: Response) => {
    const post = posts[req.params.id]
    res.status(200).json(post)
}

// Create a post endpoint
const createPost = async(req: Request, res: Response) => {
    res.send('Create Post')
}

// Update a post endpoint
const updatePost = (req: Request, res: Response) => {
    res.send('Update Post')
}

// Delete a post endpoint
const deletePost = (req: Request, res: Response) => {
    res.send('Delete Post')
}

// Routes export
export default {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}