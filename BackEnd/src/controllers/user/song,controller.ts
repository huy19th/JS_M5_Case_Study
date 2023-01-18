import AppDataSource from "../../configs/data-source";
import { Like, Not, Equal } from "typeorm";
import Song from "../../models/song.model";
import Artist from "../../models/artist.model";
import Album from "../../models/album.model";
import Country from "../../models/country.model";
import Genre from "../../models/genre.model";
import qs from "qs";

const songRepo = AppDataSource.getRepository(Song);

class SongController {
    async getAllSongs(req, res) {
        let songs = await songRepo.find({
            relations: {
                artists: true,
                album: true
            },
            where: {
                active: 1
            },
            take : 5
        })
        res.status(200).json(songs);
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
            res.status(200).json(song);
        }
        catch (err) {
            next(err);
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
            res.status(200).json(songs);
        }
        catch (err) {
            res.status(500).json({ message: 'Invalid Query' });
        }
    }
    test(req, res) {
        console.log(req.files);
        res.end();
    }
    async getSongByCountry(req, res) {
        let songs = await songRepo.find({
            relations: {
                artists: true,
                album: true
            },
            order : {
              released : "DESC",
            },
            where : {
              country : {
                  name : req.params.name
              }
            },
            take : 12
        })
        res.status(200).json(songs);
    }
    async getSongNotFromCountry(req, res) {
        let songs = await songRepo.find({
            relations: {
                artists: true,
                album: true
            },
            order : {
                released : "DESC",
            },
            where : {
                country : {
                    name : Not(Equal(req.params.name))
                }
            },
            take : 5
        })
        res.status(200).json(songs);
    }
    async getTrendSong(req, res) {
        let songs = await songRepo.find({
            relations: {
                artists : true,
                album : true,
                listens : true
            },
            order :{
                released : "DESC",
            }
        })
    }

}

let songController = new SongController()

export default songController;
