import AppDataSource from "../../configs/data-source";
import Song from "../../models/song.model";
import PlayList from "../../models/playlist.model";
import PlayListDetail from "../../models/playlistDetail.model";

let playlistRepo = AppDataSource.getRepository(PlayList);
let playlistDetailRepo = AppDataSource.getRepository(PlayListDetail);
let songRepo = AppDataSource.getRepository(Song);
class PlaylistController{

    async getAllPlaylists(req, res) {
        try {
            let playlists = await playlistRepo.find({
                relations: {
                    // user: true,
                    songs: {
                        song: true
                    }
                },
                where: {
                    user: {
                        id: req.decoded.id
                    }
                }
            });
            res.status(200).json(playlists);
        }
        catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getPlaylist(req, res) {
        let playlist = await playlistRepo.find({
            relations: {
                songs: {
                    song: {
                        artists: true,
                        album: true
                    }
                }
            },
            where: {
                id: req.params.playlistId,
                user: {
                    id: req.decoded.id
                }
            }
        });
        if (!playlist[0]) {
            return res.status(404).json({message: "Playlist not found"})
        }
        res.status(200).json(playlist[0]);
    }

    async addPlaylist(req, res) {
        let {name, isPrivate} = req.body;
        let playlist = new PlayList();
        playlist.name = name ? name : null;
        playlist.isPrivate = isPrivate ? +isPrivate : 1;
        playlist.user = req.decoded;
        try{
            await playlistRepo.save(playlist);
            res.status(200).json(playlist);
        }
        catch(err){
            res.status(404).json(err);
        }
    }

    async UpdateNamePlaylist(req,res) {
        const name = req.body.name;
        const playList = await playlistRepo.findOneBy({id: req.params.id})
        playList.name = name;
        await playlistRepo.save(playList)
        res.status(304).json(playList)
    }

    async addSongPlayList(req, res) {
        let {songId, playlistId} = req.params;
        let userId = req.decoded.id;
        let playlist = await playlistRepo.findOneBy({
                id: playlistId,
                user: {
                    id: userId
                },
        });

        if (!playlist) {
            return res.status(404).json({message: "Playlist not found"});
        }

        let song = await songRepo.findOneBy({id : songId});

        if (!song) {
            return res.status(404).json({message: "Song not found"});
        }

        let currentPlaylistDetail = await playlistDetailRepo.findOneBy({
            playlist: {
                id: playlistId
            },
            song: {
                id: songId
            }
        })

        if (currentPlaylistDetail) {
            return res.status(500).json({message: "Song already in the playlist"});
        }

        let playlistDetail = new PlayListDetail();
        playlistDetail.song = song;
        playlistDetail.playlist = playlist
        
        try{
            await playlistDetailRepo.save(playlistDetail)
            res.status(200).json(playlistDetail);
        }
        catch (e){
            res.status(404).json(e.message);
        }
    }

    async deleteSongPlaylist(req,res){
        let id = await playlistDetailRepo.findOneBy({id:req.params.id});
        try {
            await playlistDetailRepo.delete(id);
            res.status(200).json({title :"success"});
        }
        catch (e) {
            res.status(404).json(e.message);
        }
    }

    async deletePlaylist(req,res){
        await playlistDetailRepo
            .createQueryBuilder('playlistDetails')
            .delete()
            .from(PlayListDetail)
            .where('id = :id', {id: req.params.id})
            .execute();
        const playlist = await playlistRepo.findOneBy({id:req.params.id});
        try {
            await playlistRepo.delete(playlist);
            res.status(304).json({title: "success"})
        }
        catch (e) {
            res.status(404).json(e.message);
        }
    }


}
let playlistController = new PlaylistController();

export default playlistController;