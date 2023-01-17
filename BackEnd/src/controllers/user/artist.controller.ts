import AppDataSource from "../../configs/data-source";
import { Like } from "typeorm";
import Song from "../../models/song.model";
import Artist from "../../models/artist.model";
import Album from "../../models/album.model";
import Country from "../../models/country.model";
import Genre from "../../models/genre.model";

const artistRepo = AppDataSource.getRepository(Artist);

class ArtistController {
    async getArtist(req, res) {
        try {
            let artist = await artistRepo.findOneBy({ id: req.params.id });
            res.status(200).json({data: artist})
        }
        catch(err) {
            res.status(500).json({message: 'Invalid artist ID'})
        }
    }
}

let artistController = new ArtistController();

export default artistController;