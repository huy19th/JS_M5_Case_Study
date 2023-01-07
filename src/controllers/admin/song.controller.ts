import AppDataSource from "../../configs/data-source";
import Song from "../../models/song.model";

const songRepo = AppDataSource.getRepository(Song);

class SongController {
    async getAllSongs(req, res) {
        let songs = await songRepo
            .createQueryBuilder('song')
            .leftJoin('song.album', 'album')
            .getRawMany();
        res.status(200).json({ data: songs });
    }
    async getSong(req, res, next) {
        try {
            let song = await songRepo
                .createQueryBuilder('song')
                .leftJoin('song.album', 'album')
                .where('song.id = :songid', { songid: req.params.id })
                .getRawOne();
            res.status(200).json({ data: song });
        }
        catch (err) {
            next(err);
        }

    }

    async showAddSong(req, res) {
        res.status(200).json({ title: "Show Add" });
    }

    async addSong(req, res) {
        try {
            await songRepo.save(req.body);
            res.status(200).json(req.body);
        }
        catch (err) {
            res.status(500).json({ title: err.message })
        }

    }

    async updateSong(req, res) {
        try {
            let song = await songRepo.findOneBy({ id: req.params.id });
            song = { ...song, ...req.body };
            console.log(req.body)
            await songRepo.save(song);
            res.status(200).json(song)
        }
        catch (err) {
            res.status(500).json({ title: err.message })
        }
    }

}
let songController = new SongController()

export default songController;
