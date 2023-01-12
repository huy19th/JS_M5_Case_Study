import AppDataSource from "../../configs/data-source";
import Album from "../../models/album.model";
import Artist from "../../models/artist.model";
import Song from "../../models/song.model";

let albumRepo =  AppDataSource.getRepository(Album);
let artistRepo = AppDataSource.getRepository(Artist);
let songRepo = AppDataSource.getRepository(Song);

class AlbumController{
    async getAllAlbums(req, res) {
        let albums = await albumRepo.find();
        res.status(200).json({data: albums});
    }
    async getAlbum(req, res) {
        let album = await albumRepo
        .createQueryBuilder('album')
        .where('album.id = :id', {id: req.params.id})
        .printSql()
        .getRawMany();
        if (album) {
            res.status(200).json({data: album});
        }
        else {
            res.status(404).json({error: 'not found'});
        }
    }
    async addAlbum(req, res){
        let {name, released, artistName, image} = req.body;
        let artist = await artistRepo.findOneBy({name: artistName})
        if (!artist) {
            return res.status(500).json({message: 'Artist Not Found'});
        }
        let album = new Album();
        album.name = name ? name : null;
        album.released = released ? released : null;
        album.artist = artist;
        album.image = image ? image : null
        try{
            await albumRepo.save(album);
            res.status(200).json(album);
        }
        catch(err){
            res.status(500).json({message: err.sqlMessage});
        }
    }
    async updateAlbum(req, res){
        try{
            let {name, released, artistId} = req.body;
            let album = {
                name : name ? name : null,
                released : released ? released : null,
                artistId : artistId ? artistId : null
            }
            await albumRepo.createQueryBuilder().update(album).set(req.params.id.album);
            res.status(200).json({message: "update success"})
        }
        catch (err){
            res.status(500).json({error: err.sqlMessage});
        }
    }
    async deleteAlbum(req, res) {
        await AppDataSource.createQueryBuilder()
        .update(Album)
        .set({active: 0})
        .where('id = :id', {id: req.params.id})
        .execute();
        await AppDataSource.createQueryBuilder()
        .update(Song)
        .set({active: 0})
        .where('albumId = :id', {id: req.params.id})
        .execute();
        res.end();
    }
}
let albumController = new AlbumController();
export default albumController;
