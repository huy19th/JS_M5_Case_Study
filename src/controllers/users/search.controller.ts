import songModel from "../../models/song.model";
import artistModel from "../../models/artist.model";
import albumModel from "../../models/album.model";
import AppDataSource from "../../configs/data-source";

let songRepo = AppDataSource.getRepository(songModel);
let artistRepo = AppDataSource.getRepository(artistModel);
let albumRepo = AppDataSource.getRepository(albumModel);
import {Like} from "typeorm"


class SearchController {
    async search(req, res) {
        let songs = await songRepo.find({
            where: {
                title: Like(`%${req.query.q}%`)
            }
        })
        let album = await albumRepo.find({
            where :{name: Like(`%${req.query.q}%`)}

        })
        let artist = await artistRepo.find({
            where : {
                name: Like(`%${req.query.q}%`)
            }
        })
            res.status(200).json({
                songs: songs,
                album: album,
                artist: artist
            })
    }
}

let searchController = new SearchController();

export default searchController;