import express from "express";
import multer from "multer";
import albumController from "../../controllers/admin/album.controller";
let upload = multer();
let router = express.Router();

router.get('/list', albumController.albumList);
router.get('/showAdd', albumController.showAddAlbum);
router.get('/showUpdate', albumController.showUpdate)
router.post('add', albumController.addAlbum);
router.post('update', albumController.updateAlbum);

export default router;

