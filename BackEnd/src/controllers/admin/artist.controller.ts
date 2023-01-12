import Artist from "../../models/artist.model";
import AppDataSource from "../../configs/data-source";

const artistRepo = AppDataSource.getRepository(Artist);

class ArtistController {
    async getAllArtists(req, res) {
        try{
            let artists = await artistRepo.find()
            res.status(200).json({data: artists})
        }
        catch(err) {
            res.status(404).json(err.message)
        }
    }
    async getArtist(req, res) {
        let artist = await artistRepo.findOneBy({id: req.params.id});
        if (artist) {
            res.status(200).json({data: artist});
        }
        else {
            res.status(404).json({message: 'not found'});
        }
    }
    async showAddArtist(req, res) {
        try{
            res.status(200).json({title : "show add artist"})
        }
        catch (e){
            res.status(404).json(e.message);
        }
    }
    async addArtist(req, res) {
        let {name, biography} = req.body
        let artist = new Artist();
        artist.name = name ? name : null;
        artist.biography = biography ? biography : null;
        try{
            await artistRepo.save(artist);
            res.status(200).json(artist);
        }
        catch (err){
            res.status(500).json(err);
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
    async updateArtist(req, res) {
        try{
            let {name, biography} = req.body
            let artist = {
                name : name ? name : null,
                biography : biography ? biography: null
            }
            await artistRepo.createQueryBuilder()
                .update(artist).set(req.params.id.artist);
            res.status(200).json({title: "update artist"})
        }
        catch(err) {
            res.status(404).json({message: err.message});
        }
    }

}
let artistController = new ArtistController();
export default artistController;
