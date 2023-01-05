import User from "../models/user.model";
import AppDataSource from "../configs/data-source";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

let len = +process.env.PW_ENCRYPTION_LENGTH;
class AuthController {
    showRegisterForm(req, res) {
        res.status(200).json({ title: 'registration form' })
    }
    async register(req, res, next) {
        const userRepo = await AppDataSource.getRepository(User);
        let { email, password, name } = req.body;

        let user = new User();
        user.email = email ? email : null;
        user.password = password ? password : null;
        user.name = name || '';

        try {
            await userRepo.save(user);
            user.password = await bcrypt.hash(password, len);
            await userRepo.save(user);
            res.status(200).json(req.body);
        }
        catch (err) {
            let { sqlMessage } = err;
            let message = sqlMessage.replace('Column ', '');
            res.status(500).json({ message: message })
        }
    }
    showLoginForm(req, res) {
        res.status(200).json({ title: 'login form' })
    }
    async login(req, res) {
        const userRepo = await AppDataSource.getRepository(User);
        let {email, password} = req.body;
        let user = await userRepo.findOneBy({ email: email });
        let match = await bcrypt.compare(password, user.password);
        if (match) {
            res.status(200).json(user);
        }
        else {
            res.status(401).json({message: 'Invalid Credentials'})
        }
        
    }
}

let authController = new AuthController();

export default authController;