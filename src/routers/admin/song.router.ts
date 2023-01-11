import express from "express";
import SongController from "../../controllers/admin/song.controller";
import firebase from "../../middlewares/firebase";
import {upload, multipleUpload} from "../../configs/multer"

let router = express.Router();

router.get('/', SongController.getAllSongs);
router.get('/:id', SongController.getSong);
router.get('/title/*', SongController.getSongsByTitle);
router.post('/', multipleUpload, firebase, SongController.addSong);
router.put('/:id', upload.none(), SongController.updateSong);
router.post('/upload', multipleUpload, firebase);
router.post('/test', multipleUpload, SongController.test);


export default router;

