import Blog from '../models/blogModels.js';

export const getBlogs = async (req, res) => {
    try{
        const blogs = await Blog.findAll();
        res.json(blogs);
    }
    catch(error){
        res.json({
            msg : error.message
        })
    }
}

export const getBlogById = async (req, res) => {
    try{
        const blogs = await Blog.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(blogs[0]);
    }
    catch(error){
        res.json({
            msg : error.message
        })
    }
}

export const createBlogs = async (req, res) => {
    try{
        await Blog.create(req.body);
        res.json({
            "msg" : "Blog Created"
        })
    }
    catch(error){
        res.json({
            msg : error.message
        })
    }
}

export const updateBlog = async (req, res) => {
    try {
        await Blog.update(req.body, {
            where : {
                id: req.params.id
            }
        });
        res.json({
            "msg" : "Blog updated"
        })
    } catch (error) {
        res.json({msg: error.message})
    }

}

export const deleteBlog = async (req, res) => {
    try {
        await Blog.destroy({
            where : {
                id: req.params.id
            },
            paranoid: false
        });
        res.json({
            "msg" : "Blog deleted"
        })
    } catch (error) {
        res.json({msg: error.message})
    }

}