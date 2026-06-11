import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/DB";
connectDB();

import express from "express";
import cors from "cors"
import { AuthRouter } from "./routes/user.route";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})