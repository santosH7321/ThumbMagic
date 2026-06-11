import { Router } from "express";
import { Signup } from "../controllers/user.controller";

export const AuthRouter = Router();

AuthRouter.post("/signup", Signup);