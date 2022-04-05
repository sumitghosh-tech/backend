import express from "express";
import { signin,signup} from "../controllers/user.js";
import auth from "../middleware/auth.js";


const router=express.Router();

router.post("/signin",signin)  //http://localhost:5000/user/signin 
router.post("/signup",signup)  //http://localhost:5000/user/signup
export default router;