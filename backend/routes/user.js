import express from "express"
import mongoose from "mongoose"
import {signUp, loginUser} from '.././models/userController.js'


const router = express.Router()

router.post("/login", (req, res) => {})
router.post("/signup", (req, res) => {})

export default router
