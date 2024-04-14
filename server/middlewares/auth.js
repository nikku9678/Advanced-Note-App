import { User } from "../models/user.js";
import jwt from 'jsonwebtoken'

export const isAuthenticate = async (req,res,next) =>{
    const {token} = req.cookies
    try {
        if(!token) return res.json({message:"login first"})

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // console.log("this is decoded data ",decode)

        const id = decode.id
        console.log(id)
        let user = await User.findById(id)
 
        if(!user) return res.json({message:"User not exist"})

        req.user = user 
        next();
    } catch (error) {
      
        res.json({message:error})
    }
}