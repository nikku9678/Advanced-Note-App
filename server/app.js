import express from 'express';
import cors from 'cors';
import {connectDb } from './config/connectDb.js';
import userRoutes from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
const app=express();
dotenv.config();
connectDb();




// app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(errorMiddleware)
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/note',noteRoutes)
app.get('/',(req,res)=>{
   res.send("hello")
})

const PORT = 5000 || process.env.PORT
app.listen(5000,(req,res)=>{
    console.log(`Port running on ${PORT}`);
})