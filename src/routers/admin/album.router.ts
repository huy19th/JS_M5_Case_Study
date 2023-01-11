import express from "express";
import {upload, multipleUpload} from "../../configs/multer"
import albumController from "../../controllers/admin/album.controller";
import firebase from "../../middlewares/firebase";

let router = express.Router();

router.get('/', albumController.getAllAlbums);
router.get('/:id', albumController.getAlbum);
router.post('/', multipleUpload, firebase, albumController.addAlbum);
router.put('/:id', albumController.updateAlbum);
router.delete('/:id', albumController.deleteAlbum);

export default router;

