import express from "express";
import authController from "../controllers/auth.controller";
import {upload, multipleUpload} from "../configs/multer";

const router = express.Router();

router.post('/register', multipleUpload, authController.register);
router.post('/login', upload.none(), authController.login);

export default router;
