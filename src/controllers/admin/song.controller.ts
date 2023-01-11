import AppDataSource from "../../configs/data-source";
import { Like } from "typeorm";
import Song from "../../models/song.model";
import Artist from "../../models/artist.model";
import Album from "../../models/album.model";
import Country from "../../models/country.model";
import Genre from "../../models/genre.model";
import qs from "qs";

const songRepo = AppDataSource.getRepository(Song);
const artistRepo = AppDataSource.getRepository(Artist);
const albumRepo = AppDataSource.getRepository(Album);
const countryRepo = AppDataSource.getRepository(Country);
const genreRepo = AppDataSource.getRepository(Genre);

class SongController {
    async getAllSongs(req, res) {
        let songs = await songRepo.find({
            relations: {
                artists: true,
                album: true
            },
            where: {
                active: 1
            }
        })
        res.status(200).json({ data: songs });
    }
    async getSong(req, res, next) {
        try {
            let song = await songRepo.find({
                relations: {
                    artists: true,
                    album: true
                },
                where: {
                    id: req.params.id,
                    active: 1
                }
            })
            res.status(200).json({ data: song });
        }
        catch (err) {
            next(err);
        }

    }
    async addSong(req, res) {
        try {
            let { title, released, no, genre, image, file, albumName, artistName, countryId } = req.body;
            console.log(req.body);
            let songGenres = [];
            for (let item of genre) {
                let songGenre = await genreRepo.findOneBy({id: item})
                songGenres.push(songGenre);
            }
            let country = await countryRepo.findOneBy({ id: countryId });
            let artist = await artistRepo.findOneBy({ name: artistName });
            if (!artist) {
                return res.status(500).json({ message: 'Artist not found' })
            }
            let album = await albumRepo.findOneBy({ name: albumName, artist: artist });
                let song = new Song();
            if (!album && albumName) {
                return res.status(500).json({ message: 'Album not found' })
            }
            else {
                song.album = album;
            }
            song.title = title ? title : null;
            song.released = released ? released : null;
            song['#'] = no ? no : null;
            song.genres = songGenres;
            song.image = image ? image : null;
            song.file = file ? file : null;
            song.country = country;
            song.artists = [artist];
            
            await songRepo.save(song);
            res.status(200).json(song);
        }
        catch (err) {
            res.status(500).json({ message: err.sqlMessage })
        }
    }
    async updateSong(req, res) {
        try {
            let song = await songRepo.findOneBy({id: req.params.id})
            let { title, released, no, genre, image, file, albumName, artistName, countryId } = req.body;
            let songGenres = [];
            for (let item of genre) {
                let songGenre = await genreRepo.findOneBy({id: item})
                songGenres.push(songGenre);
            }
            let country = await countryRepo.findOneBy({ id: countryId });
            let artist = await artistRepo.findOneBy({ name: artistName });
            if (!artist) {
                return res.status(500).json({ message: 'Artist not found' })
            }
            let album = await albumRepo.findOneBy({ name: albumName, artist: artist });
            if (!album && albumName) {
                return res.status(500).json({ message: 'Album not found' })
            }
            else {
                song.album = album;
            }
            song.title = title ? title : null;
            song.released = released ? released : null;
            song['#'] = no ? no : null;
            song.genres = songGenres;
            song.image = image ? image : null;
            song.file = 'file';
            song.country = country;
            song.artists = [artist];
            
            await songRepo.save(song);
            res.status(200).json(song);
        }
        catch (err) {
            res.status(500).json({ message: err.sqlMessage })
        }
    }
    async getSongsByTitle(req, res) {
        try {
            let songs = await songRepo.find({
                relations: {
                    album: true,
                    artists: true
                },
                where: {
                    title: Like(`%${req.query.title}%`),
                    active: 1
                }
            });
            res.status(200).json({ data: songs });
        }
        catch (err) {
            res.status(500).json({ message: 'Invalid Query' });
        }
    }
    test(req, res) {
            console.log(req.files);
            res.end();
        }
    }
let songController = new SongController()

export default songController;
