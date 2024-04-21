import express from "express";
import {login,register,getUser,logout} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/getUser", getUser);

export default router;
