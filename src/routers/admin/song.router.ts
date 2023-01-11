import express from "express";
import multer from "multer";
import Song from "src/models/song.model";
import SongController from "../../controllers/admin/song.controller";
import firebase from "../../middlewares/firebase";


let upload = multer({storage: multer.memoryStorage()});
let multipleUpload = upload.fields([{name: 'image', maxCount: 1}, {name: 'file', maxCount: 1}])
let router = express.Router();


router.get('/', SongController.getAllSongs);
router.get('/:id', SongController.getSong);
router.get('/title/*', SongController.getSongsByTitle);
router.post('/', multipleUpload, firebase, SongController.addSong);
router.put('/:id', upload.none(), SongController.updateSong);
router.post('/upload', multipleUpload, firebase);
router.post('/test', multipleUpload, SongController.test);


export default router;

