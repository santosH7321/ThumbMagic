import { Request, Response } from "express";
import User from "../models/user.model";

export const Signup = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.status(401).json({
                message: "All fields are required"
            })
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const user = await User.create({ name, email, password });

        res.status(201).json({
            success: true,
            message: user.name && "User created successfully"
        })
    }
    catch(err){
        if(err instanceof Error){
            return res.status(500).json({
                message: err.message
            })
        }
    }
}