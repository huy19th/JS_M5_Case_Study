import Artist from "../../models/artist.model";
import AppDataSource from "../../configs/data-source";


let artistRepo = AppDataSource.getRepository(Artist);

class ArtistController {
    async showArtist(req,res,next) {
        try{
            let artist = await artistRepo.find()
            res.status(200).json(artist)
        }
        catch (e){
            res.status(404).json(e.message)
        }
    }
    async showAddArtist(req,res,next) {
        try{
            res.status(200).json({title : "show add artist"})
        }
        catch (e){
            res.status(404).json(e.message);
        }
    }
    async addArtist(req,res,next) {
        let{name,biography} = await req.body
        let artist = new Artist();
        artist.name = name ? name : null;
        artist.biography = biography ? biography : null;
        try{
            await artistRepo.save(artist);
            res.status(200).json(artist);
        }
        catch (e){
            res.status(404).json(e.message);
        }
    }
    async showUpdate(req,res,next) {
        try{
            res.status(200).json({title : "show update"})
        }
        catch (e){
           res.status(404).json(e.message)
        }
    }
    async updateArtist(req,res,next) {
        try{
            let data = req.body
            let artist = {
                name : data.name,
                biography : data.biography
            }
            await artistRepo.createQueryBuilder()
                .update(artist).set(req.params.id.artist);
            res.status(200).json({title: "update artist"})
        }
        catch (e){
            res.status(404).json(e.message)
        }
    }

}
let artistController = new ArtistController();
export default artistController;
