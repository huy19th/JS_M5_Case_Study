
import express from "express";
import authController from "../controllers/auth.controller";
import multer from "multer";

const upload = multer();
const router = express.Router();

router.post('/register', upload.none(), authController.register);
router.post('/login', upload.none(), authController.login);

export default router;
