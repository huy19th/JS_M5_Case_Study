import AppDataSource from "../../configs/data-source";
import songModel from "../../models/song.model";
import playListModel from "../../models/playlist.model";
import playListDetail from "../../models/playlistDetail.model";

let playlistRepo = AppDataSource.getRepository(playListModel);
let playlistDetailRepo = AppDataSource.getRepository(playListDetail);
let songRepo = AppDataSource.getRepository(songModel);
class PlaylistController{
    async showPlayList(req,res){
        try{
            let playlist = await playlistDetailRepo.find();
            res.status(200).json(playlist);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
    async addNamePlaylist(res,req){
        let name = req.body.name;
        let playlist = new playListModel();
        playlist.name = name ? name : null;
        try{
            await playlistRepo.save(playlist);
            res.status(200).json(playlist);
        }
        catch(err){
            res.status(404).json(err.message);
        }
    }
    async addSongPlayList(req,res){
        let song = await songRepo.findOneBy({id : req.params.songId});
        let playlist = await playlistRepo.findOneBy({id : req.params.playlistId});
        let playlistDetail = new playListDetail();
        playlistDetail.song = song;
        playlistDetail.playlist = playlist;
        try{
            await playlistRepo.save(playlistDetail)
            res.status(200).json(playlistDetail);
        }
        catch (e){
            res.status(404).json(e.message)

        }
    }


}
let playlistController = new PlaylistController();

export default playlistController;