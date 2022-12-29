"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Package imports
const express_1 = __importDefault(require("express"));
// Module imports
const PostController_1 = __importDefault(require("../controllers/PostController"));
const router = express_1.default.Router();
// Routes
router.get('/post/', PostController_1.default.getAllPosts);
router.get('/post/get-post', PostController_1.default.getPost);
router.post('/post/create-post', PostController_1.default.createPost);
router.patch('/post/update-post', PostController_1.default.updatePost);
router.delete('/post/delete-post', PostController_1.default.deletePost);
exports.default = router;
