import express from "express";
import { test, upddateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, upddateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);

export default router;