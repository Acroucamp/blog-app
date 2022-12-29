// Package imports
import { Request, Response } from 'express'

const getAllUsers = (req: Request, res: Response) => {
    res.send('users')
}

// Get user endpoint
const getUser = (req: Request, res: Response) => {
    res.send('user')
}

// Create user endpoint
const createUser = async(req: Request, res: Response) => {
    res.send('Create user')
}

// Update user endpoint
const updateUser = (req: Request, res: Response) => {
    res.send('Update user')
}

// Delete user endpoint
const deleteUser = (req: Request, res: Response) => {
    res.send('Delete user')
}

// Routes export
export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}