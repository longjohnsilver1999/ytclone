import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRoutes from "./routes/usersRoute.js";
import videoRoutes from "./routes/videoRoutes.js";
import commentRoutes from "./routes/commentsRoutes.js";
import authRoutes from "./routes/auth.js";
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to cluster");
    })
    .catch((err) => {
      console.log(err);
    });
};
// const express = require("express");
// const router = app.router();
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use();
app.listen(8000, () => {
  connect();
  console.log("connected");
});
