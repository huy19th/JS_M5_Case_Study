import express from "express";
import subscriptionController from "../../controllers/admin/subscription.controller";
import multer from "multer";

let upload = multer()
let router = express.Router();

router.get('/list', subscriptionController.showAllSubscriptions)
router.get('/add', subscriptionController.showSubscriptionAddForm);
router.post('/add', upload.none(), subscriptionController.addSubscription);

router.get('/info/:id', subscriptionController.getSubscriptionInfo);
router.put('/info/:id', upload.none(), subscriptionController.editSubscriptionInfo);
router.patch('/info/:id', upload.none(), subscriptionController.showHideSubscription);

export default router;