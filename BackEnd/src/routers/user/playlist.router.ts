import express from "express";
import multer from "multer";
import playlistController from "../../controllers/user/playlist.controller";

let upload = multer();
let router = express.Router();

router.get("/",playlistController.getAllPlaylists);
router.post("/",upload.none(),playlistController.addPlaylist);
router.post("/:playlistId/song/:songId", playlistController.addSongPlayList);
router.get("/:playlistId", playlistController.getPlaylist);
router.post("/updateName/:id",upload.none(),playlistController.UpdateNamePlaylist);
router.delete("/delete/:id",playlistController.deleteSongPlaylist);
router.delete("/deletePlayList/:id",playlistController.deletePlaylist);

export default router;