import express from "express";
import multer from "multer";
import artistController from "../../controllers/admin/artist.controller";
let upload = multer();
let router = express.Router();

router.get('/',artistController.getAllArtists)
router.get('/:id',artistController.getArtist)
router.get('/showAdd',artistController.showAddArtist)
router.get('/showUpdate',artistController.showUpdate)
router.post('/', artistController.addArtist)
router.put('/:id',artistController.updateArtist);

export default router;


