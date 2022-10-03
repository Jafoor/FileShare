import express from "express";
import { Register, Signin, Logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Signin);
router.post("/logout", Logout);

export default router;