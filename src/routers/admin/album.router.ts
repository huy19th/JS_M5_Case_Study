import express from "express";
import multer from "multer";
import albumController from "../../controllers/admin/album.controller";
let upload = multer();
let router = express.Router();

router.get('/', albumController.getAllAlbums);
router.get('/showAdd', albumController.showAddAlbum);
router.get('/showUpdate', albumController.showUpdate);
router.get('/:id', albumController.getAlbum);
router.post('/', upload.none(), albumController.addAlbum);
router.post('/', albumController.updateAlbum);

export default router;

