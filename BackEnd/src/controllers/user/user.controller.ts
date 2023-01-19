import AppDataSource from "../../configs/data-source";
import User from "../../models/user.model";

let userRepo = AppDataSource.getRepository(User);

class UserController {
    getUser(req, res) {
        let user = req.decoded;
        delete user.password;
        res.status(200).json(user);
    }
}

let userController = new UserController();

export default userController;