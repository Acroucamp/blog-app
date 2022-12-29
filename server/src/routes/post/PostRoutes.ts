// Package imports
import express from 'express'

// Module imports
import PostController from '../../controllers/post/PostController'

const router = express.Router()

// Routes
router.get('/post/', PostController.getAllPosts)
router.get('/post/get-post/:id', PostController.getPost)
router.post('/post/create-post', PostController.createPost)
router.patch('/post/update-post/:id', PostController.updatePost)
router.delete('/post/delete-post/:id', PostController.deletePost)

export default router