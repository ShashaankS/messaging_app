let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
];

// GET all posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
};

// GET a post
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`Post with ${id} not found`);
        error.status = 404;
        return next(error);
    } else {
        res.status(200).json(post);
    }
};

// Create a post 
export const createPost = (req, res) => {
    console.log(req.body);
    const post = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if (!post.title) {
        return res.status(400).json({ msg: "Please include a title" });
    }
    posts.push(post);
    res.status(201).json(posts);
};

// Update a post
export const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(400).json({ msg: "No such post available" });
    }
    post.title = req.body.title;
    res.status(200).json(posts);
};

// DELETE a post
export const deletePost = (req,res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter((post) => (post.id) !== id);
    res.status(200).json(posts);
};
