import express from "express";
import artistController from "../../controllers/user/artist.controller";

let router = express.Router();

router.get('/:id', artistController.getArtist);

export default router;