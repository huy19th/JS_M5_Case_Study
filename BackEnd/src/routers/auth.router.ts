import express from "express";
import authController from "../controllers/auth.controller";
import {upload, multipleUpload} from "../configs/multer";
import firebase from "../middlewares/firebase";

const router = express.Router();

router.post('/register', multipleUpload, firebase, authController.register);
router.post('/login', upload.none(), authController.login);

export default router;
