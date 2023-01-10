import AppDataSource from "../../configs/data-source";
import songModel from "../../models/song.model";
import playListModel from "../../models/playlist.model";
import playListDetail from "../../models/playlistDetail.model";
import PlaylistDetailModel from "../../models/playlistDetail.model";

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
    async addNamePlaylist(req,res){
        let name = req.body.name;
        let playlist = new playListModel();
        playlist.name = name ? name : null;
        playlist.user = req.decoded;
        try{
            await playlistRepo.save(playlist);
            res.status(200).json(playlist);
        }
        catch(err){
            res.status(404).json(err.message);
        }
    }
    async UpdateNamePlaylist(req,res) {
        const name = req.body.name;
        const playList = await playlistRepo.findOneBy({id: req.params.id})
        playList.name = name;
        await playlistRepo.save(playList)
        res.status(304).json(playList)
    }

    async addSongPlayList(req,res){
        let song = await songRepo.findOneBy({id : req.params.songId});
        let playlist = await playlistRepo.findOneBy({id : req.params.playlistId});
        let playlistDetail = new playListDetail();
        playlistDetail.song = song;
        playlistDetail.playlist = playlist;
        try{
            await playlistDetailRepo.save(playlistDetail)
            res.status(200).json(playlistDetail);
        }
        catch (e){
            res.status(404).json(e.message)

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
            .from(PlaylistDetailModel)
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