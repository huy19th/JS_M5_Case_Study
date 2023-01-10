import User from "../models/user.model";
import AppDataSource from "../configs/data-source";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const len = +process.env.PW_ENCRYPTION_LENGTH;
const key = process.env.JWT_KEY;

class AuthController {
    async register(req, res) {
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
    async login(req, res) {
        const userRepo = await AppDataSource.getRepository(User);
        let {email, password} = req.body;
        let user = await userRepo.findOneBy({ email: email });
        if (user) {
            return res.status(401).json({message: 'Invalid Credentials'});
        }
        let match = await bcrypt.compare(password, user.password);
        if (match) {
            let payload = {
                id: user.id
            }
            let token = jwt.sign(payload, key, { expiresIn: '24h' });
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })
            res.status(200).json({message: 'Connected'});
        }
        else {
            res.status(401).json({message: 'Invalid Credentials'});
        }
        
    }
}

let authController = new AuthController();

export default authController;