import subscriptionModel from "../../models/subscription.model";
import subscriptionDetails from "../../models/subscriptionDetail.model";
import userModel from "../../models/user.model";

import AppDataSource from "../../configs/data-source";


let subscriptionRepo = AppDataSource.getRepository(subscriptionModel);
let subscriptionDetailRepo = AppDataSource.getRepository(subscriptionDetails);
let userRepo = AppDataSource.getRepository(userModel);

class BuyVipController {
     async showVip(req,res){
         let vip = await subscriptionRepo.find()
         res.status(200).json(vip)
     }
     async buyVip(req,res){
         let vip = await subscriptionRepo.findOneBy({id : req.params.id});
         console.log(1)
         let duration = vip.duration * 30 * 24 * 60 * 60 * 1000
         let currentDate = Date.now();
         let subscription = new subscriptionDetails();
         subscription.user = req.decoded;
         subscription.expire = new Date(currentDate + duration);
         try {
             await  subscriptionDetailRepo.save(subscription);
             res.status(200).json(subscription);
         }
         catch (err) {
             res.status(500).json(err.message);
         }
     }
}
let buyVipController = new BuyVipController()

export default buyVipController;