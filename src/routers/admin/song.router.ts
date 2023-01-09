import express from "express";
import multer from "multer";
import SongController from "../../controllers/admin/song.controller";
import firebase from "../../middlewares/firebase";

let upload = multer({storage: multer.memoryStorage()});
let router = express.Router();


router.get('/', SongController.getAllSongs);
router.get('/ShowAddSong', SongController.showAddSong);
router.post('/', SongController.addSong);
router.get('/:id', SongController.getSong);
router.put('/:id', upload.none(), SongController.updateSong);
router.post('/upload', upload.single('file'), firebase);


export default router;

