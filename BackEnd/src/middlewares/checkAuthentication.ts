import AppDataSource from '../configs/data-source';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.JWT_KEY;

const checkAuthentication = (req, res, next) => {
    let token = req.headers.token;
    // console.log(token);
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    jwt.verify(token, key, async (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized'})
        }
        const userRepo = AppDataSource.getRepository(User);
        let user = await userRepo.findOneBy({id: decoded.id});
        if (!user) {
            return res.status(401).json({message: 'Unauthorized'})
        }
        req.decoded = user;
        next();
    })
}

export default checkAuthentication;