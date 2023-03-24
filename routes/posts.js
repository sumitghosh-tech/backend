import express from "express";
import {getPost, getPosts,createPost ,updatePost,deletePost} from "../controllers/posts.js";
//import auth from "../middleware/auth.js";


const router=express.Router();

router.get("/",getPosts); //GET:  http://localhost:5000/posts  -->comes from client>src>actions>posts.js
router.get("/:id",getPost); 

//router.get("/search",getPostsBySearch);
router.post("/",createPost);  //POST:  http://localhost:5000/posts  -->comes from client>src>actions>posts.js
router.patch("/:id",updatePost);  //updatePost will take id params in ../controllers/posts.js
router.delete("/:id",deletePost);

export default router;
