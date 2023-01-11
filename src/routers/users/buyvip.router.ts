import express from "express";
import multer from "multer";

import buyVipController from "../../controllers/users/buyVip.controller";

let upload = multer();
let router = express.Router();


router.get('/', buyVipController.showVip);
router.post('/:id/buy',upload.none(), buyVipController.buyVip);

export default router;