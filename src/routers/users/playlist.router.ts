import express from "express";
import multer from "multer";
import playlistController from "../../controllers/users/playlist.controller";

let upload = multer();
let router = express.Router();

router.get("/",playlistController.showPlayList);
router.post("/addNamePlayList",upload.none(),playlistController.addNamePlaylist);
router.post("/addSong",upload.none(),playlistController.addSongPlayList);

export default router;