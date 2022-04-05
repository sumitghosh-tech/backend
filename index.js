import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app=express();
dotenv.config();



app.use(bodyParser.json({limit:"30mb",extended:true}))

app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors());

app.use("/posts",postRoutes);//every routes of postRoutes will start with /posts --->it is a middleware.
app.use("/user",userRoutes);
/*app.get("/",(req,res)=>
{
    res.send("Hello");
})*/


const CONNECTION_URL = "mongodb://127.0.0.1:27017/keepDB";
//const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(()=> app.listen(PORT, ()=> console.log(`server running on: ${[PORT]}`)))

    .catch((error)=> console.log(error.message));


        
//mongoose.set("useFindAndModify",false);  //it ensures that there is no warning at console
