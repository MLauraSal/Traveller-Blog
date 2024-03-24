import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.Routes.js';

export const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json({extended:true}));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


app.use(`/api/auth`, authRoutes);