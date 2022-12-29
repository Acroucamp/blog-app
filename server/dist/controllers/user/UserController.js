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
const getAllUsers = (req, res) => {
    res.send('users');
};
// Get user endpoint
const getUser = (req, res) => {
    res.send('user');
};
// Create user endpoint
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Create user');
});
// Update user endpoint
const updateUser = (req, res) => {
    res.send('Update user');
};
// Delete user endpoint
const deleteUser = (req, res) => {
    res.send('Delete user');
};
// Routes export
exports.default = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
