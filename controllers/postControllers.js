
// ========================= CREATE A POST
// POST : api/posts
// UNPROTECTED
const createPost = async (req, res, next) => {
    res.json("Create post")
}



// ========================= GET ALL POST
// GET : api/posts
// UNPROTECTED
const getPosts = async (req, res, next) => {
    res.json("Get all posts")
}



// ========================= GET SINGALE POST
// GET : api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
    res.json("Get single post")
}



// ========================= GET POST BY CATEGORY
// GET : api/posts/categories/:category
// UNPROTECTED
const getCatPost = async (req, res, next) => {
    res.json("Get post by category")
}



// ========================= GET USER/AUTHOR POST
// GET : api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
    res.json("Get User post")
}



// ========================= EDIT POST
// PATCH : api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
    res.json("Edit Post")
}



// ========================= DELETE POST
// DELETE : api/posts/:id
// PROTECTED
const deletePost = async (req, res, next) => {
    res.json("Delete Post")
}



module.exports = { createPost, getPosts, getPost, getUserPosts, getCatPost, editPost, deletePost }