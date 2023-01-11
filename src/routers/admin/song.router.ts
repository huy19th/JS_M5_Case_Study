import express from "express";
import multer from "multer";
import Song from "src/models/song.model";
import SongController from "../../controllers/admin/song.controller";
import firebase from "../../middlewares/firebase";


let upload = multer({storage: multer.memoryStorage()});
let router = express.Router();


router.get('/', SongController.getAllSongs);
router.get('/:id', SongController.getSong);
router.get('/title/*', SongController.getSongsByTitle);
router.post('/', upload.none(), SongController.addSong);
router.put('/:id', upload.none(), SongController.updateSong);
router.post('/upload', upload.single('file'), firebase);
router.post('/test', upload.none(), SongController.test);


export default router;

