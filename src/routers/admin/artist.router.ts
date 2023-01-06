import express from "express";
import multer from "multer";
import artistController from "../../controllers/admin/artist.controller";
let upload = multer();
let router = express.Router();

router.get('/list',artistController.showArtist)
router.get('/showAdd',artistController.showAddArtist)
router.post('/add',artistController.addArtist)
router.get('/showUpdate',artistController.showUpdate)
router.post('/update',artistController.updateArtist);




export default router;


