import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from "./models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
const app = express()

const mongoUrl =
  "mongodb+srv://guy33liba:g33g33g33@login-register.lwhmg6w.mongodb.net/?retryWrites=true&w=majority&appName=login-register"

mongoose.connect(mongoUrl)
//
app.use(cors())
app.use(express.json())



app.listen(4000, () => console.log("hello world"))
