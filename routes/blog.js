import express from 'express';
import { getBlogs, createBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blog.js';

const router = express.Router();


router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlogs);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);


export default router;