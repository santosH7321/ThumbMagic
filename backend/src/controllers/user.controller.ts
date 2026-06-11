import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(401).json({
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({
                message: "Invailid request"
            })
        };

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword){
            return res.status(400).json({
                message: "Invailid request"
            })
        };

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET!, {expiresIn: "1h"});

        res.status(200).json({
            success: true,
            message: "Login success",
            token
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