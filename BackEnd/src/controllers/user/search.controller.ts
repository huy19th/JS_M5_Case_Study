import songModel from "../../models/song.model";
import artistModel from "../../models/artist.model";
import albumModel from "../../models/album.model";
import AppDataSource from "../../configs/data-source";

let songRepo = AppDataSource.getRepository(songModel);
let artistRepo = AppDataSource.getRepository(artistModel);
let albumRepo = AppDataSource.getRepository(albumModel);
import { Like } from "typeorm"


class SearchController {
    searchSongs(searchKey) {
        let song = new Promise((resolve, reject) => {
            let songsByTitle = songRepo.find({
                relations: {
                    artists: true
                },
                where: [
                    { title: Like(`%${searchKey}%`) }
                ]
            })

            let songsByAlbumName = songRepo.find({
                relations: {
                    artists: true
                },
                where: [
                    {
                        album: {
                            name: Like(`%${searchKey}%`)
                        }
                    }
                ]
            })

            let songsByArtistsName = songRepo.find({
                relations: {
                    artists: true
                },
                where: [
                    {
                        artists: {
                            name: Like(`%${searchKey}%`)
                        }
                    }
                ]
            })

            resolve({ songs: songsByTitle, albums: songsByAlbumName, artists: songsByArtistsName })
        })
    }

    async search(req, res) {

        let songs = new Promise((resolve, reject) => {
            resolve(songRepo.find({
                relations: {
                    artists: true
                },
                where: [
                    { title: Like(`%${req.params.q}%`) }
                ]
            }))
        })
        let albums = new Promise((resolve, reject) => {
            resolve(albumRepo.find({
                relations: {
                    artist: true
                },
                where: [
                    { name: Like(`%${req.params.q}%`) }
                ]
            }))
        })
        let artists = new Promise((resolve, reject) => {
            resolve(artistRepo.find({
                where: {
                    name: Like(`%${req.params.q}%`)
                }
            }))
        })
        Promise.all([songs, albums, artists])
            .then(result => {
                let [songsResult, albumsResult, artistsResult] = result;
                res.status(200).json({
                    songs: songsResult,
                    albums: albumsResult,
                    aritsts: artistsResult
                })
            })
    }
}

let searchController = new SearchController();

export default searchController;