import express from "express";
import multer from "multer";
import albumController from "../../controllers/user/album.controller";

let upload = multer();
let router = express.Router();

router.get('/',albumController.getAllAlbums)


export default router;