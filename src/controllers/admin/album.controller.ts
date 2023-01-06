import AppDataSource from "../../configs/data-source";
import AlbumModel from "../../models/album.model";

let albumRepo =  AppDataSource.getRepository(AlbumModel);


class AlbumController{
    async albumList(req,res){
        let album = await albumRepo.find();
        res.status(200).json(album);
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
        let {name,released,artisId} = await req.body
        let album = new AlbumModel();
        album.name = name ?  name : null;
        album.released = released ? released : null;
        album.artist = artisId ? artisId : null;
        try{
            await albumRepo.save(album);
            res.status(200).json(album);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
    async showUpdate(req, res){
        try{
            res.status(200).json({title : "showUpdate Success"})

        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
    async updateAlbum(req, res){
        try{
            let data = req.body
            let album = {
                name : data.name,
                released : data.released,
                artist : data.artist
            }
            await albumRepo.createQueryBuilder().update(album).set(req.params.id.album);
            res.status(200).json({title:"update success"})
        }
        catch (e){
            res.status(500).json({title:"update error"});
        }
    }
}
let albumController = new AlbumController();
export default albumController;
