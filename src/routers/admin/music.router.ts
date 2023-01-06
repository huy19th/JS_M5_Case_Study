import express from "express";
import multer from "multer";
import SongController from "../../controllers/admin/song.controller";

let upload = multer();
let router = express.Router();


router.get('/', SongController.ShowSong);
router.get('/ShowAddSong',SongController.ShowAddSong);
router.post('/createSong',SongController.CreateSong);



export default router;

