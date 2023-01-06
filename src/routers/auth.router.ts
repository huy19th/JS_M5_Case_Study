import express from "express";
import authController from "../controllers/auth.controller";
import multer from "multer";


const upload = multer();
const router = express.Router();

router.get('/register', authController.showRegisterForm);
router.post('/register', upload.none(), authController.register);
router.get('/login', authController.showLoginForm);
router.post('/login', upload.none(), authController.login);

export default router;
