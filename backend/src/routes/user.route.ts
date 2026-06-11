import { Router } from "express";
import { Login, Signup } from "../controllers/user.controller";

export const AuthRouter = Router();

AuthRouter.post("/signup", Signup);
AuthRouter.post("/login", Login);