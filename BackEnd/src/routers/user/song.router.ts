import express from "express";
import multer from "multer";
import songController from "../../controllers/user/song,controller";

let upload = multer();
let router = express.Router();

router.get('/:id',songController.getSong);
router.get('/',songController.getAllSongs);
router.get('/title/*',songController.getSongsByTitle);

export default router;