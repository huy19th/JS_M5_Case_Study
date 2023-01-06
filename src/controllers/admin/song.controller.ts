import AppDataSource from "../../configs/data-source";
import Song from "../../models/song.model";
import {getManager} from "typeorm";

let songRepo = AppDataSource.getRepository(Song);

class SongController {
    async ShowSong(req,res){
        res.status(200).json({title :"Show Songs"});
    }

    async ShowAddSong(req,res){
        res.status(200).json({title :"Show Add"});
    }

    async CreateSong(req,res){
        try{
            console.log('hello')
            await songRepo.save(req.body);
            res.status(200).json(req.body);

        }
        catch(err){
            res.status(500).json({title : err.message})
        }

    }

}
let songController = new SongController()

export default songController;
