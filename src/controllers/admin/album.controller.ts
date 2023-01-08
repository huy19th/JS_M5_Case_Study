import AppDataSource from "../../configs/data-source";
import AlbumModel from "../../models/album.model";

let albumRepo =  AppDataSource.getRepository(AlbumModel);

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
    async showAddAlbum(req, res){
        try{
            res.status(200).json({title : 'showAdd Album'})
        }
        catch(err){
            res.status(500).json(err.message)
        }
    }
    async addAlbum(req, res){
        let {name, released, artisId} = req.body;
        let album = new AlbumModel();
        album.name = name ?  name : null;
        album.released = released ? released : null;
        album.artist = artisId ? artisId : null;
        try{
            await albumRepo.save(album);
            res.status(200).json(album);
        }
        catch(err){
            res.status(500).json({error: err.sqlMessage});
        }
    }
    async showUpdate(req, res){
        try{
            res.status(200).json({title : "showUpdate form"})
        }
        catch(err){
            res.status(500).json(err.message);
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
}
let albumController = new AlbumController();
export default albumController;
