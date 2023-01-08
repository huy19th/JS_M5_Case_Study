import { Entity, PrimaryColumn, Generated, Column, OneToOne, ManyToOne, ManyToMany , JoinTable, JoinColumn, OneToMany} from 'typeorm';
import Playlist from './playlist.model';
import Song from './song.model';

@Entity()
class PlaylistDetail {
    @PrimaryColumn()
    @ManyToOne(() => Playlist, playlist => playlist.songs)
    playlistId: Playlist;
    @PrimaryColumn()
    @ManyToOne(() => Song, song => song.playlists)
    songId: Song;
    @Column({type: 'int'})
    @Generated('increment')
    '#': number;
}

export default PlaylistDetail;