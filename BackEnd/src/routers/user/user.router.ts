import express from "express";
import userController from "../../controllers/user/user.controller";

let router = express.Router();

router.get('/', userController.getUser);

export default router;