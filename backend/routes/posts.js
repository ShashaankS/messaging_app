import express from "express";
const router = express.Router();
import {getPosts, getPost, createPost, updatePost, deletePost} from '../controllers/postController.js'

// GET all posts
router.get("/", getPosts);

// GET post
router.get("/:id", getPost);

// POST
router.post("/", createPost);

// PUT or PATCH
router.put("/:id", updatePost);

// DELETE
router.delete('/:id', deletePost);

export default router;
