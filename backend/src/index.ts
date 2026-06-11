import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/DB";
connectDB();

import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})