"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Package imports
const express_1 = __importDefault(require("express"));
// Module imports
const UserController_1 = __importDefault(require("../../controllers/user/UserController"));
const router = express_1.default.Router();
// Routes
router.get('/user/', UserController_1.default.getAllUsers);
router.get('/user/get-user', UserController_1.default.getUser);
router.post('/user/create-user', UserController_1.default.createUser);
router.patch('/user/update-user', UserController_1.default.updateUser);
router.delete('/user/delete-user', UserController_1.default.deleteUser);
exports.default = router;
