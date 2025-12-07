import { Router } from "express";
import { registerUser } from "../controller/userController";
import upload from "../middlewares/multerMiddleware";

const router = Router();

// For form-data without files
router.post("/register", upload.none(), registerUser);

export default router;
