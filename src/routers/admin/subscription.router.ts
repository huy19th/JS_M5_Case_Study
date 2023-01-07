import express from "express";
import subscriptionController from "../../controllers/admin/subscription.controller";
import multer from "multer";

let upload = multer()
let router = express.Router();

router.get('/', subscriptionController.getAllSubscriptions)
router.get('/add', subscriptionController.showSubscriptionAddForm);
router.post('/add', upload.none(), subscriptionController.addSubscription);

router.get('/:id', subscriptionController.getSubscription);
router.put('//:id', upload.none(), subscriptionController.updateSubscription);
router.patch('/:id', upload.none(), subscriptionController.showHideSubscription);

export default router;