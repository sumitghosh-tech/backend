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
app.get("/", (req, res) => {
    res.send("Hello from railway....😃🙂😃");
  });


const CONNECTION_URL = process.env.CONNECTION_URL;
//mongodb+srv://Sumit:<password>@cluster0.ebwns.mongodb.net/?retryWrites=true&w=majority
const PORT = 5000||process.env.PORT ;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(()=> app.listen(PORT, ()=> console.log(`server running `)))

    .catch((error)=> console.log(error.message));


        
//mongoose.set("useFindAndModify",false);  //it ensures that there is no warning at console
