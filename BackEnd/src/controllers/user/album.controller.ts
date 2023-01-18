import AppDataSource from "../../configs/data-source";
import Album from "../../models/album.model";
import Artist from "../../models/artist.model";
import Song from "../../models/song.model";

let albumRepo =  AppDataSource.getRepository(Album);
let artistRepo = AppDataSource.getRepository(Artist);

class AlbumController {
    async getAllAlbums(req, res) {
        let albums = await albumRepo.find({
            relations: {
                artist: true,
            },
            order : {
                released : "DESC"
            }
        });
        res.status(200).json(albums);
    }
}
let albumController = new AlbumController();
export default albumController;
