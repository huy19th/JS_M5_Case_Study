import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Playlist from './playlist.model';
import Song from './song.model';

@Entity()
class PlaylistDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Playlist, playlist => playlist.songs)
    playlist: Playlist;
    @ManyToOne(() => Song, song => song.playlists, {
        onDelete: 'CASCADE'
    })
    song: Song;
}

export default PlaylistDetail;