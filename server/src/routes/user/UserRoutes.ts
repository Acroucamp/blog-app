// Package imports
import express from 'express'

// Module imports
import UserController from '../../controllers/user/UserController'

const router = express.Router()

// Routes
router.get('/user/', UserController.getAllUsers)
router.get('/user/get-user', UserController.getUser)
router.post('/user/create-user', UserController.createUser)
router.patch('/user/update-user', UserController.updateUser)
router.delete('/user/delete-user', UserController.deleteUser)

export default router