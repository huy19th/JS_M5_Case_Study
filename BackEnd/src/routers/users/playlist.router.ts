import express from "express";
import multer from "multer";
import playlistController from "../../controllers/users/playlist.controller";

let upload = multer();
let router = express.Router();

router.get("/",playlistController.showPlayList);
router.post("/add",upload.none(),playlistController.addNamePlaylist);
router.patch("/:playlistId/song/:songId",upload.none(),playlistController.addSongPlayList);

router.post("/updateName/:id",upload.none(),playlistController.UpdateNamePlaylist);
router.delete("/delete/:id",playlistController.deleteSongPlaylist);
router.delete("/deletePlayList/:id",playlistController.deletePlaylist);

export default router;