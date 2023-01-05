import Subscription  from "../../models/subscription.model";
import AppDataSource from "../../configs/data-source";

    const subRepo = AppDataSource.getRepository(Subscription);

class SubscriptionController {
    showSubscriptionAddForm(req, res) {
        res.status(200).json({ title: 'subscription add form' });
    }
    async addSubscription(req, res) {
        let {name, duration, price} = req.body;
        let subscription = new Subscription();
        subscription.name = name ? name : null;
        subscription.duration = duration ? duration : null;
        subscription.price = price ? price : null;
        try {
            await subRepo.save(subscription);
            res.status(200).json({...subscription})

        }
        catch (err) {
            let { sqlMessage } = err;
            res.status(500).json({ message: sqlMessage })
        }
    }
    async getSubscriptionInfo(req, res) {
        let id = req.params.id;
        let subscription = await subRepo.findOneBy({id: id});
        if (subscription) {
            res.status(200).json({subscription})
        }
        else {
            res.status(404).json({message: 'not found'})
        }
    }
    async editSubscriptionInfo(req, res) {
        let id = req.params.id;
        let subscription = await subRepo.findOneBy({id: id});
        let {name, duration, price} = req.body;
        subscription.name = name ? name : null;
        subscription.duration = duration ? duration : null;
        subscription.price = price ? price : null;
        try {
            await subRepo.save(subscription);
            res.status(200).json(subscription);
        }
        catch (err) {
            let { sqlMessage } = err;
            res.status(500).json({ message: sqlMessage });
        }
    }
    async showHideSubscription(req, res) {
        let id = req.params.id;
        let subscription = await subRepo.findOneBy({id: id});
        subscription.active = subscription.active ? 0 : 1;
        await subRepo.save(subscription);
        res.status(200).json(subscription);
    }
    async showAllSubscriptions(req, res) {
        let subscriptions = await subRepo.find();
        res.status(200).json(subscriptions);
    }
}

let subscriptionController = new SubscriptionController();
export default subscriptionController;